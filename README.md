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

- Tested the API endpoints from localhost:3000 and Postman:

✅ Create: POST http://localhost:3000/api/books
✅ Get All: GET http://localhost:3000/api/books
✅ Get One: GET http://localhost:3000/api/books/:id
✅ Update: PUT http://localhost:3000/api/books/:id
✅ Delete: DELETE http://localhost:3000/api/books/:id



Reflection Questions:

Why is it beneficial to separate your routes, models, and database connection into different directories?

- The benefits of MVC (Model-View-Controller) is that it is a design pattern used in Node.js applications to organize code in a clean and structured way. It separates the application into three parts so that the code is easy to manage, understand, and scale.
1. Model: Model is used to manage data and database logic. It defines how data is stored and accessed.

Model is responsible for:

Database connection
Schema / structure
Data validation
Queries
2. View: View is used to show UI (User Interface) to the user. It displays the data received from the controller.

View is responsible for:

HTML pages
Templates
Frontend display
3. Controller: Controller is the main logic handler. It connects Model and View.

Controller is responsible for:

Handling requests
Calling model
Sending data to view
Business logic

What is the difference between PUT and PATCH HTTP methods, and which one does your PUT /:id endpoint more closely resemble?

- PUT vs PATCH
PUT is generally used for a full replacement of a resource. The client sends the complete updated representation, and the server replaces the existing resource with that payload.
PATCH is used for partial updates. The client sends only the fields that should change, and the server updates those fields while leaving the rest intact.
Which one does my PUT /:id resemble?
My PUT /:id endpoint in bookRoutes.js more closely resembles PATCH.

It uses Book.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after', runValidators: true })
That means it updates only the fields present in req.body
It does not require a full book object to be sent
So although the route is named PUT, its behavior is partial-update style, which is conceptually closer to PATCH.

In the DELETE route, what is a good practice for the response you send back to the client after a successful deletion? Should you send the deleted object, a simple success message, or something else? Why?

- Good practice for DELETE responses
A good practice is to return a clear success response with the right status code.
For a successful deletion, the most RESTful options are:
204 No Content if you do not need to return any data
200 OK with a concise message or deleted resource info if the client needs confirmation
What to send
204 No Content
Best when the client only needs to know the delete succeeded
Keeps the response lightweight
200 OK with a body
Good if you want to confirm what was deleted
Useful for UI updates or audit/logging
Example: { message: "Book deleted successfully" }
Or include the deleted object: { message: "...", book: deletedBook }
Why
Simple success message is fine if the client only needs confirmation.
Returning the deleted object is helpful when the client may need the deleted record for display or undo logic.
Using 204 avoids unnecessary payload when no extra data is needed.
In your current route
My current DELETE route in bookRoutes.js returns:

200 status
{ message: 'Book deleted successfully', book: deletedBook }
That is a reasonable choice because it confirms success and gives the client the deleted object.