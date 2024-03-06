import React from 'react'

import ConsumoAPI from './AULAS/aula38, 39 e 40/ConsumoAPI.js';

import FetchAPI from './AULAS/aula38, 39 e 40/FetchAPI';

// quando a CSS é importada no arquivo principal, não precisa importar de novo nos componentens.
import './App.css'


function App() {

  return (
    <div className="App">
      
        <FetchAPI></FetchAPI>
        <hr />
        <ConsumoAPI></ConsumoAPI>
      
    </div>
  );
}

export default App;
