const router = express.Router();

// ROUTES
// I.N.D.U.C.E.S. - Use express.Router() to create a new router instance.

// Index: GET /books - Retrieve a list of all books.
app.get('/books', (req, res) => {
  // Logic to retrieve all books from the database
  res.send('Retrieve a list of all books');
});

// N (New): POST / - Creates a new book using the data in req.body.
app.post('/books', (req, res) => {
  // Logic to create a new book in the database
  res.send('Create a new book');
});

// Delete: DELETE /:id - Deletes a book by its _id.
app.delete('/books/:id', (req, res) => {
  // Logic to delete a book by its _id from the database
  res.send('Delete a book by its _id');
});
module.exports = router;