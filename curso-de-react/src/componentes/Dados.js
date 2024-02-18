import React from "react";

function Dados(props){

    const n1 = 10
    const n2 = 5

    return(
        <div>
            <p>canal: {props.canal}</p>
            <p>youtube: {props.youtube()}</p>
            <p>curso: {props.curso}</p>
            <p>{`a soma de ${n1} com ${n2} é igual a: ${props.somar(n1,n2)}`}</p>
        </div>
    )
}

export default Dados