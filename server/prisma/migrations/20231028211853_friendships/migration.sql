/*
  Warnings:

  - You are about to drop the `_UserFriends` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "FriendStatus" AS ENUM ('INVITE_SENT', 'INVITE_RECEIVED', 'FRIENDS');

-- DropForeignKey
ALTER TABLE "_UserFriends" DROP CONSTRAINT "_UserFriends_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserFriends" DROP CONSTRAINT "_UserFriends_B_fkey";

-- DropTable
DROP TABLE "_UserFriends";

-- CreateTable
CREATE TABLE "Friendship" (
    "senderId" INTEGER NOT NULL,
    "receiverId" INTEGER NOT NULL,
    "status" "FriendStatus" NOT NULL,

    CONSTRAINT "Friendship_pkey" PRIMARY KEY ("senderId","receiverId")
);

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
