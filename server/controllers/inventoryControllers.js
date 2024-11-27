const {prisma} = require("../db/database");
const generateCustomId = require("../utilities/generateCustomId");

const getInventoryByProduct = async (req, res) => {
  const { productId } = req.params;
  if (!productId) {
    return res.status(400).json({ message: "Product ID is required" });
  }
  try {
    const inventory = await prisma.inventory.findMany({
      where: { productId },
    });
    if (!inventory || inventory.length === 0) {
      return res.status(404).json({ message: "Inventory not found" });
    }
    res
      .status(200)
      .json({ message: "Inventory retrieved successfully", inventory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const addInventory = async (req, res) => {
  const { name, price, stock, categoryId, description } = req.body;
  if (!categoryId || !name || !price || !description || stock === undefined) {
    return res.status(400).json({
      message: "Name, price, stock, categoryId, and description are required",
    });
  }
  try {
    const customIdInv = generateCustomId("INVENTORY");
    const customIdProduct = generateCustomId("PRODUCT");

    const categoryExists = await prisma.category.findUnique({
      where: { id: categoryId },
    });

    if (!categoryExists) {
      return res.status(400).json({ message: "Category does not exist" });
    }

    const product = await prisma.product.create({
      data: {
        id: customIdProduct,
        name,
        stock,
        description,
        price,
        categoryId,
      },
    });

    const inventory = await prisma.inventory.create({
      data: {
        id: customIdInv,
        productId: product.id,
        quantity: stock,
        lastRestockDate: new Date(),
        status: stock > 0 ? "ACTIVE" : "OUT_OF_STOCK",
      },
    });

    res.status(201).json({
      message: "Product and inventory created successfully",
      inventory,
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getAllInventory = async (req, res) => {
  try {
    const inventory = await prisma.inventory.findMany();
    if (!inventory || inventory.length === 0) {
      return res.status(404).json({ message: "No inventory available" });
    }
    res
      .status(200)
      .json({ message: "Inventories retrieved successfully", inventory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

 module.exports = {getInventoryByProduct,addInventory,getAllInventory};
