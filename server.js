// In server.js, require and execute your database connection.
//DEPENDENCIES
const express = require('express');
const connectDB = require('./db/connection');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 1738;

// MIDDLEWARE
app.use(express.json());

// Connect to MongoDB
connectDB();

// ROUTES
// I.N.D.U.C.E.S.
// Index: GET /books - Retrieve a list of all books.
// New: GET /books/new - Display a form for creating a new book.
// Delete: DELETE /books/:id - Delete a specific book by ID.
// Update: PUT /books/:id - Update a specific book by ID.
// Create: POST /books - Create a new book.
// Edit: GET /books/:id/edit - Display a form for editing a specific book by ID.
// Show: GET /books/:id - Retrieve a specific book by ID.

// PORT: START THE SERVER
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});