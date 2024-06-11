// Server-Side Setup (app.js)

// server/app.js
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static("client"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../client/html/index.html"))
);
// app.get("/login", (req, res) =>
//   res.sendFile(path.join(__dirname, "../client/html/login.html"))
// );
// app.get("/dashboard", (req, res) =>
//   res.sendFile(path.join(__dirname, "../client/html/dashboard.html"))
// );
// app.get("/settings", (req, res) =>
//   res.sendFile(path.join(__dirname, "../client/html/settings.html"))
// );

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
