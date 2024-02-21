import React,{useState} from 'react'
import Numero from './componentes/Numero';

// quando a CSS é importada no arquivo principal, não precisa importar de novo nos componentens.
import './App.css'


function App() {
  
  const [num,setNum] = useState(0)

  return (
    <div className="App">

      <p>valor do state num em App: {num}</p>

      <Numero num={num} setNum={setNum}></Numero>

    </div>
  );
}

export default App;
