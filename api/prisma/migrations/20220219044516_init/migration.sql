/*
  Warnings:

  - Made the column `startTime` on table `Session` required. This step will fail if there are existing NULL values in that column.
  - Made the column `duration` on table `Session` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Session` MODIFY `startTime` DATETIME(3) NOT NULL,
    MODIFY `duration` INTEGER NOT NULL;
