// import React from 'react';
import React, { useState } from 'react';
import './App.css';

function App() {

  const [newTask, setNewTask] = useState("");
  //Empty arrays won't break if you try to map them using dot operator.
  const [list, taskItem] = useState([]);

  //setNewListItem

  //Is empty array, starting, default, or updated? You can mark it null to distiguish the starging arr, but you will have to do a condition, "...if it is null, don't try to map it, render it instead (render loading, or something)..."

  const handleNewTaskSubmit = (event) => {
    event.prevent.Default()
    // console.log(newTask)
    // list.push(newTask); 
    if (newTask.length = 0) {
      return;
    }
    const taskItem() = {
      text: newTask,
      complete: false
    }
    setNewListItem([...list, taskItem]);
    setNewTask("");
  }

  const handleNewTaskDelete(delIdx) {
    const filteredList = list.filter((newTask, i) => {
      return i !== delIdx;
    });

    setList = (filteredList);
  };

  const handleToggleComplete = (idx) => {

    const updatedList = {
      list.map((task, i) => {
        if (idx === 0) {
          task.complete = !task.complete;
          // const updatedTask = { ...list, complete: !newTask.complete };
          // return updatedTask;
        }
        return task;
      });

      setList(updatedList);
    }

  }



  // if (idx === i) {}

  // newTask.complete = !newTask.complete; 

  // // const updatedTask = { ...list, complete: !newTask.complete }; 
  // // return updatedTask;

  // return task;

  // set




}

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

      if (task.complete) {

        taskClasses.push("line-through");

      }

      return (

        <div key={i}>

          <input onChange={(event) => {

            handleToggleComplete(i);

          }}

            checked="newTask.complete"=false  type="checkbox"/>


          <span className={taskClasses.join("")}>{newTask.text}</span>


          <button onClick={(delIdx) => {

            handleNewTaskDelete(i);

          }}>Delete</button>

        </div>

      );


    })}

    );

  </div>


export default App;


// const [task, setTask] = useState("");

// is short-hand for:

// const newTaskStateArr("useState");
// const newTask = newTaskStateArr[0];
// const setNewTask = newTaskStateArr[1];


