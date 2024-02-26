import React from 'react'

import EnviarFunc from './AULAS/aula07/EnviarFunc';

// quando a CSS é importada no arquivo principal, não precisa importar de novo nos componentens.
import './App.css'


function App() {

  return (
    <div className="App">
      
      <EnviarFunc></EnviarFunc>
      
    </div>
  );
}

export default App;
