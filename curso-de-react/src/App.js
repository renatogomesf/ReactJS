import React from 'react'

import RenderCondicional from './AULAS/aula12/RenderCondicional';

// quando a CSS é importada no arquivo principal, não precisa importar de novo nos componentens.
import './App.css'


function App() {

  return (
    <div className="App">
      
      <RenderCondicional></RenderCondicional>
      
    </div>
  );
}

export default App;
