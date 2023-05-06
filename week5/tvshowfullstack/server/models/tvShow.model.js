const mongoose = require('mongoose');

const TvShow = new mongoose.Schema({

    title: {

        type: String,
        required: [true, "Title is required"],
        minLength: [3, "The title must be three or more characters long"],
        maxLength: [50, "The title is too long"]

    },

    releaseYear: {

        type: Number,
        min: [1920, "No shows before 1920 allowed"]

    },

    network: {

        type: String,
        required: [true, "Network is required"],
        minLength: [3, "The network must be 3 or more characters."],
        maxLength: [50, "The network is too long"]

    },

    creator: {

        type: String,
        required: [true, "Creator is required"],
        minLength: [3, "The creator  must be 3 or more characters"],
        maxLength: [50, "The creator is too long"]


    },

    genre: {

        type: String,
        required: [true, "Genre is required"],
        minLength: [3, "The genre must be 3 or more characters"],
        maxLength: [50, "The genre is too long"]

    }

    //Add mongoose timestamps. Shows when documents were "created at" and "updated at".

    //So AFTER the object ends at curly brace, and before the parenthesis for the Schema, enter ,{timestamps: true} time stamp entry 

}, { timestamps: true });


//The model called Show is created off the blueprint of the schema.

const Show = mongoose.model('Show', TvShow);

//We're exporting that model, because that's what we need to interact with, the model.

module.exports = Show;


//Alt name: user.model.js