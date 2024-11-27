/*
  Warnings:

  - A unique constraint covering the columns `[orderId]` on the table `OrderDetail` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `OrderDetail_orderId_key` ON `OrderDetail`(`orderId`);
