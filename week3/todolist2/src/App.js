import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([{ "text": "conquer world", "complete": false }, { "text": "do dishes", "complete": false }]);
  //useState([{}])
  ///useState([{"text" : "conquer world", "complete" : false}])

  const handleTaskSubmit = (event) => {
    event.preventDefault()
    console.log("");

    // if (task.length === 0) {
    //   return;
    // }

    // const taskItem = {
    //   text: task,
    //   complete: false
    // }
    //taskItem is then inserted in the list (arr) (as a key:value pair object)
    setList([...list, { "text": task, "complete": false }]);

    //Why does this setTask setter have empty double quotations?
    //Is this the value for task passed from onChange?
    setTask("");
  }

  //This handleTaskDelete function is triggered by the handleTaskDelete function at index i, that is triggered for the button and handled by 
  //creating a new arr using filter, and deleting the task indicated at index i, that corresponds with the delIdx task.
  const handleTaskDelete = (indexFromMap) => {
    const filteredList = list.filter((task, allOtherIndexes) => {
      //What you are checking against; Return everything but that operator; keep everything except for 
      return allOtherIndexes !== indexFromMap;
    });

    //setList is used to hold the new list arrangement after the del a i/idx.
    setList(filteredList);
  };

  const handleToggleCheckbox = (indexFromMap) => {
    const updatedList =
      list.map((task, allOtherIndexes) => {
        if (allOtherIndexes === indexFromMap) {
          task.complete = !task.complete;
        }
        return task;
      });

    setList(updatedList);
  }

  // const handleLineThrough = (e) => {

  //   if (e.target.type === 'checkbox') {
  //     setTask({ ...list, complete: !task.complete })
  //   }
  //   else {
  //     setTask({ ...list, [e.target.name]: e.target.value })
  //   }
  //   // setShow(prevState => ({...prevState, [e.target.name]:e.target.value }))
  // }

  return (
    <div className="App">

      <form onSubmit={handleTaskSubmit}>
        <input onChange={(event) => {
          setTask(event.target.value);
        }}
          type="text" value={task} />
        <input type="submit" value="add" />

      </form>

      {/*Two parameters, second set of parentheses*/}

      <p>

        {list.map((item, idx) => (
          <div key={idx}>
            <button onClick={() => handleTaskDelete(idx)}>Delete</button>
            <input onClick={() => handleToggleCheckbox(idx)} type="checkbox" />

            {item.complete ? <p style={{textDecoration: "line-through"}}>{item.text}</p> : <p>{item.text}</p>}

          </div>

        ))}

      </p>



    </div>
  )
}



export default App;


//Two parameters, second set of parentheses

//Parameters, first arg, second return

//implicit return, in map/filter require parentheses to rtn more than one item.
//list = {}

//key always moves to the parent element inside the map

//anonymous function needed when passing an argument with function onClick={() => handleTaskDelete() anonymous function when we pass a value...

// Todo List
// Ah, the todo list! A ubiquitous project for any respectable JavaScript framework.Your job is to create a small React application to store and modify a list of tasks.Each task will have a text string as well as a completed property, which will be set to false initially.As you check off items, they should appear slashed out on the page.Using what you know about state and iterating through lists, render a list of items, and give the user the option to remove each item and add new ones.There are different ways to implement the remove function. One way to do it is using the built -in filter method.Filter returns a new array when invoked and is a great way to stay true to the functional nature of React.

//   Hint: When calling setState, make sure to send in a brand new object or array.

// Iterate through the existing tasks using the map method.

// Allow the user to add a new task, initially set to not completed.

// Allow the user to remove a task by clicking the delete button.

// Allow the user to toggle a task's completion property by clicking the checkbox next to it.

// Ninja Bonus: When updating the tasks' state, don't mutate the current task objects or the current task list.

// Sensei Bonus: Persist the todos list on page refreshes.Hint, consider combining the browser's localStorage with the useEffect hook.