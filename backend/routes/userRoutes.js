
const express = require("express");
const { getAllUsers } = require("../controllers/userController");
const { auth, isAdmin } = require("../middleware/authMiddleware");
const User = require("../models/User");

const router = express.Router();


router.get("/", auth, isAdmin, getAllUsers);


router.delete("/:id", auth, isAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error while deleting user" });
  }
});


router.get("/pundits/:id", async (req, res) => {
  try {
    const pundit = await User.findById(req.params.id);
    if (!pundit || pundit.role !== "pundit") {
      return res.status(404).json({ message: "Pundit not found" });
    }
    res.status(200).json(pundit);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error while fetching pundit" });
  }
});

module.exports = router;
