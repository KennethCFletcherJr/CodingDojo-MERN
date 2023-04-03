import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  return (

    <div>

      fetch(https://pokeapi.co/api/v2/pokemon/ditto)
          .then(response => {
            // not the actual JSON response body but the entire HTTP response
            return response.json();
        }).then(response => {
        // we now run another promise to parse the HTTP response into usable JSON
        console.log(response);
        }).catch(err=>{
        console.log(err);
        });
        
    </div>

  )

}
