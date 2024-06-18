import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const {
            name, phoneNumber, city, jobTitle, jobDescription, jobCategory, isVip,
        } = req.body;
        try {
            const newJob = await prisma.jobPost.create({
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
        } catch (error) {
            res.status(500).json({ message: `Ошибка при добавлении вакансии: ${error.message}` });
        }
    } else {
        res.status(405).json({ message: 'Метод не разрешен' });
    }
}
