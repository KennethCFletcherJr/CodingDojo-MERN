import React from 'react';
import React, { useState } from 'react';
//
const Counter = (props) => {
    //Create a state variable to hold the age of the person(passed in via the props object)
    const [count, setCount] = useState(0)({
        clickCount: 0
    });
    const handleClick = () => {
        setState({

            clickCount: state.clickCount + 1
        });

    }

    return (

        <div>
            {state.clickCount}
            <button onClick={handleClick}>Click Me</button>
        </div>

        // <div>

        //     <p>You increased the age by one year by clicking the button!</p>
        //     <button onClick={() => setStateAge(stateAge + 1)}>
        //         Add One Year
        //     </button>

        // </div>
    );

}

export default AddOneYear;
