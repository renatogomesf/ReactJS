import React,{useState} from 'react'
import Numero from '../../componentes/Numero';


function USEState() {

    // o useState é nescessário para renderizar na tela mudanças via programação. caso um variável ou constante seja alterada por conta de algum evento, ela não será atualizada na tela. mas, com uso do useState, a mudança é atualizada na tela.

    // "num": constante
    // "setNum": função que ira mudar o valor da constante
    // "useState()": o que permite todas as mudanças e renderizações.
    const [num,setNum] = useState(0)

  return (
    <div>

        <p>valor do state num em app: {num}</p>
        <Numero num={num} setNum={setNum}></Numero>
      
    </div>
  );
}

export default USEState;
