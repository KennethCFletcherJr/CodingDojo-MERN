// import React from 'react';
import React, { useState } from 'react';
import './App.css';

function App() {

  const [newTask, setNewTask] = useState("");
  //Empty arrays won't break if you try to map them using dot operator.
  const [list, setNewListItem] = useState([]);
  //Is empty array, starting, default, or updated? You can mark it null to distiguish the starging arr, but you will have to do a condition, "...if it is null, don't try to map it, render it instead (render loading, or something)..."

  const handleNewTaskSubmit = (e) => {

    e.prevent.Default()
    // console.log(newTask)
    // list.push(newTask); 
    setNewListItem([...list, newTask]);
    // setNewTask("");
  }

  return (
    <div className="App">

      <form onSubmit={(event) => {
        handleNewTaskSubmit(event);
        //list.push(newList); Mutating the state directly results in unpredictible 
        //asynchronous behavior.

      }}>
        <input onChange= {(event) => {
          setNewTask(event.target.value);
        }}

          type="text" value={newTask}/>

        <div>

          <button type="button">Add</button>

        </div>

      </form>

    </div>

  );
}

export default App;


// const [task, setTask] = useState("");

// is short-hand for:

// const newTaskStateArr("useState");
// const newTask = newTaskStateArr[0];
// const setNewTask = newTaskStateArr[1];




