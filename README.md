Scenario
A local library wants to modernize its book tracking system. They have hired you to build the backend for a new “Digital Bookshelf” application. Your first task is to create a RESTful API that allows librarians to manage their book inventory. This API must support creating new book records, viewing the list of all books, finding a specific book by its ID, updating a book’s information, and removing a book from the collection.

Learning Objectives
By the end of this activity, you will have demonstrated your ability to:

Define a Mongoose schema with appropriate data types and validation.
Compile a schema into a Mongoose model.
Build a full CRUD (Create, Read, Update, Delete) API using Express.
Implement separate, modular routes for your API endpoints.
Use Mongoose model methods to interact with a MongoDB database.
Handle request data from req.body and req.params.
Instructions
Task 1: Project Setup
Create a new project directory (e.g., digital-bookshelf-api).
Initialize the project with npm init -y.
Install the required dependencies: express, mongoose, and dotenv.
Set up your file structure. It’s a good practice to separate your concerns. Create the following:
server.js: The main entry point for your application.
db/: A directory to hold your database connection logic.
models/: A directory for your Mongoose models.
routes/: A directory for your Express route definitions.
Create a .env file and add your MongoDB Atlas connection string to it.
Create a .gitignore file and add node_modules/ and .env to it.
Task 2: Database Connection
In the db/ directory, create a connection.js file.
In this file, use mongoose.connect() to establish a connection to your database using the URI from your .env file. Export your connection logic.
In server.js, require and execute your database connection.
Task 3: Book Schema and Model
In the models/ directory, create a Book.js file.
Define a schema for a Book with the following fields and validation rules:
title: A String, which is required.
author: A String, which is required.
isbn: A String, which must be unique.
publishedDate: A Date.
inStock: A Boolean, with a default value of true.
Compile this schema into a model named Book and export it.
Task 4: API Routes
In the routes/ directory, create a bookRoutes.js file.
Use express.Router() to create a new router instance.
Implement the five core CRUD endpoints on this router:
Create: POST / - Creates a new book using the data in req.body.
Read All: GET / - Retrieves all books from the database.
Read One: GET /:id - Retrieves a single book by its _id.
Update: PUT /:id - Updates a book by its _id using the data in req.body.
Delete: DELETE /:id - Deletes a book by its _id.
Use async/await and try...catch blocks in all routes to handle errors.
Export the router.
Task 5: Server Configuration
In server.js:
Set up your Express application.
Use the express.json() middleware to parse request bodies.
Mount your book router at a base path, like /api/books.
Start the server on a specified port.
Submission Instructions
Ensure your application runs without errors using node server.js.
Test all five of your API endpoints using an API client like Postman or Insomnia. Verify that each one performs the correct CRUD operation.
Submit a link to a GitHub repository containing your complete project. Do not include your .env file or the node_modules directory.

Reflection Questions
Why is it beneficial to separate your routes, models, and database connection into different directories?
What is the difference between PUT and PATCH HTTP methods, and which one does your PUT /:id endpoint more closely resemble?
In the DELETE route, what is a good practice for the response you send back to the client after a successful deletion? Should you send the deleted object, a simple success message, or something else? Why?