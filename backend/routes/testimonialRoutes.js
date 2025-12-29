
const express = require("express");
const router = express.Router();
const { getTestimonials, addTestimonial, deleteTestimonial } = require("../controllers/testimonialController");

router.get("/", getTestimonials);
router.post("/", addTestimonial);
router.delete("/:id", deleteTestimonial); 

module.exports = router;

