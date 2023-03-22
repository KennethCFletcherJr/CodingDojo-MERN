
//Display, in real time, the form data that is being typed in below the form.

import './App.css';
import './components/form';

function App() {
  return (
    <div classDisplay="App">
      <div>
        <label>{"First Name: "}</label>
        <{firstName} />
      </div>
      <div>
        <label>{"Last Name: "}</label>
        <{lastName} />
      </div>

      <div>
        <label>{"Email: "} </label>
        <{email} />
      </div>
      <div>
        <label>{{ "Password: "}</label>
        <{password} />
      </div>
    </div>
  );
}

export default App;

