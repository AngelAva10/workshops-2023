import './App.css';
import React from "react";
import { Button } from "./Components/Button.jsx";
import { Input } from "./Components/Input.jsx";
import { List } from './Components/List.jsx';

function App() {
  return (
    <div className="App">
      <Input />
      <Button />
      <List />
    </div>
  );
}

export default App;
