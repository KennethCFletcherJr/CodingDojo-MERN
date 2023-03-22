import React from 'react'; 
import './App.css';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
    
    <Form
        firstName={"John"}
      />

      <Form
        lastName={"Smith"}
      />

      <Form
        email={"johnsmith@johnsmith.com"}
      />

      <Form
        password={"********"}
      />

      <Form
        confirmPass={"********"}
      />

    </div>
  );
}

export default App;

// <User

//   name={"Gavin Newsom"}
//   age={55}
//   email={"anotherround@gmail.com"}

// />


// <PersonCard
//   firstName={"Darius"}
//   lastName={"Rucker"}
//   age={56}
//   hairColor={"none"}
// />
