/*
  Warnings:

  - A unique constraint covering the columns `[authorId,sessionId]` on the table `Feedback` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Feedback_authorId_sessionId_key` ON `Feedback`(`authorId`, `sessionId`);
