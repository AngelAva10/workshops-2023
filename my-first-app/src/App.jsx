import './App.css';
import React from "react";
import { Counter } from "./Components/Task-1/Counter.jsx";
import { MyText } from "./Components/Task-2/MyText.jsx";
import { MyList } from './Components/Task-3/MyList.jsx';

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
