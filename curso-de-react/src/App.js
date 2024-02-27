import React from 'react'

import Lista from './AULAS/aula13/Lista'

// quando a CSS é importada no arquivo principal, não precisa importar de novo nos componentens.
import './App.css'


function App() {

  return (
    <div className="App">
      
      <Lista></Lista>
      
    </div>
  );
}

export default App;
