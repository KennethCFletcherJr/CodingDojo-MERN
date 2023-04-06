import React, { useState } from 'react';
import './App.css';

//Components had to be imported.
import Form from './components/Form';
import Display from './components/Display';

function App() {
 //So we hard-coded two key:value pairs, or two objects, that represent the props passed in, and their current useState.
  const [list, setList] = useState([{ "text": "conquer world", "complete": false }, { "text": "do dishes", "complete": false }]);
  //useState([{}])
  ///useState([{"text" : "conquer world", "complete" : false}])
  //Passed list/setList, the getter/setter, as KEY: VALUE pairs to the <Form /> component, handed down from  props on Line 19.
 //Passed list/setList, the getter/setter, as KEY: VALUE pairs to the <Display /> component, handed down from  props on Line 23.
  return (

    <div className="App">

    <Form list = {list}  setList = {setList} />

        {/*Two parameters, second set of parentheses*/}

        <Display list = {list} setList = {setList} />


      </div>
      )
}



      export default App;
    
