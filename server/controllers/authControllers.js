const { prisma } = require("../db/database");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utilities/jwt");
const generateCustomId = require("../utilities/generateCustomId");

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existUser) {
      return res.status(400).json({ message: "Utilisateur deja existant" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const extension="USER"
    const customId = generateCustomId(extension);
    const user = await prisma.user.create({
      data: {
        id: customId,
        username,
        email,
        password: hashedPassword,
      },
    });

    const token = generateToken(user);
    res
      .status(201)
      .json({ message: "Utilisateur crée avec succès", user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur du serveur" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return res.status(400).json({ message: "Utilisateur non retrouver" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ message: "Mot de passe incorrect" });
    }
    const token = generateToken(user);
    res.status(200).json({ message: "Connexion avec succès", user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur du serveur" });
  }
};

module.exports = {
  login,
  signup,
};
