import { useState } from "react";

const MoreForms = (props) => {

    // const { firstName, lastName, email, password, confirmpass } = props;

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpass, setConfirmPass] = useState("");
    // const [lessthan2, setLessThan2] = useState("false");
    // const [lessthan5, setLessThan5] = useState("false");


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


    // ***********************

    //     setLessThan2(true);
    //     setLessThan5(true);
    // };

    // const twoChar = () => {
    //     if (lessthan2) {
    //         return "First Name must be more than two characters.";
    //     } else {
    //         return ""; //null?
    //     }
    // };

    //  If the First Name or Last Name is less than 2 characters, output an error message saying that field must be at least 2 characters.
    // The e - mail is less than 5 characters, say the field must be at least 5 characters.
    // The passwords must match and be at least 8 characters.

    const changeHandler = (e) => {
        setFirstName(e.target.value)
    }

    

    return (
        <div>
            <form onSubmit={createUser}
                style={{ marginTop: "20px" }}>

                <div className="inputDataDivStyle">
                    <label>First Name: </label>
                    <input type="text"
                        name="firstname"
                        value={firstname}
                        onChange={ changeHandler } />
                </div>

                {
                    firstname.length <= 2 && firstname.length !== 0 ?
                        <h3>Last Name must be more than two characters.</h3> :
                        null
                }


                <div className="inputDataDivStyle">
                    <label>Last Name: </label>
                    <input type="text"
                        name="lastname"
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)} />
                </div>

                {
                    lastname.length <= 2 && lastname.length !== 0 ?
                        <h3>Last Name must be more than two characters.</h3> :
                        null
                }

                <div className="inputDataDivStyle">
                    <label>Email Address: </label>
                    <input type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                {
                    email.length <= 5 && email.length !== 0 ?
                        <h3>Email must be more than five characters.</h3> :
                        null

                }

                <div className="inputDataDivStyle">
                    <label>Password: </label>
                    <input type="text"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                {

                    password.length < 8 && password.length !== 0 ?
                        <h3>Password must be at least 8 characters.</h3> :
                        null

                }


                <div className="inputDataDivStyle">
                    <label>Confirm Password: </label>
                    <input type="text"
                        name="confirmpass"
                        value={confirmpass}
                        onChange={(e) => setConfirmPass(e.target.value)} />
                </div>

                {

                    confirmpass !== 0 && confirmpass !== password ?

                        <h3>Passwords must match.</h3> :
                        null

                }

                <input id="createUser" style={{}} type="submit" value="Create User" />
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

export default MoreForms;


