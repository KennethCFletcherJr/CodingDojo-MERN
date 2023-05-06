const express = require("express");//When we import the express module, something gets returned back, and we save it in a const variable.
const app = express();

require("./config/mongoose.config"); //...Or we can just require the file, and that will automatically run the file...Calling the mongoose.config file and running the Connect function...nothing is returned from this...all mongoose.config does is connect to our database...

//The following function accounts for the Route and the associated function.

app.use(express.json(), express.urlencoded({ extended: true }));
//We save what gets returned on line 8 to TvShowRoutes, so we can have line 9, TvShowRoutes(app);
//Bringing in the function for TvShowRoutes
const TvShowRoutes = require("./routes/tvshow.routes");

//So on the next line we are actually passing the callback function app from TvShowRoutes.js component, to the funciton TvShowRoutes returned from the variable const TvShowRoutes
//Calling the function for TvShowRoutes, and passing in the app (express application)
TvShowRoutes(app);

//So app in server.js is being sent to .routes.js component.

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
