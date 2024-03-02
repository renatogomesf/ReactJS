import React from 'react'

import LOCALStorage from './AULAS/aula20/LOCALStorage';

// quando a CSS é importada no arquivo principal, não precisa importar de novo nos componentens.
import './App.css'


function App() {

  return (
    <div className="App">
      
      <LOCALStorage></LOCALStorage>
      
    </div>
  );
}

export default App;
