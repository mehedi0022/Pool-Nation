const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const connectDB = require("./config/mongoDB");

// Port
const PORT = process.env.PORT || 3000;

// Middleware
app.use(
  cors({
    origin: process.env.ADMIN_CORS_ORIGIN || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// Define your admin routes here

app.get("/", (req, res) => {
  res.send("Admin Panel is running");
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
