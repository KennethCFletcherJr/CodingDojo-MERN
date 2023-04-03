import { Link } from 'react-router-dom';

function About(props) {
    //Why don't "empty div's" work here?

    return (
        <div>
            <h1 style={{ color: "red" }}>About Component</h1>
            <Link to={"/Home"}>Go to Home </Link>
        </div>

    );
}

export default About;
