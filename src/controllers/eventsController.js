const Event = require("../models/event.model");
const { successRes } = require("../models/response.model");

const deleteEventCtrl = async (req, res) => {
  try {
    const eventId = req.body && req.body.eventId;

    if (!eventId) {
      return res.status(400).json(successRes("eventId is required"));
    }

    const deleted = await Event.findOneAndDelete({ eventId });

    if (!deleted) {
      return res.status(404).json(successRes("Event not found"));
    }

    return res.status(200).json(successRes("Event deleted successfully"));
  } catch (err) {
    console.error(err);
    return res.status(500).json(successRes("Internal server error"));
  }
};

module.exports = { deleteEventCtrl };
