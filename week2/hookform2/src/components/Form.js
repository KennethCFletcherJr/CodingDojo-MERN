

const Form = (props) => {

    // const { firstName, lastName, email } = props;

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpass, setConfirmPass] = useState("");

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();

        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstName, lastName, email, password, confirmPass };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPass("");
    };

    return (
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div>
                <label>Confirm Password: </label>
                <input type="text" value={confirmpass} onChange={(e) => setConfirmPass(e.target.value)} />
            </div>

            <input type="submit" value="Create User" />
        </form>
    );
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







