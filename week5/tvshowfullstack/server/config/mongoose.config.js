const mongoose = require('mongoose');
//Only need to change DB name

//All mongoose.config does, is connect to our database.

mongoose.connect('mongodb://127.0.0.1:27017/tvShows', {

    //Middleware for handling POST requests
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

