# Lab 11.1 Build a Basic Express.js Server  

## Overview

In this lab we created a basic server using node.js and express.js.

## Features

Activity Tasks

Task 1: Project Setup

1. Create a new directory for your project (e.g., daily-grind-server).
2. Navigate into the new directory in your terminal.
3. Initialize a new Node.js project by running npm init -y. This will create your package.json file.
4. Install express as a project dependency by running npm install express.

Task 2: Create the Web Pages

1. Inside your project directory, create a new folder named public.
2. Inside the public folder, create two HTML files:
    - index.html: This will be the homepage. Add a simple heading like <h1>Welcome to The Daily Grind!</h1>.
    - contact.html: This will be the contact page. Add a heading like <h1>Contact Us</h1> and some placeholder text.

Task 3: Build the Express Server

1. In the root of your project directory, create a file named server.js.
2. Inside server.js, write the code for your Express server. It must do the following:
    - Import the express library.
    - Import the built-in path module, which will help you create correct file paths.
    - Create an instance of an Express application.
    - Define a port to run the server on (e.g., 3000).
    - Create a route handler for GET requests to the root URL (/). When this route is requested, it should send the index.html file from your public directory.
    - Create another route handler for GET requests to /contact. This should send the contact.html file.
    - Start the server and have it listen on your chosen port. When it starts, it should log a message to the console, like Server is running on port 3000.

## Tools

- HTML
- JavaScript
- Node.js
- Express.js

## Reflection Questions

1. What is the difference between res.send() and res.sendFile()? When would you use one over the other?

The first, res.send() can send a variety of data types such as a string, number, or object.  The second, res.sendFile() is used to send a file such as index.html.  If you simply want to log a variable, use send, if you are sending your html files to be displayed.

2. Why is the path module necessary when serving files? What could go wrong if you just used a relative path like 'public/index.html'?

The path module creates realiable paths.  Without it, you can get errors, such as "File not Found."

3. How would you add a third page (e.g., a menu page) to this server? What steps would you take?

To add a third page, I would add another html file to the public folder and then add another app.get to the server.js file with res.sendFile.
