const express = require("express");
const controllers = require("../controllers/auth.controller");
const validations = require("../middlewares/validations.middleware");

const authRouter = express.Router();

authRouter.post(
  "/register",
  validations.authRegisterVal,
  controllers.registerCtrl
);

module.exports = authRouter;
