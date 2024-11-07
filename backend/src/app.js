// /src/app.js

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");

const app = express();

// Enable CORS
app.use(
  cors({
    origin: "http://3.88.100.16:5000", // Frontend running on port 5000 (React app)
  })
);

app.use(bodyParser.json()); // Parse JSON request bodies
app.use("/api/auth", authRoutes); // Register authentication routes

module.exports = app;
