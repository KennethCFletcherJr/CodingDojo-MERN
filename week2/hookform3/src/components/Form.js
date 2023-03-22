import React, { useState } from 'react';


const Form = (props) => {

    // const { firstName, lastName, email, password, confirmpass } = props;

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpass, setConfirmPass] = useState("");

    // const formDataDivStyle = {
    //     textAlign: "left",
    //     width: "450px",
    //     margin: "auto",
    // }

    // const inputDataDivStyle = {
    //     borderRadius: "5px",
    //     backgroundColor: "#f2f2f2",
    //     border: "1px solid darkgrey",
    //     padding: "0px 10px",
    //     margin: "5px",
    // }

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();

        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstname, lastname, email, password, confirmpass };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPass("");
    };

    return (
        <div>
            <form onSubmit={createUser} style={{ marginTop: "20px" }}>
                <div className="inputDataDivStyle">
                    <label>First Name: </label>
                    <input type="text"
                        name="firstname"
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="inputDataDivStyle">
                    <label>Last Name: </label>
                    <input type="text"
                        name="lastname"
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="inputDataDivStyle">
                    <label>Email Address: </label>
                    <input type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="inputDataDivStyle">
                    <label>Password: </label>
                    <input type="text"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="inputDataDivStyle">
                    <label>Confirm Password: </label>
                    <input type="text"
                        name="confirmpass"
                        value={confirmpass}
                        onChange={(e) => setConfirmPass(e.target.value)} />
                </div>

                <input id="createUser" style={{ }} type="submit" value="Create User" />
            </form>

            <div className="formDataDivStyle">
                <h3 style={{ textAlign: 'center' }}>Your Form Data</h3>
                <p>
                    <label>First Name: </label>{firstname}
                </p>
                <p>
                    <label>Last Name: </label>{lastname}
                </p>
                <p>
                    <label>Email: </label>{email}
                </p>
                <p>
                    <label>Password: </label>{password}
                </p>
                <p>
                    <label>Confirm Password: </label>{confirmpass}
                </p>
            </div>
        </div>
    )
};

export default Form;

// return (
//     <div>
//         <label>First Name: {firstName}</label>

//         <p>Age: {age}</p>
//         <p>Email: {email}</p>
//     </div>
// )


// export default User;

