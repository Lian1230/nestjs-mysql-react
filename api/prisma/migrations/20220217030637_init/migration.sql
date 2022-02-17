/*
  Warnings:

  - You are about to drop the column `createTime` on the `Feedback` table. All the data in the column will be lost.
  - Added the required column `timeCreated` to the `Feedback` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Feedback` DROP COLUMN `createTime`,
    ADD COLUMN `timeCreated` DATETIME(3) NOT NULL;
