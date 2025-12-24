
const express = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  loginUser,
} = require("./userController");

const router = express.Router();


router.get("/", getAllUsers);


router.get("/:id", getUserById);


router.post("/", Registration);``


router.post("/login", loginUser);

module.exports = router;
