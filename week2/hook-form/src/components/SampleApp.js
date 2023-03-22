import './App.css';
import Header from './components/Header';
// passing in 2 attributes to the Header component through the default props object which will look like this:

function App() {
    return (
        <div className="App">
       {
                //    "firstName":"Bill",
                //    "lastName":"Justice"
                // }
                <Header firstName={"Bill"} lastName={"Justice"} />
    </div>
    );
}
export default App;

