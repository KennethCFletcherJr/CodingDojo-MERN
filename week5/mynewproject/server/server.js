const express = require('express');
const app = express();
const port = 8000;
// These two lines are the long-hand notation of the code above. They better show what's going on.
    // const personRoutes = require("./routes/person.routes");  <-- assign the exported function to a const
    // personRoutes(app);     <-- invoke the function and pass in the express "app" serv

app.use(express.json(), express.urlencoded({ extended: true }));
//We save what gets returned on line 8 to TvShowRoutes, so we can have line 9, TvShowRoutes(app);
//Bringing in the function for TvShowRoutes
const PersonRoutes = require("./routes/person.routes");
PersonRoutes(app);

//So on the next line we are actually passing the callback function app from TvShowRoutes.js component, to the function TvShowRoutes returned from the variable const TvShowRoutes
//Calling the function for TvShowRoutes, and passing in the app (express application)



app.listen(port, () => console.log(`Listening on port: ${port}`));
