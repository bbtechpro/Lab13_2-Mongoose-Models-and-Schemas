// In the db/ directory, create a connection.js file.
// In this file, use mongoose.connect() to establish a connection to your database using the URI from your .env file. Export your connection logic.
// In server.js, require and execute your database connection.
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;