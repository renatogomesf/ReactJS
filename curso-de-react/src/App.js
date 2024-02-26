import React from 'react'

import CSSemReact from './AULAS/aula08/CSSemReact';

// quando a CSS é importada no arquivo principal, não precisa importar de novo nos componentens.
import './App.css'


function App() {

  return (
    <div className="App">
      
      <CSSemReact></CSSemReact>
      
    </div>
  );
}

export default App;
