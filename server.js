// import express library
const express = require("express");

// import built-in path module
const path = require("path");

// create instance of Express application
const app = express();

// define a port to run the server
const port = 3000;

// create route handler for GET requests to root URL, it should send index.html from public director
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile("./public/index.html");
})

// create another route handler for GET requests to /contact, should send contact.html
app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/contact.html"));
})

// start server and listen on chosen port, log message like "server is running on port 3000"
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})