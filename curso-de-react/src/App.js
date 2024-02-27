import React from 'react'

import Formulario from './AULAS/aula14/Formulario';

// quando a CSS é importada no arquivo principal, não precisa importar de novo nos componentens.
import './App.css'


function App() {

  return (
    <div className="App">
      
      <Formulario></Formulario>
      
    </div>
  );
}

export default App;
