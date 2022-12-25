import { Handler } from '@netlify/functions';
import Collection from './Collection';

export const handler: Handler = async (event) => {
  try {
    const isOwner = event.headers?.authorization === process.env.WEB_PASSWORD;
    const collection = await Collection();
    const results = await collection
      .find(isOwner ? {} : { private: false })
      .sort({ timestamp: -1 })
      .toArray();

    return {
      statusCode: 200,
      body: JSON.stringify(results)
    }
  } catch(err) {
    return {
      statusCode: 500,
      body: err.toString()
    }
  }
}
