
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
require("dotenv").config();

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    const existingAdmin = await User.findOne({ email: "admin@pundit.com" });
    if (existingAdmin) {
      console.log("⚠️ Admin already exists");
      return process.exit();
    }

    const hashedPassword = await bcrypt.hash("AdminPassword123", 10);

    const admin = new User({
      name: "Super Admin",
      email: "admin@pundit.com",
      password: hashedPassword,
      role: "admin",
    });

    await admin.save();
    console.log("✅ Admin user created successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Error creating admin:", err.message);
    process.exit(1);
  }
}

createAdmin();

