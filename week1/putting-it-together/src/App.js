import './App.css';
import PersonCard from './components/PersonCard';
import AddOneYear from './components/AddOneYear';

function App() {
  return (
    <div className="App">
// What format is this in now? Is it supposed to be an array of objects? If so, why?
      <PersonCard
        firstName={"Darius"}
        lastName={"Rucker"}
        age={56}
        hairColor={"none"}
        />
      <AddOneYear 
      button onClick={handleClick}
      />

      <PersonCard
        firstName={"Oprah"}
        lastName={"Winfrey"}
        age={69}
        hairColor={"brown"}
      />

      <PersonCard
        firstName={"Nora"}
        lastName={"Odonnell"}
        age={49}
        hairColor={"brown"}
      />

      <PersonCard
        firstName={"Seth"}
        lastName={"Rogan"}
        age={55}
        hairColor={"brown"}
      />

    </div>
  );
}
export default App;
