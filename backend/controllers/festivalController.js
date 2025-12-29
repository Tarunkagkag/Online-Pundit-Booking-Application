
const Festival = require("../models/Festival");
exports.getFestivals = async (req, res) => {
  try {
    const festivals = await Festival.find();
    res.json(festivals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.addFestival = async (req, res) => {
  try {
    const { festival, date } = req.body;
    const newFestival = new Festival({ festival, date });
    await newFestival.save();
    res.json(newFestival);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.deleteFestival = async (req, res) => {
  try {
    const deleted = await Festival.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ msg: "Festival not found" });
    res.json({ msg: "Festival deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

