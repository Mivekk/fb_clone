-- AlterTable
ALTER TABLE "User" ADD COLUMN     "external_id" TEXT,
ADD COLUMN     "external_type" TEXT,
ALTER COLUMN "password" DROP NOT NULL;
