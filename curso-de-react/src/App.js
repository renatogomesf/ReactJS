import React from 'react'

// quando a CSS é importada no arquivo principal, não precisa importar de novo nos componentens.
import './App.css'

function App() {

  const txtDestaque = {
    color:'#00f',
    fontSize:'3em',
  }

  return (
    <div className="App">

      <section className='caixa'>

        <h1 style={{color:'#f00',fontSize:'5em'}} >CFB cursos</h1>

        <h2 style={txtDestaque} >Curso de React</h2>

        <p className='texto'>se inscreva no canal</p>

        <a href="https://www.youtube.com/cfbcursos" target='blank'>CFB Cursos</a>
      </section>

    </div>
  );
}

export default App;
