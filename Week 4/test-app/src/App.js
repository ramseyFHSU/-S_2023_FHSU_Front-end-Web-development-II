import "./App.css";
import Tasks from "./components/Tasks";

function App() {
  const name = "John Doe";
  return (
    <div className="App">
      <header className="App-header">
        <span>Good Morning {name}</span>
        <Tasks />
      </header>
    </div>
  );
}

export default App;
