import React, { useState } from 'react';

const Form = (props) => {
    const [task, setTask] = useState("");
    //Destructured list/setList, getter/setter from props object.
    //list/setList are passed through props.
    //the onClick event is associated with a form, so it is included on a Form.js component.
    const { list, setList } = props;

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

        //The onSubmit event in the <form> tag, and the onChange event, in the <input> tag (nested in the <form>), call the handleTaskSubmit function, and inputs the value for task, assigned in the form JSX tag. The input button, is assigned a type, "submit" and labeled with the value, "add"

    }
    return (
        <div>

            <form onSubmit={handleTaskSubmit}>
                <input onChange={(event) => {
                    setTask(event.target.value);
                }}
                    type="text" value={task} />
                <input type="submit" value="add" />

            </form>

        </div>
    );
}

export default Form;
