import React from 'react';
import React, { useState } from 'react';
//
const AddOneYear = (props) => {
    //Create a state variable to hold the age of the person(passed in via the props object)
    const [stateAge, setAge] = useState(0)
    function handleClick();

    return (

        <div>

            <p>You increased the age by one year by clicking the button!</p>
            <button onClick={() => setStateAge(stateAge + 1)}>
                Add One Year
            </button>

        </div>
    );

}

export default AddOneYear;


