const express = require("express");
const {
  getInventoryByProduct,
  addInventory,
  getAllInventory,
} = require("../controllers/inventoryControllers");
const { verifyAdmin } = require("../middlewares/adminMiddleware");
const route = express.Router();

route.use(verifyAdmin)

route.get(
  "/getInventoryByProduct/:productId",
  getInventoryByProduct
);

route.get("/getAllInventory",  getAllInventory);

route.post("/addInventory", addInventory);

module.exports = route;
