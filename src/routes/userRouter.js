const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.get("/", userController.getUsersCtrl);

// router.get("/:id", userController.getUserById);

// router.post("/", userController.createUser);

// router.post("/login", userController.loginUser);

// router.post("/me", userController.getMe);

module.exports = router;
