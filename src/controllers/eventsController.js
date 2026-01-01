const { deleteEventService } = require("../services/events.service");

const deleteEventController = async (req, res) => {
  try {
    const { eventId } = req.params;

    if (!eventId) {
      return res.status(400).json(successRes("eventId is required"));
    }

    const deleted = await deleteEventService(eventId);

    if (!deleted) {
      return res.status(404).json(successRes("Event not found"));
    }

    return res
      .status(200)
      .json(successRes("Event deleted successfully", deleted));
  } catch (err) {
    return res
      .status(500)
      .json(successRes(err.message || "Internal server error",err));
  }
};

module.exports = { deleteEventController };
