import { Handler } from '@netlify/functions';
import Collection from './Collection';

export const handler: Handler = async (event) => {
  try {
    if (event.httpMethod !== 'POST')
    throw `${event.httpMethod} method is not supported`;

    if (!event.body) throw 'body is empty';

    const { message } = JSON.parse(event.body);
    const text = message.trim();

    if (text.length === 0) throw 'message must not be empty';
    if (text.length > 256)
    throw 'message must not be longer than 256 characters';

    try {
      const collection = await Collection();

      await collection.insertOne({
        text,
        replies: [],
        timestamp: new Date().toISOString()
      });

      return {
        statusCode: 200,
        body: JSON.stringify({ message: text, result: 'message posted' })
      };
    } catch(err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: err.toString() })
      }
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error })
    }
  }
}
