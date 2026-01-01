const express = require("express");
const { errorRes } = require("../models/response.model");
const {
  getSessionCtrl,
  deleteSessionCtrl,
} = require("../controllers/redis.controller");
const redisRouter = express.Router(express);

redisRouter.get("/", getSessionCtrl);
redisRouter.delete("/", deleteSessionCtrl);

module.exports = { redisRouter };
