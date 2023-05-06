import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Display from './components/Display';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
// import { createShow } from './server/controllers/tvshow.controller';
import CreateShow from './components/CreateShow';
import OneShow from './components/OneShow';

//Make sure to import useEffect() whenever we make API calls..otherwise the axios requests will run infinitely

//useEffect allows axios to run once when the component loads, and once with every update; so wrap axios in useEffect....

//To make a call to db using axios, we need useEffect()
//Set an axios request, using axios.get, also useEffect...

function App() {

  // You need to share the tvShowList with the Display component, because the Display.js component is actually setting the list setTVShowList...so inorder to share the following state with the Display.js component...
  
const [tvShowList, setTvShowList] = useState([]);

//You need to bring the destructured useState([]) component...in order to pass it through as props....

  //We use { useState } to store data that we GET BACK from the API

//Add the <Display/> to the home path '/' through the element:
//One option for the <h1> is a nav compenent with links...


  return (
    <div className="App">
      <h1>Welcome to Our T.V. Show App</h1>

      <BrowserRouter>

        <Link to='/createShow/form'>Add your favorite show:</Link>
        <br />
        <Link to="/">Home</Link>

        <Routes>
          <Route
            path="/"
            element={
              <Display tvShowList={tvShowList} setTvShowList={setTvShowList} />
            }
          />
          <Route
          path='/createShow/form' element={<CreateShow />}/>
          <Route
          path='/viewShow/:id' element={<OneShow />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


//The browser will not allow communication between two separate ports, for example, http://localhost:3000 and http://localhost:8000, when attempting to communicate between the client (front-end) and the server (back-end). The block cannot be overridden on the front-end Client side, but it can be overridden on the server.js side, by installing npm i cors, and including 
// const cors = require('cors')    /* This is new */ and

// app.use(cors())                 /* This is new */

// in the server.js File.