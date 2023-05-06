const Show = require('../models/tvShow.model');
//Use models for CRUD
//The functions that run when we go to certain routes. 
module.exports.findAllShows = (req, res) => {
    //Create first mongoose query. The User needs to match Show from the require...The Query object? has to match whatever the model name is...the model is how we interact with the database. .find() is the 
    Show.find()
        //.find() gets everything...followed by a .then/.catch...soc we are interacting with promise methods....find() returns all entries in the TvShow schema...
        //The catch of the return from find is passed/returned to .then as allShows, a return of an arry of allObjects...
        .then((allShows) => {
            //which results in the return of a key: value pair, shows: allShows (you can also just return, allShows)
            res.json({ shows: allShows })
            //**Alternately allShows by itself then you would change... setTVShowList(response.data.shows), to setTvShowList(response.data) to access the data. {shows: allShows} requires setTvShowList(response.data.shows), ie you have to call the key shows: to get the value allShows. Whereas {allShows} just requires us to got response.data*/
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

//Make a function for create in the controller.
module.exports.createShow = (req, res) => {
    //Call on the model by name, Show...create method takes in the actual document, Show, that we want to add.
    Show.create(req.body)
        //Where does form data lie in the req object? In the body...so pass in req.body into the Show.create() method.
        //req.body is run into the database and then req.body returned as callack function? to promise function as a newObject? Then 
        //expressed as key value pair, { show: newShow}
        .then((newShow) => {
            res.json({ show: newShow })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    //Next go into Routes

}

module.exports.findOneShow = (req, res) => {
    console.log(req.params);
    Show.findOne({ _id: req.params.id })
        .then((oneShow) => {
            res.json({ res: oneShow })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

//{new: true}, returns updated req.body form data...

module.exports.updateShow = (req, res) => {
    console.log();
    Show.findOneAndUpdate({ _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then((updatedShow) => {
            res.json({ show: updatedShow })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.deleteShow = (req, res) => {
    Show.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });

}