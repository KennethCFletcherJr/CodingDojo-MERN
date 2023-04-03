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