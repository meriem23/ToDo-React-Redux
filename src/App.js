import "./App.css";
import AddTask from "./components/AddTask";
import FilterTask from "./components/FilterTask";
import ListTask from "./components/ListTask";

const App = () => {
  return (
    <div className="App-header">
      <FilterTask />
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;
