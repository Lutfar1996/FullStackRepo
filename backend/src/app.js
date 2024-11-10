const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(bodyParser.json()); // Parse JSON request bodies
app.use("/api/auth", authRoutes); // Register authentication routes

module.exports = app;
