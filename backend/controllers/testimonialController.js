// const Testimonial = require("../models/Testimonial");

// exports.getTestimonials = async (req, res) => {
//   const testimonials = await Testimonial.find();
//   res.json(testimonials);
// };

// exports.addTestimonial = async (req, res) => {
//   const { name, review } = req.body;
//   const newTestimonial = new Testimonial({ name, review });
//   await newTestimonial.save();
//   res.status(201).json(newTestimonial);
// };
const Testimonial = require("../models/Testimonial");

// Get all testimonials
exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new testimonial
exports.addTestimonial = async (req, res) => {
  try {
    const { name, review } = req.body;
    const newTestimonial = new Testimonial({ name, review });
    await newTestimonial.save();
    res.json(newTestimonial);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a testimonial
exports.deleteTestimonial = async (req, res) => {
  try {
    const deleted = await Testimonial.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ msg: "Testimonial not found" });
    res.json({ msg: "Testimonial deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

