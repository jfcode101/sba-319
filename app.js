const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // load environment variable from .env
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");

// assign express to app constant variable
const app = express();
const PORT = process.env.PORT || 5500;

// use the express.json() middleware to parse incoming JSON request
app.use(express.json());

// retrieve the database connection string from
// environment variable
const mongoStrURI = process.env.DATABASE_URL;

// connect to the database, and
// when the database connection fails throw an error
mongoose
  .connect(mongoStrURI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// "body-parser"  middleware
app.use(bodyParser.json());

// create a basic router
app.get("/", (req, res) => {
  res.send("SBA-19 loading!");
});

// Routes
app.use("/userRoutes", userRoutes); // user route

// listen to the port
app.listen(PORT, () => {
  console.log(`App is listenning on port: ${PORT}`);
});
