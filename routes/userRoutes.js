const express = require("express");
const User = require("../models/user");
const router = express.Router();

// get all the users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// add or post a new user
router.post("/", async (req, res) => {
  try {
    const newUser = new User(req.body);
    // save the user
    await newUser.save();
    // set the status
    res.status(201).json(newUser);
  } catch (err) {
    // couldn't save the user
    res.status(400).json({ error: err.message });
  }

  // update or patch user
  router.patch("/:id", async (req, res) => {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
  });
  res.json(updateUser);
});

// delete user
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
