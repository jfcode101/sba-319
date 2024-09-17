const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // load environment variable from .env
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

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
app.use("/api/userRoutes", userRoutes); // user route
app.use("/api/postRoutes", postRoutes); // post route

// listen to the port
app.listen(PORT, () => {
  console.log(`App is listenning on port: ${PORT}`);
});
