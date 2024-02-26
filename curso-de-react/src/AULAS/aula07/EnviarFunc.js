import React from 'react'
import Dados from '../../componentes/Dados';

function EnviarFunc() {

    const cnl= ()=>{
        return 'cfb cursos'
    } 

    const yt = 'youtube.com/cfbcursos'

    const crs = 'react.js'

    const somar = (v1,v2)=>{
        return v1 + v2
    }

  return (
    <div>

       <Dados canal={cnl} youtube={yt} curso={crs} somar={somar}></Dados>
      
    </div>
  );
}

export default EnviarFunc;
