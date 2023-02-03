import { useEffect, useState } from 'react';
import { Products } from './productos/Products';
import './App.css';

function App() {
  const [state, setState] = useState();

  console.log('app state', state);

  return (
    <div className="App">
      <header className="App-header">
<Products/>
      </header>
    </div>
  );
}

export default App;