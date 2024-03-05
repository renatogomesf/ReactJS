import React,{useState} from 'react'

import Carro from '../../componentes/Carro'

export default function StateCompoClasse() {

    const [carro,setCarro] = useState(true)

    const mostrarOcultarCarro=()=>{
        setCarro(!carro)
    }

    return (
        <>
            <h1>Componentes de Classe</h1>

            {carro?<Carro fator={1}></Carro>:''}

            <button onClick={()=>mostrarOcultarCarro()}>Ocultar</button>
        </>
    )
}