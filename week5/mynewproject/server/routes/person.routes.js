const PersonController = require('../controllers/person.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.get('/api', PersonController.index);
    
}

// const PersonController = require('../controllers/person.controller');  //Import the code from Code Block 1
// module.exports = (app) => {
//     app.get('/api', PersonController.index);
// }

// After importing(require) our controller file and assigning our controller's exported logic to a variable, we will export an anonymous arrow function that requires an "app" as its parameter. The parameter's value(argument) will be assigned in our server.js, which will be the express server object itself.

//The function consists of lines that include our HTTP verb, the request's route and what our API is supposed to do when we hit that route. In the following, a "get" (verb) request to the "/api" route is to look to PersonController, find the value that goes with the "index" key and execute that value (which is a function):