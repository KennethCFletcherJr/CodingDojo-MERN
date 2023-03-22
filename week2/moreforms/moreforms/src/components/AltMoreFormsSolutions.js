import "./App.css";
import Form from "./components/Form";
import React, { useState } from "react";

const App = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPw, setConfirmPw] = useState("");
    return (
        <div className="App">
            <form onSubmit={() => { }}>
                <div>
                    <label htmlFor="">First Name</label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                </div>
                {firstName.length < 2 && firstName.length > 0 ? (
                    <p>First Name must be at least 2 characters</p>
                ) : null}
                <div>
                    <label htmlFor="">Last Name</label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} />
                </div>
                {lastName.length < 2 && lastName.length > 0 ? (
                    <p>Last Name must be at least 2 characters</p>
                ) : null}
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                {email.length < 5 ? <p>Email must be at least 5 characters</p> : null}
                <div>
                    <label htmlFor="">Password</label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />
                </div>
                {password.length < 8 ? (
                    <p>Password must be at least 8 characters</p>
                ) : null}
                <div>
                    <label htmlFor="">Confirm Password</label>
                    <input type="text" onChange={(e) => setConfirmPw(e.target.value)} />
                </div>
                {confirmPw !== password ? <p>Passwords must match</p> : null}
            </form>

            <h2>Your Form Data</h2>

            <h3>First Name</h3>
            <span>{firstName}</span>
            <h3>Last Name</h3>
            <span>{lastName}</span>
            <h3>Email</h3>
            <span>{email}</span>
            <h3>Password</h3>
            <span>{password}</span>
            <h3>Confirm Password</h3>
            <span>{confirmPw}</span>
        </div>
    )}





            // -Time Accelerated 1 Stack Courses
// home
// learn
// contact
// user icon

// Courses
// Unit
//     Assignment Checklist
// Stats
//     Take Exams

// MERN PART - TIME ONLINE
// Course IconReact
// Intro to React
// Functional Components

//     Functional vs.Class
//     Functional Components
// Props
//     Prop It Up
//     Synthetic Events
// Hooks
// useState
//     Using State, Setting State
//     Putting it Together
// Forms
// Quiz
//     Hook Form
//     Conditional Rendering
//     More Forms
// Children
// Styles
//     Iterating with map
//     Lifting State
//     Box Generator
//     Extra Callback Parameters
//     React Blocks
// CSS in JS
// Tabs
//     Todo List

// APIs
// React Routing

// Core
// Deadline: Thursday of Week 2
//     Difficulty Level: Intermediate
// Est.Time: 2 - 3 hrs

// More Forms

// Using the previous assignment "Hook Form", add error messages.

//     If the First Name or Last Name is less than 2 characters, output an error message saying that field must be at least 2 characters.
//     The e - mail is less than 5 characters, say the field must be at least 5 characters.
//     The passwords must match and be at least 8 characters.

// These messages can appear right when you render the page, and will disappear in real time.

//     Hint: Use state and conditional rendering.


// Create validations for First Name

// Create validations for Last Name

// Create validations for Email

// Create validations for password and confirm password

// Sensei Bonus: Only show the validations if the input is not blank(You should not see the error messages if you have not typed anything in)
// Submit

// Note:
// Please
// Zip
// your file(s) before uploading.
//     upload - icon

// Drag & drop your files
// or Browse
// Previous
// More Forms