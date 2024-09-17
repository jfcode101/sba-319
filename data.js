const mongoose = require("mongoose");
const User = require("./models/user");
const Post = require("./models/post");
const Comment = require("./models/comment");
const connectDB = require("./config/db");

// retrieve the database connection string from
// environment variable
const mongoStrURI = process.env.DATABASE_URL;

const populateDB = async () => {
  // connect to the database, and
  // when the database connection fails throw an error
  await connectDB();

  // clear existing data
  try {
    await User.deleteMany();
    await Post.deleteMany();
    await Comment.deleteMany();
  } catch (err) {
    console.error(`Error deleting document: ${err}`);
  }

  // create user
  const users = await User.insertMany([
    { username: "John Doe", email: "johdoe@email.com", password: "1258hello" },
    {
      username: "Jane Doe",
      email: "janedoe@email.com",
      password: "kshdjswpei98",
    },
    {
      username: "John Smith",
      email: "john.smith@example.com",
      password: "Smith123!2023",
    },
    {
      username: "Jane Roe",
      email: "jane.roe@example.com",
      password: "R0eJane!2023",
    },
  ]);

  // create a posts
  const posts = await Post.insertMany([
    {
      title: "First Post",
      content: "This is the first post, I like programming.",
      authorId: users[0]._id,
    },
    {
      title: "Programming",
      content:
        "Proggramming is fun, challenging, and requires time for you to master the subect",
      authorId: users[1]._id,
    },
    {
      title: "Web Development",
      content:
        "Web development involves building and maintaining websites. It encompasses various aspects including web design, web programming, and database management.",
      authorId: users[2]._id,
    },
    {
      title: "Data Science",
      content:
        "Data science combines statistics, mathematics, and programming to extract insights from data. It is a rapidly growing field with applications in various industries.",
      authorId: users[3]._id,
    },
  ]);

  // create comments
  await Comment.insertMany([
    { postId: posts[0]._id, userId: users[1]._id, content: "Great post!" },
    {
      postId: posts[0]._id,
      userId: users[2]._id,
      content: "Thanks for sharing!",
    },
    {
      postId: posts[1]._id,
      userId: users[0]._id,
      content: "Interesting read!",
    },
    {
      postId: posts[2]._id,
      userId: users[1]._id,
      content: "I learned a lot from this!",
    },
    {
      postId: posts[3]._id,
      userId: users[2]._id,
      content: "Great insights, thank you for sharing!",
    },
  ]);

  console.log("Sample data populated");
  mongoose.connection.close();
};

populateDB();
// run node data.js
