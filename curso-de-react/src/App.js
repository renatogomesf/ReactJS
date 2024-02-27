import React from 'react'

import Eventos from './AULAS/aula11/Eventos';

// quando a CSS é importada no arquivo principal, não precisa importar de novo nos componentens.
import './App.css'


function App() {

  return (
    <div className="App">
      
      <Eventos></Eventos>
      
    </div>
  );
}

export default App;
