import React from 'react'
import Logo from '../../componentes/img/logo.png'

function ExpreJSX() {

    const canal = ()=>{
       return ('cfb cursos - youtube.com/crbcursos')
    }

    const curso = 'curso de react'

  return (
    <div>

        <p>canal: {canal()}</p>

        <p>{curso}</p>

        {/* quando a img está dentro de src na pasta componentes, ela precisa ser importada para poder ser usada */}
        <img src={Logo} alt="" />

        {/* quando a img está dentro de public, não precisa importar, basta colocar o caminho da imagem para ser usada. */}
        <img src="img/logo192.png" alt="" />
      
    </div>
  );
}

export default ExpreJSX;
