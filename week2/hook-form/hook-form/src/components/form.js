/* Create a form like the following wireframe with a single React Component called "Form" and hooks. Then, show in real time, the data that is being inputted into the form below. It is not required to match the CSS to complete this assignment.*/


//Create form inputs with First Name, Last Name, Email, Password 
import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createDisplay = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();

        // create a javascript object to hold all of the values
        const newDisplay = {
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password
        };
        console.log("Welcome", newDisplay);
    };

    // Confirm Password fields

    return (
        <form onSubmit={createDisplay}>
            <div class="first-name">???
                <label>First Name: </label>
                <input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <label>Email: </label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" value="Create Display" />
        </form>
    );
};

export default Form;




