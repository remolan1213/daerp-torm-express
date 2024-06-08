const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
// Define your routes here
app.get("/api/users", (req, res) => {
  // Handle GET request for /api/users
  res.send("Get all users");
});

app.post("/api/users", (req, res) => {
  // Handle POST request for /api/users
  res.send("Create a new user");
});

module.exports = app;
