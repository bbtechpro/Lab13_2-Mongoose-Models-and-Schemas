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
// I.N.D.U.C.E.S. - Use express.Router() to create a new router instance.

// Index: GET /books - Retrieve a list of all books.
app.get('/books', (req, res) => {
  // Logic to retrieve all books from the database
  res.send('Retrieve a list of all books');
});

// PORT: START THE SERVER
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});