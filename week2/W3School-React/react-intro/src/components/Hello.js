import React from 'react';

const  Hello = () => {

    return (
        
        <h1>Hello World!</h1>
        
        );
}

//How do I define ReactDOM?

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Hello />);

//The above is the old way of connecting the components, the App.js, and index.html (the ReactDOM)
//Currently we are connecting the components, the App.js, and the index.html to the Virtual ReactDOM?

export default Hello;

