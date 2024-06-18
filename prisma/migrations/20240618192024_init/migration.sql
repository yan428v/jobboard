-- CreateTable
CREATE TABLE "JobPost" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" VARCHAR(20) NOT NULL,
    "whatsappNumber" VARCHAR(20),
    "telegramNumber" VARCHAR(20),
    "city" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "jobDescription" TEXT NOT NULL,
    "jobCategory" TEXT NOT NULL,
    "isVip" BOOLEAN NOT NULL DEFAULT false,
    "creationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JobPost_pkey" PRIMARY KEY ("id")
);
