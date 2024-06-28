import { PrismaClient } from '@prisma/client';
import { City, JobCategory } from '../lib/types/types';

const prisma = new PrismaClient();

const initialPosts = [
    ...Array(100).fill(null).map((_, index) => ({
        name: `Employer ${index + 1}`,
        phoneNumber: `+972-50-000-${String(index + 1000).padStart(4, '0')}`,
        whatsappNumber: index % 2 === 0
            ? `+972-50-000-${String(index + 1000).padStart(4, '0')}` : null,
        telegramNumber: index % 3 === 0
            ? `+972-50-000-${String(index + 1000).padStart(4, '0')}` : null,
        city: Object.values(City)[index % Object.values(City).length],
        jobTitle: `Job Title ${index + 1}`,
        jobDescription: `Description for Job Title ${index + 1}, requires specific qualifications and experience.`,
        jobCategory: Object.values(JobCategory)[index % Object.values(JobCategory).length],
        isVip: index % 10 === 0,
    })),
];

const seed = async () => {
    await prisma.job_post.deleteMany();

    for (const post of initialPosts) {
        await prisma.job_post.create({
            data: post,
        });
    }
};

seed();
