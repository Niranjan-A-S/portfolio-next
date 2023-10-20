import { Db, MongoClient } from "mongodb";

export const connectToDatabase = async () => {
    const client = await MongoClient.connect('mongodb+srv://next-user:rE3mNIWe8fOv45DP@cluster0.cupojqx.mongodb.net/portfolio?retryWrites=true&w=majority');
    return { client, db: client.db() }
}

export const insertDocument = async (db: Db, collection: string, document: any) => {
    return await db.collection(collection).insertOne(document);
}
