// import React from 'react';
import React, { useState } from 'react';
import './App.css';

function App() {
//Set up functions for entering state for task.
//QV Set up as an object.
  const [newTask, setNewTask] = useState("");
  //Empty arrays won't break if you try to map them using dot operator.
//Set up function for displaying state for list..
  // const [list, taskItem] = useState([]);

  //An array of objects
  const [list, setNewList] = useState([]);

  //setNewListItem

  //Is empty array, starting, default, or updated? You can mark it null to distiguish the starging arr, but you will have to do a condition, "...if it is null, don't try to map it, render it instead (render loading, or something)..."

  //Set up function for handling Submit, passed/related to/in conjunction with onSubmit button? And prevent.Default() refresh.
  const handleNewTaskSubmit = (event) => {
    event.preventDefault()
    // console.log(newTask)
    // list.push(newTask); 
    if (newTask.length = 0) {
      return;
    }
    const taskItem = {
      text: newTask,
      complete: false
    }

    //Start with state
    //taskItem is a variable representing an object
    setNewList([...list, taskItem]);
    setNewTask("");
  }

  const handleNewTaskDelete = (delIdx) => {
    const filteredList = list.filter((newTask, i) => {
      return i !== delIdx;
    });

    setNewList(filteredList);
  };

  const handleToggleComplete = (idx) => {
    const updatedList = 
      list.map((task, i) => {
        if (i === idx) {
          task.complete = !task.complete;
          // const updatedTask = { ...list, complete: !newTask.complete };
          // return updatedTask;
        }
        return task;
      });
      setNewList(updatedList);
    }

  

  // if (idx === i) {}

  // newTask.complete = !newTask.complete; 

  // // const updatedTask = { ...list, complete: !newTask.complete }; 
  // // return updatedTask;

  // return task;

  // set



return (
  <div className="App">

    <form onSubmit={(event) => {
      handleNewTaskSubmit(event);
      //list.push(newList); Mutating the state directly results in unpredictible 
      //asynchronous behavior.

    }}>
      <input onChange={(event) => {
        setNewTask(event.target.value);
      }}

        type="text" value={newTask} />

      <div>

        <button type="button">Add</button>

      </div>

    </form>

    {list.map((newTask, i) => {
      const taskClasses = ["bold", "italic"];
      // const taskClasses = [];
      if (newTask.complete) {
        taskClasses.push("line-through");
      }

      return (

        <div key={i}>
          <input onChange={(event) => {
            handleToggleComplete(i);
          }}
            checked= {newTask.complete}  type="checkbox"/>
          <span className={taskClasses.join("")}>{newTask.text}</span>

          <button onClick={(delIdx) => {
            handleNewTaskDelete(i);
          }}>Delete</button>
        </div>

      );


    })}

    );

  </div>

)}

export default App;


// const [task, setTask] = useState("");

// is short-hand for:

// const newTaskStateArr("useState");
// const newTask = newTaskStateArr[0];
// const setNewTask = newTaskStateArr[1];


