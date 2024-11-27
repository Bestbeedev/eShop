-- DropForeignKey
ALTER TABLE `OrderDetail` DROP FOREIGN KEY `OrderDetail_orderId_fkey`;

-- DropIndex
DROP INDEX `OrderDetail_orderId_key` ON `OrderDetail`;
