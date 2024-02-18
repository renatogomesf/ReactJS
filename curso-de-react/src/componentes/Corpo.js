import React from "react";
import Dados from './Dados'

function Corpo() {

    const cnl = 'cfb cursos'

    const yt=()=>{

        return 'youtube.com/cfbcursos'   

    }

    const somar = (v1,v2)=>{
        return v1 + v2
    }

    return(
        <section>
            <h2>Curso de react</h2>
            <p>se inscreva no canal</p>
            <Dados canal={cnl} youtube={yt} curso='react.js' somar={somar}></Dados>
        </section>
    )
}

export default Corpo;