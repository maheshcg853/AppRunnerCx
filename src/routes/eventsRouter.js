const express = require("express");
const eventController = require("../controllers/eventsController");
const validations = require("../middlewares/validations.middleware");

const router = express.Router();

router.post(
  "/deleteEvent",
  validations.deleteEventVal,
  eventController.deleteEventController
);

module.exports = router;
