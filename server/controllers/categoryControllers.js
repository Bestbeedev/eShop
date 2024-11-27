const { prisma } = require("../db/database");
const generateCustomId = require("../utilities/generateCustomId");

const getAllCategory = async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.status(201).json({ categories });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur du serveur", error: error.message });
  }
};

const addCategory = async (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res
      .status(400)
      .json({ message: "Category name and description is required" });
  }
  try {
    const findExistCategory = await prisma.category.findUnique({
      where: { name },
    });

    if (findExistCategory) {
      return res.status(400).json({ message: "Category already exist " });
    }
    const extension = "CATEGORY";
    const customId = generateCustomId(extension);
    const category = await prisma.category.create({
      data: { id: customId, name, description },
    });
    return res.status(201).json({ message: "Category created", category });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur du serveur", error: error.message });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Category id required" });
  }
  try {
    const categoryExist = await prisma.category.findUnique({
      where: { id: id },
    });
    if (!categoryExist) {
      return res.status(400).json({ message: "Category not found" });
    }
    const category = await prisma.category.delete({
      where: { id: id },
    });
    return res.status(201).json({ message: "Category deleted", category });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur du serveur", error: error.message });
  }
};

module.exports = { getAllCategory, addCategory, deleteCategory };
