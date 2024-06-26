import { prisma } from '../app/lib/prisma';

export function getPostById(id: number) {
    return prisma.job_post.findUnique({
        where: {
            id,
        },
    });
}

export function getAllPosts() {
    return prisma.job_post.findMany();
}
