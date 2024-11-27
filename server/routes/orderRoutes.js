const express = require("express");
const { verifyUser } = require("../middlewares/userMiddleware");
const { createOrder, getAllOrders, getOrder, deleteOrder, updateOrder, getAllOrderUser } = require("../controllers/orderControllers");
const route = express.Router();

route.use(verifyUser);

route.get("/getAllOrders", getAllOrders);

route.post("/createOrder", createOrder);

route.get("/getAllOrder/:userId", getAllOrderUser);

route.get("/getOrder/:orderId", getOrder);

route.delete("/deleteOrder/:orderId", deleteOrder);

route.put("/updateOrder/:orderId", updateOrder);

module.exports = route;
