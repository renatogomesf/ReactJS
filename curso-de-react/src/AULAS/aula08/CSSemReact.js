import React from "react";

function CSSemReact(){

    const textoDestaque = {
        color:'#00f',
        fontSize: '3em'
    }

    return(
        <div>
            <section className="caixa">
                <h1 style={{color:'#f00',fontSize:'5em'}}>CFB Cursos</h1>

                <h2 style={textoDestaque}>Curso de React</h2>

                <p className="texto">se inscreva no canal</p>

                <a href="https://www.youtube.com/cfbcursos" target="blank">CFB Cursos</a>
            </section>
        </div>
    )
}

export default CSSemReact