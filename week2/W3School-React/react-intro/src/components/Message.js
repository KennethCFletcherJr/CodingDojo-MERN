import React from 'react';

const Message = () => {
    const name = "Jesse";
    const age = 40;

    return (

        <p>{name} is {age} years old.</p>

    )
};

export default Message;

// return name + ' is ' + age + 'years old.';