import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => new PrismaClient();

export const prisma = globalThis.prisma || prismaClientSingleton();

declare global {
    // eslint-disable-next-line no-var
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

if (process.env.NODE_ENV !== 'production') {
    globalThis.prisma = prisma;
}
