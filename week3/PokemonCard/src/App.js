import './App.css';
import Form from './components/Form';
import Display from './components/Display';

// 1. WHAT METHOD ARE WE GOING TO USE TO MAKE MULTIPLE CARDS APPEAR?
// 2. WHAT KIND OF DATA WILL ALLOW US TO USE THAT METHOD?
// 3. WHAT MIGHT OUR COMPONENTS NEED FROM OUR APP TO ACCOMPLISH THE TASK?
// 4. DO WE NEED TO LIFT STATE?

function App() {
  return (
    <div className="App">
      <Form />
      <Display />
    </div>
  );
}

export default App;
