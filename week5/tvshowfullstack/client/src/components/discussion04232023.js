// MongoDB - Mongoose Schema
//                          Create a User model schema using Mongoose syntax with the following parameters:

// firstName, required, min characters 2 
// lastName, required, min characters 2
// birthdate, required
// email, required
// password, required, min character 8, max characters 12                         


const mongoose = require('mongoose');
 
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name must be a minimum of two characters."],
    },
    lastName: {
        type: String,
        required: [true, "Last name must be a minimum of two characters."],
    }
    birthDate: {
        type: Date,
        required: [true, "Birth date is required."],
    }
    email: {
        type: String,
        required: [true, "Email is required."],
    }
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "A minimum of eight characters are required for the password."],
        maxLength: [12, "A maximum of twelve characters are required for the password"]
    }
});
 
const User = mongoose.model('User', UserSchema);
 
module.exports = User;

