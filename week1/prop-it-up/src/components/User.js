import React from 'react';

const User = (props) => {

    const { name, age, email } = props;

    return (
        <div>
            <h1>Name: {name}</h1>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    )
}

export default User;
