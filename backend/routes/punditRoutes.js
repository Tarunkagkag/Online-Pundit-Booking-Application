const express = require("express");
const router = express.Router();
const { auth, isPundit } = require("../middleware/authMiddleware");
const Booking = require("../models/Booking");
const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    const pundits = await User.find({ role: "pundit" }); // fetch all users with role pundit
    res.json(pundits);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
router.get("/bookings", auth, isPundit, async (req, res) => {
  try {
    const bookings = await Booking.find({ pundit: req.user.id }).populate("user");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Cancel a booking
router.put("/cancel/:id", auth, isPundit, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    booking.status = "cancelled";
    await booking.save();
    res.json({ message: "Booking cancelled successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

