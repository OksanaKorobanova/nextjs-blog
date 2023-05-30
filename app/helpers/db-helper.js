import { MongoClient } from 'mongodb';

export async function connectDb() {
  const client = await MongoClient.connect(process.env.MONGO_URL);
  return client;
}

export async function insertDoc(client, collection, document) {
  const db = client.db('blog');

  const result = await db.collection(collection).insertOne(document);
  return result;
}
