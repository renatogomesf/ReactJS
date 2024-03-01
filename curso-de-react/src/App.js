import React from 'react'

import Contencao from './AULAS/aula18/Contencao';

// quando a CSS é importada no arquivo principal, não precisa importar de novo nos componentens.
import './App.css'


function App() {

  return (
    <div className="App">
      
      <Contencao></Contencao>
      
    </div>
  );
}

export default App;
