/*
  Warnings:

  - The `jobCategory` column on the `job_post` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "job_post" DROP COLUMN "jobCategory",
ADD COLUMN     "jobCategory" TEXT[];
