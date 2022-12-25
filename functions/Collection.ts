import { Handler } from '@netlify/functions';
import { MongoClient } from 'mongodb';

export const handler: Handler = async () => {
  return { statusCode: 404 };
}

export default async function Collection() {
  const client = new MongoClient(process.env.MONGODB_URI);
  const connect = client.connect();
  const database = (await connect).db(process.env.MONGODB_DATABASE);
  const collection = database.collection(process.env.MONGODB_COLLECTION);

  return collection;
}
