const express = require("express");
const mongoose = require("mongoose");

// assign express to app constant variable
const app = express();
const PORT = process.env.PORT || 5500;

// use the express.json() middleware to parse incoming JSON request
app.use(express.json());

//
app.listen(PORT, () => {
  console.log(`App is listenning on port: ${PORT}`);
});
