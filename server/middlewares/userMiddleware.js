const jwt = require("jsonwebtoken");
const { prisma } = require("../db/database");
const verifyUser = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied, No token provided" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_KEYS);
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });
    if (!user) {
      return res.status(403).json({ message: "User not found" });
    }
    req.user = user;
    console.log(decoded);
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error", err: err.message });
  }
};

module.exports = { verifyUser };
