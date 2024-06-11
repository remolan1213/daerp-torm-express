const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/views", "index.html"));
});

app.use(express.static(path.join(__dirname, "../frontend/public")));
app.use(express.static(path.join(__dirname, "../frontend/js")));
app.use(express.static(path.join(__dirname, "../frontend/assets/png")));
app.use(express.static(path.join(__dirname, "../frontend/assets/svg")));
// Define your routes here
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/views", "index.html"));
});
app.get("/payroll", (req, res) => {
  // Handle GET request for /api/users
  res.sendFile(path.join(__dirname, "../frontend/views", "payroll.html"));
});

app.post("/api/users", (req, res) => {
  // Handle POST request for /api/users
  res.send("Create a new user");
});

module.exports = app;
