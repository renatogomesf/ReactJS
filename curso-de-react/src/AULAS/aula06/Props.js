import React from 'react'
import Dados from '../../componentes/Dados';

function Props() {

    const cnl= 'cfb cursos'

    const yt = 'youtube.com/cfbcursos'

    const crs = 'react.js'

  return (
    <div>

       <Dados canal={cnl} youtube={yt} curso={crs}></Dados>
      
    </div>
  );
}

export default Props;
