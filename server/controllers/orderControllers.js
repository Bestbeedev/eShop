const { prisma } = require("../db/database");
const generateCustomId = require("../utilities/generateCustomId");

// Obtenir toutes les commandes
const getAllOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        orderDetails: {
          include: { product: true },
        },
        user: true,
      },
    });

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders available" });
    }

    res.status(200).json({ message: "Orders retrieved successfully", orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Obtenir une commande spécifique
const getOrder = async (req, res) => {
  const { orderId } = req.params;

  if (!orderId) {
    return res.status(400).json({ message: "orderId is required" });
  }

  try {
    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: {
        orderDetails: {
          include: { product: true },
        },
        user: true,
      },
    });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order retrieved successfully", order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Obtenir toutes les commandes d'un utilisateur
const getAllOrderUser = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ message: "userId is required" });
  }

  try {
    const orders = await prisma.order.findMany({
      where: { userId },
      include: {
        orderDetails: {
          include: { product: true },
        },
        user: true,
      },
    });

    if (!orders || orders.length === 0) {
      return res
        .status(404)
        .json({ message: "No orders available for this user" });
    }

    res.status(200).json({ message: "Orders retrieved successfully", orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Créer une commande
const createOrder = async (req, res) => {
  const { userId, totalAmount, orderDetails } = req.body;

  if (!userId || !totalAmount || !orderDetails || orderDetails.length === 0) {
    return res
      .status(400)
      .json({ message: "userId, totalAmount, and orderDetails are required" });
  }

  try {
    // Vérification des productId
    const productIds = orderDetails.map((detail) => detail.productId);
    const existingProducts = await prisma.product.findMany({
      where: { id: { in: productIds } },
    });

    if (existingProducts.length !== productIds.length) {
      return res
        .status(400)
        .json({ message: "Invalid productId(s) in orderDetails" });
    }

    // Création de la commande
    const customIdOrder = generateCustomId("ORDER");
    const order = await prisma.order.create({
      data: {
        id: customIdOrder,
        userId,
        totalAmount,
        orderDetails: {
          create: orderDetails.map((detail) => ({
            id: generateCustomId("ORDERDETAIL"),
            productId: detail.productId,
            quantity: detail.quantity,
            unitPrice: detail.unitPrice,
          })),
        },
      },
      include: {
        orderDetails: true,
      },
    });

    res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    if (error.code === "P2003") {
      return res
        .status(400)
        .json({ message: "Invalid foreign key: productId" });
    }
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Mettre à jour une commande
const updateOrder = async (req, res) => {
  const { orderId } = req.params;
  const { totalAmount, orderDetails } = req.body;

  if (!orderId) {
    return res.status(400).json({ message: "orderId is required" });
  }

  try {
    const orderExists = await prisma.order.findUnique({
      where: { id: orderId },
    });

    if (!orderExists) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Mise à jour de la commande
    const updatedOrder = await prisma.order.update({
      where: { id: orderId },
      data: {
        totalAmount,
        orderDetails: {
          updateMany: orderDetails.map((detail) => ({
            where: { id: detail.id },
            data: {
              quantity: detail.quantity,
              unitPrice: detail.unitPrice,
            },
          })),
        },
      },
      include: { orderDetails: true },
    });

    res
      .status(200)
      .json({ message: "Order updated successfully", updatedOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Supprimer une commande
const deleteOrder = async (req, res) => {
  const { orderId } = req.params;

  if (!orderId) {
    return res.status(400).json({ message: "orderId is required" });
  }

  try {
    const order = await prisma.order.delete({
      where: { id: orderId },
    });

    res.status(200).json({ message: "Order deleted successfully", order });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Order not found" });
    }
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Exportation des contrôleurs
module.exports = {
  getAllOrders,
  getOrder,
  getAllOrderUser,
  createOrder,
  updateOrder,
  deleteOrder,
};
