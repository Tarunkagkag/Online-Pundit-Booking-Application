
const mongoose = require("mongoose");

const festivalSchema = new mongoose.Schema({
  festival: { type: String, required: true },
  date: { type: String, required: true },
});

const Festival = mongoose.model("Festival", festivalSchema);

module.exports = Festival;
