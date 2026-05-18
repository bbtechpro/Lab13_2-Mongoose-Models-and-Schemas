// Define a schema for a Book with the following fields and validation rules:
// title: A String, which is required.
// author: A String, which is required.
// isbn: A String, which must be unique.
// publishedDate: A Date.
// inStock: A Boolean, with a default value of true.
// Compile this schema into a model named Book and export it.
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true,
    unique: true
  },
  publishedDate: {
    type: Date
  },
  inStock: {
    type: Boolean,
    default: true
  }
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;