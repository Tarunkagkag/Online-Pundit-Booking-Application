
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
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Import your route files
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

// Allowed origins for CORS
const allowedOrigins = [
  "http://localhost:3000",                         // local dev
  "https://online-pundit-booking.netlify.app"      // Netlify frontend
];

app.use(
  cors({
    origin: function(origin, callback) {
      // Allow requests with no origin (like Postman or mobile apps)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

/* =======================
   ROUTES
======================= */
app.get("/", (req, res) => {
  res.send("✅ Pundit Backend Running!");
});

// API Routes
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
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
