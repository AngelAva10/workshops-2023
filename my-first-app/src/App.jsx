import './App.css';
import React from "react";
import { Counter } from "./Components/Task-1/Counter.jsx";
import { MyText } from "./Components/Task-2/MyText.jsx";
import { MyList } from './components/task-3/MyList';

function App() {
  return (
    <div className="App">
      <Counter/>
      <MyText />
      <MyList />
    </div>
  );
}

export default App;
