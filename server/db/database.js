
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const connectDb = async () => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    console.log("La connexion a la database avec succès ");
  } catch (error) {
    console.error("Erreur lors de la connection a la database");
  }
};

module.exports = {
  prisma,
  connectDb,
};
;


