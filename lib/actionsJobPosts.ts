'use server';

import { unstable_noStore as noStore } from 'next/cache';

import { prisma } from '@/prisma/prisma';
import { JobPostCreateData } from './types/types';

export async function createJobPost(data: JobPostCreateData) {
    // TODO create validation data func
    // не ChooseCategory и не ChooseCity
    noStore();

    try {
        return await prisma.job_post.create({
            data: {
                name: data.name,
                phoneNumber: data.phoneNumber,
                whatsappNumber: data.whatsappNumber,
                telegramNumber: data.telegramNumber,
                city: data.city,
                jobTitle: data.jobTitle,
                jobDescription: data.jobDescription,
                jobCategory: data.jobCategory,
                isVip: data.isVip,
            },
        });
    } catch (error) {
        console.error('Error creating job post:', error);
        throw new Error('Failed to create job post');
    }
}

export async function getPostById(id: number) {
    noStore();
    return prisma.job_post.findUnique({
        where: {
            id,
        },
    });
}

export async function getAllPosts() {
    noStore();
    try {
        return await prisma.job_post.findMany();
    } catch (error) {
        console.error('Error retrieving job posts:', error);
        throw new Error('Failed to retrieve job posts');
    }
}
