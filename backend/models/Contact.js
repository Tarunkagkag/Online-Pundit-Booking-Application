const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    contacts: { type: String, required: true }, // 📞 Contact Number
    date: { type: Date, required: true }, // 📅 Date of Pooja
    poojaType: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
