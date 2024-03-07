import React from 'react'

function ListaNumeros(props){
    const num = props.numeros
    const lista_numeros = num.map((n)=>{

        // "key": preferencialmente usar valores em string
        return <li key={n.toString()}>{n}</li>
    })

    return (<ul>{lista_numeros}</ul>)
}

const array_numeros = [1,2,3,4,5,6,7,8,9,10]

export default function AtributoKey() {
    return (
        <>
            <ListaNumeros numeros={array_numeros}/>
        </>
    )
}