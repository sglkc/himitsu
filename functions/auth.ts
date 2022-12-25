import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  const isOwner = event.headers?.authorization === process.env.WEB_PASSWORD;

  return { statusCode: isOwner ? 200 : 403 }
}
