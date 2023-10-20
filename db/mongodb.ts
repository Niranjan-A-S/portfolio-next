import { Db, MongoClient } from "mongodb";

const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.cupojqx.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;

export const connectToDatabase = async () => {
    const client = await MongoClient.connect(connectionString);
    return { client, db: client.db() }
}

export const insertDocument = async (db: Db, collection: string, document: any) => {
    return await db.collection(collection).insertOne(document);
}
