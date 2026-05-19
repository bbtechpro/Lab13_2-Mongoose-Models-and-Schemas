const router = express.Router();
const Book = require('../models/book');

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

// Update: PUT /:id - Updates a book by its _id using the data in req.body.
app.put('/books/:id', (req, res) => {
  // Logic to update a book by its _id in the database
  res.send('Update a book by its _id');
});

// C (Create): POST / - Creates a new book using the data in req.body. new Model().save()
const newBook = new Book({
});
 
// The save method returns a promise that resolves with the saved document
newBook.save()
  .then(savedBook => {
    console.log('Book saved successfully:', savedBook);
  })
  .catch(err => {
    console.error('Error saving book:', err);
  });

// E (Edit): GET /:id/edit - Retrieves a book by its _id and renders an edit form.
app.get('/books/:id/edit', (req, res) => {
  // Logic to retrieve a book by its _id and render an edit form
  res.send('Retrieve a book by its _id and render an edit form');
});


module.exports = router;