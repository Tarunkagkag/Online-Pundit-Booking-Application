const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");
const { createContact, getContacts } = require("../controllers/contactController");
const { auth, isAdmin } = require("../middleware/authMiddleware");



router.post("/", createContact);


router.get("/", auth, isAdmin, getContacts);


router.delete("/:id", auth, isAdmin, async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Message deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
