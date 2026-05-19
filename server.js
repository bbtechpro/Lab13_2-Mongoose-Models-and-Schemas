// DEPENDENCIES
const express = require('express');
const connectDB = require('./db/connection');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 1738;

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DATABASE
connectDB();

const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

// ROUTES

// Mount book router at a base path, like /api/books.
const bookRoutes = require('./routes/bookRoutes');
app.use('/api/books', bookRoutes);

// PORT: START THE SERVER
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});