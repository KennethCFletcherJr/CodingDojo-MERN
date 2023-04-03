import React from "react";
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from "react-router-dom";
import { useParams } from 'react-router-dom';

// const Location = (props) => {
//   return (
//     <h1>Location Component Loaded!</h1>
//   );
// }

const Location = (props) => {
  const { city } = useParams();

  return (
    <h1>Welcome to {city}!</h1>
  );
}


//The link and the path to element are coded seperately?
function App() {
  return (
    <BrowserRouter>
      <p>
        <Link to="/location/Seattle">Seattle</Link>
        |
        <Link to="/location/Chicago">Chicago</Link>
        |
        <Link to="/location/Burbank">Burbank</Link>
      </p>
      <Routes>
        <Route path="/location/:city" element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//Is <location /> a built-in geographic component? 
//How do I capitalize the first letter of the name of each city? 

