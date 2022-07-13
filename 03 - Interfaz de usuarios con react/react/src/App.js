import './App.css';
import Counter from "./Components/Counter";
import User from "./Components/User";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="App">
        <Counter />

        <User
            name="Israel"
            age={41}
            skills="web development - mobile development - server management - and a lot of things"
        />

        <User
            name="Susana"
            age={45}
            skills="marketing - social networks"
        />

        <TodoList />
    </div>
  );
}

export default App;
