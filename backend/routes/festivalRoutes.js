
const express = require("express");
const router = express.Router();
const { getFestivals, addFestival, deleteFestival } = require("../controllers/festivalController");

router.get("/", getFestivals);
router.post("/", addFestival);
router.delete("/:id", deleteFestival); // <-- delete route

module.exports = router;

