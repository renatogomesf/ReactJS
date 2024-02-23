import React,{useState} from 'react'


// quando a CSS é importada no arquivo principal, não precisa importar de novo nos componentens.
import './App.css'


function App() {

  const [cor,setCor] = useState(1)

  const vermelho = {color: '#f00'}
  const verde = {color: '#0f0'}
  const azul = {color: '#00f'}

  const retCor=(c)=>{
    if(c==1){
      return vermelho
    }else if(c==2){
      return verde
    }else{
      return azul
    }
  }

  const mudaCor=()=>{
    setCor(cor+1)

    if(cor > 2){
      setCor(1)
    }
  }

  const [horario,setHora] = useState()

  const hora=()=>{
    setHora(new Date().toLocaleTimeString())
  }

  setInterval(hora,1000)

  return (
    <div className="App">
      
      <h1 style={retCor(cor)} >cfb cursos</h1>

      <button onClick={()=>mudaCor()}>mudar cor</button>

      <p>{horario}</p>

    </div>
  );
}

export default App;
