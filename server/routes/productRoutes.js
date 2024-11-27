const express = require("express");
const {
  deleteProduct,
  updateProduct,
  getAllProducts,
  getOneProduct,
} = require("../controllers/productControllers");
const { verifyAdmin } = require("../middlewares/adminMiddleware");
const route = express.Router();

route.use(verifyAdmin);

route.get("/getAllProducts", getAllProducts);

route.get("/getOneProduct/:productId", getOneProduct);

route.delete("/deleteProduct/:id", deleteProduct);

route.put("/updateProduct/:id", updateProduct);

module.exports = route;
