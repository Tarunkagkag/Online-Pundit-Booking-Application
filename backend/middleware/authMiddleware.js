
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token.split(" ")[1], process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = decoded; 
    next();
  });
}

// Only allow admin users
function isAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied: Admins only" });
  }
  next();
}

// Only allow pundit users
function isPundit(req, res, next) {
  if (req.user.role !== "pundit") {
    return res.status(403).json({ message: "Access denied: Pundits only" });
  }
  next();
}

module.exports = { auth, isAdmin, isPundit };
