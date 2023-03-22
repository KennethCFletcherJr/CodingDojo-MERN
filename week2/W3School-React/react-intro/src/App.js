import './App.css';
import Hello from './components/Hello';
import React from 'react';
import Message from './components/Message';

function App() {
  //Use the function that you imported in App.js
  return (
    <div className="App">
      <Hello />
      <Message />

    </div>
  );
}

export default App;
