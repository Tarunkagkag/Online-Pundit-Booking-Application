
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const contactRoutes = require("./routes/contactRoutes");
// const authRoutes = require("./routes/authRoutes");
// const userRoutes = require("./routes/userRoutes");
// const festivalRoutes = require("./routes/festivalRoutes");
// const testimonialRoutes = require("./routes/testimonialRoutes");
// const punditRoutes = require("./routes/punditRoutes");

// const app = express();

// // Middlewares
// app.use(express.json());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );

// // API Routes
// app.use("/api/contacts", contactRoutes);   
// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/festivals", festivalRoutes);
// app.use("/api/testimonials", testimonialRoutes);  
// app.use("/api/pundits", punditRoutes);

// // DB + Server
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("✅ MongoDB connected");
//     app.listen(process.env.PORT || 5000, () =>
//       console.log(`🚀 Server running on port ${process.env.PORT}`)
//     );
//   })
//   .catch((err) => console.error("❌ MongoDB connection error:", err));
// server.js
// server.js
console.log("🔥 SERVER.JS VERSION 2026-01-05 RUNNING");

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const festivalRoutes = require("./routes/festivalRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");
const punditRoutes = require("./routes/punditRoutes");

const app = express();

/* =======================
   MIDDLEWARES
======================= */
app.use(express.json());

// ✅ MANUAL CORS (WORKS 100%)
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://online-pundit-booking.netlify.app"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

/* =======================
   ROUTES
======================= */
app.get("/", (req, res) => {
  res.send("✅ Pundit Backend Running!");
});

app.get("/test", (req, res) => {
  res.json({ status: "CORS WORKING" });
});

app.use("/api/contacts", contactRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/festivals", festivalRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/pundits", punditRoutes);

/* =======================
   DATABASE + SERVER
======================= */
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
