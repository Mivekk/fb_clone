/*
  Warnings:

  - The primary key for the `Friendship` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `receiverId` on the `Friendship` table. All the data in the column will be lost.
  - You are about to drop the column `senderId` on the `Friendship` table. All the data in the column will be lost.
  - Added the required column `first_user_id` to the `Friendship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `second_user_id` to the `Friendship` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Friendship" DROP CONSTRAINT "Friendship_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "Friendship" DROP CONSTRAINT "Friendship_senderId_fkey";

-- AlterTable
ALTER TABLE "Friendship" DROP CONSTRAINT "Friendship_pkey",
DROP COLUMN "receiverId",
DROP COLUMN "senderId",
ADD COLUMN     "first_user_id" INTEGER NOT NULL,
ADD COLUMN     "second_user_id" INTEGER NOT NULL,
ADD CONSTRAINT "Friendship_pkey" PRIMARY KEY ("first_user_id", "second_user_id");

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_first_user_id_fkey" FOREIGN KEY ("first_user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_second_user_id_fkey" FOREIGN KEY ("second_user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
