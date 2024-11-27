const cors = require("cors");
const express = require("express");
const { connectDb } = require("./db/database");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const categoryRoutes=require('./routes/categoryRoutes')
 const inventoryRoutes=require('./routes/inventoryRoutes')
const productInventoriesRoutes = require("./routes/productRoutes");
const userOrder=require("./routes/orderRoutes")
dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    // origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Middleware de log (corrigé)
app.use((req, res, next) => {
  console.log("Middleware", req.path, req.method);
  next();
});

//---Routes principal--
app.use("/api/auth", userRoutes);
app.use("/api/category",categoryRoutes)
app.use("/api/inventories",inventoryRoutes)
app.use("/api/inventories/products",productInventoriesRoutes);
app.use("/api/user/order",userOrder)

connectDb();

const PORTS = process.env.DATABASE_PORTS;
app.listen(PORTS, () => {
  console.log("Serveur is listening on port 5000 ");
});
