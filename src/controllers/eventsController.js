const Event = require("../models/event.model"); 

const deleteEventCtrl = async (req, res) => {
  try {
    const { eventId } = req.body;

    const deleted = await Event.findOneAndDelete({ eventId });
    

    if (!deleted) {
      return res.status(404).json({ message: "Event not found" });
    }

    return res.status(200).json({ message: "Event deleted successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { deleteEventCtrl };
