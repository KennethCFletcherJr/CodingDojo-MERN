const express = require("express");
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//List of instructions!

// req is shorthand for request
// res is shorthand for response
// get is an http method (CRUD), for retrieving information R (retrieve/read), reading information (from CRUD)
app.get("/api", (req, res) => {
    res.json({ message: "Welcome to the 4th Turning" });
});

app.post("/api/postData", (request, response) => {
    console.log(request.body);
    response.json({ requestBody: request.body })


} )

console.log("Hi, change!")

// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));
