import { MongoClient } from 'mongodb';

const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.ydeabvx.mongodb.net/?retryWrites=true&w=majority`;

export async function connectDb() {
  const client = await MongoClient.connect(connectionString);
  return client;
}

export async function insertDoc(client, collection, document) {
  const db = client.db(process.env.mongodb_database);

  const result = await db.collection(collection).insertOne(document);
  return result;
}
