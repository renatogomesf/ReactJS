import React from "react";
import Dados from './Dados'

function Corpo() {

    const cnl = 'cfb cursos'
    const yt = 'cfb cursos'

    return(
        <section>
            <h2>Curso de react</h2>
            <p>se inscreva no canal</p>
            <Dados canal={cnl} youtube={yt} curso='react.js'></Dados>
        </section>
    )
}

export default Corpo;