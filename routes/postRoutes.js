const express = require("express");
const Post = require("../models/post");
const router = express.Router();

// get all of the posts
router.get("/", async (req, res) => {
  const posts = await Post.find().populate("authorId");
  res.json(posts);
});

// post a new post
router.post("/", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// update a new post
router.patch("/:id", async (req, res) => {
  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedPost);
});

// delete a post
router.delete("/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
