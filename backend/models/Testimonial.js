const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  review: { type: String, required: true },
});

module.exports = mongoose.model("Testimonial", testimonialSchema);
