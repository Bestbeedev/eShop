const { prisma } = require("../db/database");
//const generateCustomId = require("../utilities/generateCustomId");

const getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    if (!products || products.length === 0) {
      return res.status(404).json({ message: "No products available" });
    }
    res
      .status(200)
      .json({ message: "Products retrieved successfully", products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getOneProduct = async (req, res) => {
  const { productId } = req.params;
  if (!productId) {
    return res.status(400).json({ message: "Product ID is required" });
  }
  try {
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res
      .status(200)
      .json({ message: "Product retrieved successfully", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params; // Récupérer l'ID du produit depuis les paramètres
  const { name, price, description, status, quantity } = req.body;

  if (!id) {
    return res.status(400).json({ message: "ProductId is required" });
  }

  if (!name || !price || !description || quantity === undefined || !status) {
    return res.status(400).json({
      message: "Name, price, description, status, and quantity are required",
    });
  }

  try {
    // Vérification si le produit existe
    const productExists = await prisma.product.findUnique({
      where: { id: id },
    });

    if (!productExists) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Vérification si l'inventaire existe pour ce produit
    const inventoryExists = await prisma.inventory.findUnique({
      where: { productId: id },
    });

    if (!inventoryExists) {
      return res
        .status(404)
        .json({ message: "Inventory not found for this product" });
    }

    // Mise à jour via une transaction
    const [updatedProduct, updatedInventory] = await prisma.$transaction([
      prisma.product.update({
        where: { id: id },
        data: {
          name,
          description,
          price, // Conversion explicite au type Decimal ---> new Prisma.Decimal(price)
        },
      }),
      prisma.inventory.update({
        where: { productId: id },
        data: {
          quantity,
          status: status || (quantity > 0 ? "ACTIVE" : "OUT_OF_STOCK"),
          lastRestockDate: quantity !== undefined ? new Date() : undefined,
        },
      }),
    ]);

    res.status(200).json({
      message: "Product and inventory updated successfully",
      product: updatedProduct,
      inventory: updatedInventory,
    });
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error);

    if (error.code === "P2025") {
      return res
        .status(404)
        .json({ message: "Product or inventory not found" });
    }

    res.status(500).json({ message: "Server error", error: error.message });
  }
};


const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const inventory = await prisma.inventory.delete({
      where: {
        productId: id,
      },
    });
    const product = await prisma.product.delete({
      where: {
        id,
      },
    });

    res.status(200).json({
      message: "Product and inventory deleted successfully",
      product,
      inventory,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};




module.exports = {
  getAllProducts,
  updateProduct,
  deleteProduct,
  getOneProduct,
};
