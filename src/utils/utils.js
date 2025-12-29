const bcrypt = require("bcrypt");

async function hashPassword(plainPassword) {
  const saltRounds = 12; // can be between 10-14 typically
  return bcrypt.hash(plainPassword, saltRounds);
}

async function verifyPassword(plainPassword, passwordHash) {
  return bcrypt.compare(plainPassword, passwordHash);
}

module.exports = {
  hashPassword,
  verifyPassword,
};
