import React from "react";

export default class Classe extends React.Component {

    constructor(props){

        // super(): chama o construtor da classe pai. neste caso, a classe "Classe" herda as caracteristicas de "React.Component" que seu pai.
        super(props)
    }

    render(){
        return (
            <div>
                <h1>Primeiro Componente de classe</h1>
                <p>Canal: {this.props.canal}</p>
                <p>Curso: {this.props.curso}</p>
            </div>
        )
    }
}