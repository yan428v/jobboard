// src/api/jobPosts.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {
        const jobPosts = await prisma.jobPost.findMany();
        res.status(200).json(jobPosts);
    } catch (error) {
        res.status(500).json({ error: `Произошла ошибка: ${error.message}` });
    }
}
