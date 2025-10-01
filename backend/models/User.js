// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, default: "user" },
//   resetPasswordToken: String,
//   resetPasswordExpires: Date,
// });

// module.exports = mongoose.model("User", userSchema);


const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  // Role: user or pundit
  role: { type: String, enum: ["user", "pundit"], default: "user" },

  // Pundit-specific fields
  expertise: { type: String },       // optional, only for pundits
  experience: { type: String },      // optional, only for pundits
  phone: { type: String },           // optional, only for pundits

  // Password reset fields
  resetPasswordToken: String,
  resetPasswordExpires: Date,
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
