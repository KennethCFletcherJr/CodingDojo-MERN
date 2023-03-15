import { useState } from 'react';

const PersonCard = (props) => {

    const {firstName, lastName, age, hairColor} = props;
    //Why is the following an array?
    const [stateAge, setStateAge] = useState(age);

    return (
        <div>
            <h1>{firstName}, {lastName}</h1>
            <p>Age: {stateAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={() => setStateAge(stateAge + 1)}>
                Add one year to {firstName} {lastName}'s age'
            </button>
        </div>

    );
}
export default PersonCard;




