import { useEffect, useState } from 'react';
import { Products } from './productos/Products';

function App() {
  const [state, setState] = useState();

  console.log('app state', state);

  return (
    <div className="App">
      <header className="App-header">
<Products/>
        <span className="text">learn react</span>
      </header>
    </div>
  );
}

export default App;