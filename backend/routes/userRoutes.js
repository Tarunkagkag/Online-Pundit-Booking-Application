const express = require("express");
const { getAllUsers } = require("../controllers/userController");
const { auth, isAdmin } = require("../middleware/authMiddleware");
const User = require("../models/User"); // ✅ Make sure User model is imported

const router = express.Router();

// Admin only: get all users
router.get("/", auth, isAdmin, getAllUsers);

// Admin only: delete a user
router.delete("/:id", auth, isAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err); // ✅ log the error
    res.status(500).json({ message: "Server error while deleting user" });
  }
});

module.exports = router;
