# SBA - 319

## Description

This is a simple API that can be used by a blog or a simple social media. It is builts with **Node.js**, **Express**, and **MangoDB**. It allows **CRUD** operation.

### Objective

- Create a server application with **Node**, **Express**, and **MangoDB**
- Create a **CRUD API** using **Express** and **MongoDB**.
- Create _MongoDB indexes_.
- Use _MongoDB indexing_ to make efficient queries
- Create MongoDB validation rules.
- Use _MongoDB validation_ to ensure data consistency.

## API Routes

### Users

- **GET /api/users**: Retrieve all users
- **POST /api/users**: Create a new user
- **PATCH /api/users/:id**: Update a user
- **DELETE /api/users/:id**: Delete a user

### Posts

- **GET /api/posts**: Retrieve all posts
- **POST /api/posts**: Create a new post
- **PATCH /api/posts/:id**: Update a post
- **DELETE /api/posts/:id**: Delete a post

### Comments

- **GET /api/comments**: Retrieve all comments
- **POST /api/comments**: Create a new comment
- **DELETE /api/comments/:id**: Delete a comment

## Setup

1. Clone the repository
2. Run `npm install`
3. Set up your MongoDB connection in `config/db.js`
4. Run `node add.js` to populate the database with sample data
5. Run `node app.js` to start the server
