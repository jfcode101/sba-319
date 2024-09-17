const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // load environment variable from .env
const routes = require("./routes/routes");

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

// create a basic router
app.get("/", (req, res) => {
  res.send("SBA-19 loading!");
});

// use the route
app.use("/routes", routes);

// listen to the port
app.listen(PORT, () => {
  console.log(`App is listenning on port: ${PORT}`);
});
