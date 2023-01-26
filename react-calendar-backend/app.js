const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const eventsRoutes = require("./routes/events");

// Create server
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: true }));
app.use(express.static("public")); //Public directory

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventsRoutes);

module.exports = app;
