import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        console.log(1);
        const {
            name, phoneNumber, city, jobTitle, jobDescription, jobCategory, isVip,
        } = req.body;
        try {
            console.log(2);
            console.log(req.body);
            const newJob = await prisma.job_post.create({
                data: {
                    name,
                    phoneNumber,
                    whatsappNumber: req.body.whatsappNumber || null,
                    telegramNumber: req.body.telegramNumber || null,
                    city,
                    jobTitle,
                    jobDescription,
                    jobCategory,
                    isVip,
                },
            });
            res.status(201).json(newJob);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500)
                    .json({ message: `Ошибка при добавлении вакансии: ${error.message}` });
            } else {
                res.status(500)
                    .json({ message: 'Произошла неизвестная ошибка' });
            }
        }
    } else {
        res.status(405).json({ message: 'Метод не разрешен' });
    }
}
