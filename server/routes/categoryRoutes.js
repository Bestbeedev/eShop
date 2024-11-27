const express = require("express");
const { addCategory, getAllCategory, deleteCategory } = require("../controllers/categoryControllers");
const { verifyAdmin } = require("../middlewares/adminMiddleware");
const route = express.Router();


route.get("/getAllCategory", getAllCategory);

route.post("/addCategory",verifyAdmin, addCategory);

route.delete("/deleteCategory/:id", verifyAdmin, deleteCategory);

module.exports = route;
