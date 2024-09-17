const express = require("express");
const router = express.Router();

// create a post router — "post http method"
router.post("/post", (req, res) => {
  res.send("POST Router");
});

// create get all router — "get http method"
router.get("/selectAll", (req, res) => {
  res.send("SELECT ALL Router");
});

// create a get by id  router — "get http method"
router.get("/selectByID/:id", (req, res) => {
  res.send("SELECT BY ID Router");
});

// create a patch router — "patch http method"
router.patch("/update/:id", (req, res) => {
  res.send("UPDATE BY ID Router");
});

// create a delete router — "delete http method"
router.delete("/delete/:id", (req, res) => {
  res.send("DELETE BY ID Router");
});

module.exports = router;
