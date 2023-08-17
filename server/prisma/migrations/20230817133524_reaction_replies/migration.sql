/*
  Warnings:

  - You are about to drop the column `value` on the `Reaction` table. All the data in the column will be lost.
  - Added the required column `type` to the `Reaction` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ReactionType" AS ENUM ('LIKE', 'DISLIKE');

-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "replyId" INTEGER;

-- AlterTable
ALTER TABLE "Reaction" DROP COLUMN "value",
ADD COLUMN     "commentId" INTEGER,
ADD COLUMN     "type" "ReactionType" NOT NULL;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction" ADD CONSTRAINT "Reaction_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
