const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  const users = await User.find().select("-password"); // hide password
  res.json(users);
};
