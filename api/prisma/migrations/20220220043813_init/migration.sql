/*
  Warnings:

  - You are about to drop the column `timeCreated` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `Session` table. All the data in the column will be lost.
  - Added the required column `startedAt` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Feedback` DROP COLUMN `timeCreated`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Session` DROP COLUMN `startTime`,
    ADD COLUMN `startedAt` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `SessionsOnUsers` (
    `userId` INTEGER NOT NULL,
    `sessionId` INTEGER NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`userId`, `sessionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SessionsOnUsers` ADD CONSTRAINT `SessionsOnUsers_sessionId_fkey` FOREIGN KEY (`sessionId`) REFERENCES `Session`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SessionsOnUsers` ADD CONSTRAINT `SessionsOnUsers_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
