// Node and Express Lecture

// // REVIEW OF A PURE NODE SERVER - this is the old way
// let http = require('http'); // import http module using require
// let portNumber = 8000; // define variable for port number
// let hostName = 'localhost'; // define variable for host name
// // create server
// let newServer = http.createServer((req, res) => {
//     res.end("My name is Autumn");
// });
// // allow server to listen on specific port number and host name
// newServer.listen(portNumber, hostName, () => {
//     console.log(`Listening at ${hostName} on port ${portNumber}`)
// });

// EXPRESS SERVER - this is the new way (the way we will continue to use)
let express = require('express'); // import express using require
let app = express(); // create server
let instructorArray = ["Autumn", "Kenn", "Kevin"]; // define array of instructors

// route for site root (like a landing page)
app.get('/', (req, res)=> {
    res.send("This is a server using node and express");
});

// simple route for path localhost:8000/displayName
app.get('/displayName', (req,res) => {
    res.send("My name is Autumn");
});

// simple route for path localhost:8000/instructor
app.get('/instructor', (req, res) => {
    res.send("Kevin is a Code School Instructor");
});

// simple route for path localhost:8000/instructors
app.get('/instructors', (req, res) => {
    res.send("Kevin and Autumn and Kenn are Instructors");
});

// route for path localhost:8000/instructors/[ID] using query params
app.get('/instructor/:id', (req, res) => {
    instructorArray.forEach((instructor, index)=> {
        if(index == req.params.id){
            res.send(`The instructor whose index position matches is ${instructor}`);
        }
    });
})

// allow server to listen on port 8000 and send Listening Message to terminal
app.listen(8000, () => {
    console.log("Listening on port 8000")
});