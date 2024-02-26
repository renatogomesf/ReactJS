import React from 'react'

import Render from './AULAS/aula09/Render';

// quando a CSS é importada no arquivo principal, não precisa importar de novo nos componentens.
import './App.css'


function App() {

  return (
    <div className="App">
      
      <Render></Render>
      
    </div>
  );
}

export default App;
