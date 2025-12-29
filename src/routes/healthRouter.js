const express = require("express");
const controller = require("../controllers/health.controller");
const healthRouter = express.Router(express);

healthRouter.get("/", controller.getHealth);
healthRouter.post("/", controller.healthPost);
healthRouter.delete("/", controller.deleteHealth);
healthRouter.patch("/", controller.patchHealth);

module.exports = healthRouter;
