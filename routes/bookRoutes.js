const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// CREATE: POST / - Creates a new book using the data in req.body.
router.post('/', async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    console.error('Error Creating Book:', error);
    res.status(400).json({ error: error.message });
  }
});

// READ ALL: GET / - Retrieves all books from the database.
router.get('/', async (req, res) => {
  try {
    const allBooks = await Book.find();
    res.status(200).json(allBooks);
  } catch (error) {
    console.error('Error Retrieving Books:', error);
    res.status(500).json({ error: error.message });
  }
});

// READ ONE: GET /:id - Retrieves a single book by its _id.
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    console.error('Error Retrieving Book:', error);
    res.status(500).json({ error: error.message });
  }
});

// UPDATE: PUT /:id - Updates a book by its _id using the data in req.body.
router.put('/:id', async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: 'after', runValidators: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    console.error('Error Updating Book:', error);
    res.status(400).json({ error: error.message });
  }
});

// DELETE: DELETE /:id - Deletes a book by its _id.
router.delete('/:id', async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json({ message: 'Book deleted successfully', book: deletedBook });
  } catch (error) {
    console.error('Error Deleting Book:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;