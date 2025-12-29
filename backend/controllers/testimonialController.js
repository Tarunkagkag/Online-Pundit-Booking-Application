
const Testimonial = require("../models/Testimonial");


exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


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


exports.deleteTestimonial = async (req, res) => {
  try {
    const deleted = await Testimonial.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ msg: "Testimonial not found" });
    res.json({ msg: "Testimonial deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

