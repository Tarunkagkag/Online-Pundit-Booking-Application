
const Contact = require("../models/Contact");
const sendEmail = require("../utils/sendEmail");

exports.createContact = async (req, res) => {
  try {
    const { name, email, contacts, date, poojaType, message } = req.body;

    const contact = new Contact({
      name,
      email,
      contacts,
      date,
      poojaType,
      message,
    });

    await contact.save();

    // 📩 Confirmation Email Text (matches your sendEmail format)
    const emailText = `
🙏 Pooja Booking Confirmation

Dear ${name},

Thank you for booking a pooja with us.

Here are your booking details:

Pooja Type: ${poojaType}
Date: ${date}
Contact Number: ${contacts}

We will contact you shortly with further details.

Regards,
Pundit Booking Team 🙏`;

    await sendEmail(email, "Your Pooja Booking Confirmation ✔️", emailText);

    res.json({ message: "Booking saved & confirmation email sent!" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error saving contact data" });
  }
};

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching contact data" });
  }
};
