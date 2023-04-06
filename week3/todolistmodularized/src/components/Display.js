import React from 'react';

//The list/setList, getter/setter are brought down through props
const Display = (props) => {
//Destructured props into braces b/c it's an object, of type const
    const { list, setList } = props;
//handleTaskDelete and handleTaskCheckbox are part of the Display.js because they are displayed. Our assignments with generally employ a Form.js and a Display.js
//The handle functions that effect the displayed Checkbox and Delete function are included in the Display.js component.
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
//The handleTaskDelete and handleToggleCheckbox are called from the return statement on the Display.js component by onClick events on the button and on the checkbox
    return (

        <div>
            {list.map((item, idx) => (
                <div key={idx}>
                    <button onClick={() => handleTaskDelete(idx)}>Delete</button>
                    <input onClick={() => handleToggleCheckbox(idx)} type="checkbox" />

                    {item.complete ? <p style={{ textDecoration: "line-through" }}>{item.text}</p> : <p>{item.text}</p>}

                </div>

            ))}

        </div>
    );
}

export default Display;
