const mongoose = require("mongoose");
require("dotenv").config(); // load environment variable from .env

// retrieve the database connection string from
// environment variable
const mongoStrURI = process.env.DATABASE_URL;

const connectDB = async () => {
  await mongoose
    .connect(mongoStrURI)
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });
};
module.exports = connectDB;
