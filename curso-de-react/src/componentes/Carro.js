import React from "react";

export default class Carro extends React.Component {

    constructor(props){
        super(props)

        this.modelo='HRV'

        this.state={
            ligado:false,
            velAtual:0
        }

        // estou bindando a função "ligarDesligar" com o "this" da classe carro.
        this.ld=this.ligarDesligar.bind(this)
    }

    ligarDesligar(){
        // this.state.ligado = true
        // this.setState({ligado:!this.state.ligado})

        this.setState(
            (state)=>({
                ligado:!state.ligado
            })
        )
    }

    acelerar(){
        this.setState(
            (state,props)=>({
                velAtual:state.velAtual + props.fator
            })
        )
    }

    // chamado quando o componente é criado.
    componentDidMount(){
        console.log('o carro foi criado')
    }

    // chamado quando o componente é atualizado.
    componentDidUpdate(){
        console.log('o carro foi atualizado')
    }

    // chamado quando o componente é removido/desmontado.
    componentWillUnmount(){
        console.log('o carro foi removido')
    }

    render(){
        return (
            <div>
                <h1>Meu carro</h1>

                <p>Modelo: {this.modelo}</p>

                <p>Ligado: {this.state.ligado?'sim':'não'}</p>
                <p>vel.Atual: {this.state.velAtual}</p>

                <button onClick={this.ld}>{this.state.ligado?'Desligar carro':'Ligar carro'}</button>

                <button onClick={()=>this.acelerar()}>Acelerar</button>
            </div>
        )
    }
}