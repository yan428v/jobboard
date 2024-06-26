'use server';

import { JobPostData } from '../../types/types';

import { prisma } from './prisma';

export async function createJobPost(data: JobPostData) {
    // TODO create validation data func
    try {
        const jobPost = await prisma.job_post.create({
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
        return jobPost;
    } catch (error) {
        console.error('Error creating job post:', error);
        throw new Error('Failed to create job post');
    }
}
