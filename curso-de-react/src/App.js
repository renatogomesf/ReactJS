import React from 'react'

import CriarCompon from './AULAS/aula05/CriarCompon';

// quando a CSS é importada no arquivo principal, não precisa importar de novo nos componentens.
import './App.css'


function App() {

  return (
    <div className="App">
      
      <CriarCompon></CriarCompon>
      
    </div>
  );
}

export default App;
