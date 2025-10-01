const Contact = require("../models/Contact");

// Save contact form
exports.createContact = async (req, res) => {
  try {
    const { name, email,contacts,
      date,
      poojaType, message } = req.body;
    const contact = new Contact({ name, email,contacts,
      date,
      poojaType, message });
    await contact.save();
    res.json({ message: "Contact form submitted successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Error saving contact data" });
  }
};

// Get all contact forms (Admin only)
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching contact data" });
  }
};
