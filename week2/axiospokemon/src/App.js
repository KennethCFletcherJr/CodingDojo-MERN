import axios from "axios";
import React, { useEffect, useState } from "react";
import './App.css';

//top part variables and functionality
function App() {

  const [list, setList] = useState([]);
// useEffect( ()=> {},[] )

  // axios.get()
  //   .then()
  //   .catch()

    // .then((res) => { })
    // .catch((err) => { })

    //mapping list set-up:
    // { list.map((item, idx)=>())}

  useEffect( () => {

    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    //Check console log for path

      .then((res) => {setList(res.data.results); console.log(res.data.results)})
  
      .catch((err) => {console.log(err) })

  },[] )

//mapping out follows; what the User sees
//mapping list set-up:
    // { list.map((item, idx)=>())}

  return (
    <div className="App">

    { list.map((item, idx) => (

      <p key={idx}>{item.name}
      

      </p>
    )) 
    
    }

    </div>
  );
}

export default App;

//  <h1>Axios Pokemon API Assignment</h1>
//             <ul>
//                 {pokeApiData.map((pokemon, index) => (
//                     <li key={index}>{pokemon.name}</li>
//                 ))}
//             </ul>


// test

//https://pokeapi.co/api/v2/pokemon?limit=807