import { connectToDatabase, insertDocument } from "@/db/mongodb";
import { Db, MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next"

const handleContactPost = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, message, name } = req.body;
    if (!email || !email.includes('@') || !message || message.trim() === '' || !name || name.trim() === '') {
        res.status(422).send({ message: 'Invalid Input' });
    };

    const newMessage: any = {
        email,
        message,
        name
    }
    let _client, _db;
    try {
        const { client, db } = await connectToDatabase();
        _client = client;
        _db = db
    } catch (error) {
        res.status(500).send({ message: 'Could not connect to database' });
    }

    try {
        const result = await insertDocument(_db!, 'messages', newMessage);
        newMessage.id! = result.insertedId;
        res.status(201).send({
            message: 'Message sent successfully',
            success: true
        })
        await _client?.close();
    } catch (error) {
        res.status(500).send({ message: 'Could not send message' });
        await _client?.close();
    }

}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        await handleContactPost(req, res)
    }
    res.status(300).send({ message: 'Method not implemented' })
}
