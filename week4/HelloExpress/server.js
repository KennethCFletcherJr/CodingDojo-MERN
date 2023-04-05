const express = require("express");
const app = express();
const port = 8000;

// req is short for request
// res is short for response
//WHAT'S GOING ON HERE??? (Reating Routes and sending data???)
//The app instance has various HTTP verb methods that we can call, for example the get("/api" , )

//HTTP verb methods =  GET requests at this particular route (n"/api").
//The second argument passed to the get method is the callback function we want to run when a browser makes a request to this route.
app.get("/api", (req, res) => {
  //Getting a local /api folder, passing a req, res, procedure....accessing json from the res, namely the message: "Hello World"???
  res.json({ message: "My, Oh My!" });
});

// this needs to be below the other code blocks
//the app.listen() line of code that actually runs our server on a specified port.

app.listen( port, () => console.log(`Listening on port: ${port}`) );