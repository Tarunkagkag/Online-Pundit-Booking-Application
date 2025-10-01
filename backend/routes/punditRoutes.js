// routes/punditRoutes.js
const express = require("express");
const User = require("../models/User");
const router = express.Router();

// GET all pundits
router.get("/", async (req, res) => {
  try {
    const pundits = await User.find({ role: "pundit" });
    res.status(200).json(pundits);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error while fetching pundits" });
  }
});

module.exports = router;
