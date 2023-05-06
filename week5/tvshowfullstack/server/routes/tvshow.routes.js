//First thing, import TvShowController

const TvShowController = require('../controllers/tvshow.controller');


//Parentheses for function not required because there is only one parameter, app

module.exports = app => {

    app.get('/api/allShows', TvShowController.findAllShows)
    app.post('/api/newShow', TvShowController.createShow)
    //Why not findOneShow?
    // app.get('api/findOneShow', TvShowController.findOneShow)

    //HOW DO I GET THE ID FROM THE GET ALL ROUTES TO RUN THE API IN POSTMAN??? PER VIDEO 12:27
    //Whatever we put after the colon: will refer to the key in the _id parameter...
    app.get('/api/oneShow/:id', TvShowController.findOneShow)
    app.put('/api/updateShow/:id', TvShowController.updateShow)
    app.delete('/api/deleteShow/:id', TvShowController.deleteShow)

    //HOW DO YOU MAKE SURE THAT THE SERVER IS RUNNING?



//Test 'api/newShow' on Postman. Go to models to confirm object names to enter in Postman.

    //The app.get('api/allShows', TvShowController.findAllShows) in tvshow.routes.js component is being returned and stored in the server.js component to a variable and is assigned by require("./routes/user.routes");
//Next we run our methods for our routes and the functions that are going to be called.
//This is where we are going to run our routes that lead to their functions.

//Second argument before, callback function with req and res...(req, res), instead call findAllShows???
//The SECOND PARAMETER RUNS, whenever we go to the route at the first parameter.
//So you are going to the file, TvShowController, and finding the function, findAllShows, and don't put parentheses...


//require("") is used to 1. connect to the database, 2. grab a function from a component.
}


