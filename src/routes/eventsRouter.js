const express = require("express");
const eventController = require("../controllers/events.controller");
const validations = require("../middlewares/validations.middleware");

const router = express.Router();

router.post(
  "/deleteEvent",
  validations.deleteEventVal,
  eventController.deleteEventCtrl
);

module.exports = router;
