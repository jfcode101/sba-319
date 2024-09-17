const express = require("express");
const Comment = require("../models/comment");
const router = express.Router();

// get all of the coments
router.get("/", async (req, res) => {
  const comments = await Comment.find().populate("postId userId");
  res.json(comments);
});

// post a new comment
router.post("/", async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// delete a comment
router.delete("/:id", async (req, res) => {
  await Comment.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
