function App() {
    return (
        <h1>Hello World</h1>
    );
}


function App() {
    return (
        <h1>Hello World</h1>
        <p>This is a paragraph</p>
    );
}

<h1 class="my-class">This is HTML</h1>


Warning: Invalid DOM property`class`.Did you mean`className` ?    
    in h1(at App.js: 5)
    in App(at src / index.js: 6)


function App() {
    return (
        <>
            <h1 className="my-class">This is JSX</h1>
        </>
    );
}

<form action="/process" method="post">
    <div class="form-group">
        <label for="email">Email:</label>
        <input type="text" id="email" name="username" class="form-control" />
        <div>
        </form>

        function App() {
    return (
        <form action="/process" method="post">
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="username" className="form-control" />
            </div>
        </form>
        );
}


        omeFunctionalComponent.js

        import React from 'react';
    
const SomeFunctionalComponent = (props) => {
    return (
        <div>
            This is our first functional component.
        </div>
        )
}

        export default SomeFunctionalComponent;

        PersonCard.js

        import React from 'react';
const PersonCard = (props) => {
    return(
        <div>
            <h1 style={{ color: "red" }}>Instructor Bob</h1>
            <p>Age: 32</p>
            <p>Hair Color: purple</p>
        </div>
        );
}
        export default PersonCard;


        import './App.css';
        import Header from './components/Header';
        function App() {
  return (
        <div className="App">
      // passing in 2 attributes to the Header component through the default props object which will look like this:
      // {
                //    "firstName":"Bill",
                //    "lastName":"Justice"
                // }
                <Header firstName={"Bill"} lastName={"Justice"} />
    </div>
        );
}
        export default App;




        // Here we create the Header Component that will receive props and we know we want to have a user
        //     first and last name
        import React from 'react';
    
const Header = (props) => {
    // We can assume props looks like an object literal with 2 keys and values because of what was passed in
    // {
    //    "firstName":"Bill",
    //    "lastName":"Justice"
    // }
    // destructuring props in to 2 local variables that MUST match the key names found in the props object
    const {firstName, lastName} = props;
        return (
        <div>
            <h1>
    		// Destructuring allows us to use them like simple variables
                My name is {firstName} {lastName}
            </h1>
        </div>
        );
}
        export default Header;




        // ***************


        import React, {useState} from 'react';
    
const Counter = props => {
    const [state, setState] = useState({
            clickCount: 0
    });
 
    const handleClick = () => {
            setState({                   // the setter will update the value held in state
                clickCount: state.clickCount + 1
            });
    }

        return (
        <div>
            {state.clickCount}      // displaying the current value held in our state object
            <button onClick={handleClick}>Click Me</button>
        </div>
        );
}

        export default Counter;

