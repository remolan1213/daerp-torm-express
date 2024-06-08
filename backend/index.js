const express = require("express");
const daapp = require("./da-app");
require("dotenv").config();
const port = process.env.DA_PORT;

daapp.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
