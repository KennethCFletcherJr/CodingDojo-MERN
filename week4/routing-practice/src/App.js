import React from "react";
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from "react-router-dom";
import { useParams } from 'react-router-dom';

const Greeting = (props) => {ls
  const { page } = useParams();

  return (
    <h1>{page}!</h1>
  );
}

function App() {
  return (
    <BrowserRouter>
      <p>
        <Link to="/page/Welcome!">Welcome!</Link>
        |
        <Link to="/page/4">4</Link>
        |
        <Link to="/page/hello">hello</Link>
        <Link to="/page/{hello}>hello</Link>"
      </p>

      <Routes>
        <Route path="/page/:greeting" element={<Greeting />} />
        <Route path="/page/:greeting" element={<Greeting />} />
        <Route path="/page/:greeting" element={<Greeting />} />
        <Route path="/page/:greeting" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;

// Create a simple React app that can handle the following routes:

// 1. localhost: 3000 / home: This should display the home page, with a generic "Welcome" heading

// 2. localhost: 3000 / 4: This should display the number "4", or any other number that was sent through

// 3. localhost: 3000 / hello: This should display the word "hello" or any other word that was sent through

// 4. localhost: 3000 / hello / blue / red: This should display the word "hello" in blue text with a red background.It should work with any other valid word and colors.

//   Hint: use the isNaN method(is Not a Number).For example: isNaN(+"35") is false, isNaN(+"hello") is true