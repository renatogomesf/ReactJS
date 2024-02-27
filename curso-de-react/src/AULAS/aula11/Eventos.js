import React,{useState} from 'react'
import Led from '../../componentes/Led';

function Eventos() {

    const [ligado,setLigado] = useState(false)

    // em React, só é possível cancelar uma ação padrão de algo, como de botões ou links, usando o preventDefault() no elemento que deseja cancelar a ação.
    const cancelar = (obj)=>{
        return obj.preventDefault()
    }

  return (
    <div>

       <h1>CFB Cursos</h1>

       <Led ligado={ligado} setLigado={setLigado}></Led>

        {/* passo o elemento que está disparando o evento (neste caso, passando a tag "a") através do evento de clique para a função que vai receber o elemento e cancelar sua ação.*/}
       <a href="http://youtube.com/cfbcursos" target='blank' onClick={(e)=>cancelar(e)}>CFB Cursos</a>
      
    </div>
  );
}

export default Eventos;