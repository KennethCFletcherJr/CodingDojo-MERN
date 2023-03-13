import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">

      <PersonCard
        firstName={"Darius"}
        lastName={"Rucker"}
        age={56}
        hairColor={"none"}/>

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
