import React, { useState } from 'react';
import './App.css';

function App() {
    const [task, setTask] = useState("");
    const [list, setList] = useState([{ "text": "conquer world", "complete": false }, { "text": "do dishes", "complete": false }]);
    //useState([{}])
    ///useState([{"text" : "conquer world", "complete" : false}])

    const handleTaskSubmit = (event) => {
        event.preventDefault()

        if (task.length === 0) {
            return;
        }

        const taskItem = {
            text: task,
            complete: false
        }
        //taskItem is then inserted in the list (arr) (as a key:value pair object)
        setList([...list, taskItem]);

        //Why does this setTask setter have empty double quotations?
        //Is this the value for task passed from onChange?
        setTask("");
    }

    //This handleTaskDelete function is triggered by the handleTaskDelete function at index i, that is triggered for the button and handled by 
    //creating a new arr using filter, and deleting the task indicated at index i, that corresponds with the delIdx task.
    const handleTaskDelete = (delIdx) => {
        const filteredList = list.filter((task, i) => {
            return i !== delIdx;
        });

        //setList is used to hold the new list arrangement after the del a i/idx.
        setList(filteredList);
    };

    // function handleToggleComplete was created a check mark to indicate that the task has been done, and the event is initiated by the onChange event of 
    //checking a checkbox in the returned indices from mapping the task.
    const handleToggleComplete = (idx) => {
        const updatedList =
            list.map((task, i) => {
                if (i === idx) {
                    task.complete = !task.complete;
                }
                return task;
            });
        setList(updatedList);
    }

    return (
        <div className="App">

            <form onSubmit={handleTaskSubmit}>
                <input onChange={(event) => {
                    setTask(event.target.value);
                }}
                    type="text" value={task} />
                <div>
                    <button type="button">Add</button>
                </div>
            </form>

            <ol>

            {list.map((item, idx)=>(

            <li>{item.text}</li>  

            ))
        
        }
        
            </ol>

        </div>

    )

}


export default App;


// <h2>Release Year: {show.releaseYear}</h2>
//                         <h2>Genre: {show.genre}</h2>
//                         <span>Watched this show?</span>