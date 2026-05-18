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

// PORT: START THE SERVER
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});