import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
    try {
        const jobPosts = await prisma.job_post.findMany();
        res.status(200).json(jobPosts);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500)
                .json({ message: `Произошла ошибка: ${error.message}` });
        } else {
            res.status(500)
                .json({ message: 'Произошла неизвестная ошибка' });
        }
    }
}
