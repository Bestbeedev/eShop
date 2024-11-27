const jwt = require("jsonwebtoken");
const KEY = process.env.JWT_KEYS;

const generateToken = (user) => {
  return jwt.sign(
    {
      userId: user.id,
      role: user.role,
      username: user.username,
      email: user.email,
    },
    KEY,
    {
      expiresIn: "3d",
    }
  );
};

const verifyToken = (token) => {
  jwt.verify(token, KEY);
};

module.exports = {
  generateToken,
  verifyToken,
};
