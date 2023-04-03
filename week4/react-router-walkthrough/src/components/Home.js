import {Link} from 'react-router-dom';

function Home(props) {
    //Why don't "empty div's" work here?

    return (
        <div>
            <h1 style={{ color: "red" }}>Home Component</h1>
            <Link to={"/About"}>Go to About </Link>
        </div>

    );
}

export default Home;

