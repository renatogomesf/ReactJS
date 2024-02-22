import React,{useState} from 'react'
import Led from './componentes/Led';


// quando a CSS é importada no arquivo principal, não precisa importar de novo nos componentens.
import './App.css'


function App() {
  
  const [ligado,setLigado]=useState(false)

  const cancelar = (obj)=>{
    return obj.preventDefault()
  }

  return (
    <div className="App">
      <Led ligado={ligado} setLigado={setLigado}></Led>

      <a 
      href="http://youtube.com/cfbcursos"
      target='blank'
      onClick={(e)=>cancelar(e)}>
        cfb cursos
      </a>
    </div>
  );
}

export default App;
