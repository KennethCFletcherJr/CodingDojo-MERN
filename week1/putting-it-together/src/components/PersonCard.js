import { useState } from 'react';

const PersonCard = (props) => {

    const { firstName, lastName, age, hairColor } = props;
    //Why is the following an array?
    const [stateAge, setStateAge] = useState({
        clickCount: age
    });

    const handleClick = () => {
        setStateAge({
            clickCount: stateAge.clickCount + 1
        })
    }

    // const [count, setCount] = useState(0)({
    //     clickCount: 0
    // });
    // const handleClick = () => {
    //     setState({

    //         clickCount: state.clickCount + 1
    //     });

    return (
        <div>
            <h1>{firstName}, {lastName}</h1>
            <p>Age: {stateAge.clickCount}</p>
            <p>Hair Color: {hairColor}</p>

            <div>
                <button onClick={handleClick}>Add One Year!</button>
            </div>

        </div>

    );

}

export default PersonCard;




