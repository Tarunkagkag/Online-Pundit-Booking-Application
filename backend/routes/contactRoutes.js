const express = require("express");
const Contact = require("../models/Contact");
const { createContact, getContacts } = require("../controllers/contactController");
const { auth, isAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

// Public: anyone can submit a contact message
router.post("/", createContact);

// Admin only: view all contacts
router.get("/", auth, isAdmin, getContacts);

// Admin only: delete a contact message
router.delete("/:id", auth, isAdmin, async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Message deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

