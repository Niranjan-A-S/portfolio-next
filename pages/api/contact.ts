import { NextApiRequest, NextApiResponse } from "next"

const handleContactPost = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, message, name } = req.body;
    if (!email || !message || !name) {
        res.status(400).send({ message: 'All fields are required' });
    };
    console.log({ email, message, name });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        await handleContactPost(req, res)
    }
    res.status(300).send({ message: 'Method not implemented' })
}