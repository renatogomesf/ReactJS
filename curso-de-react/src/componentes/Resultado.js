import React from "react";

export default function Resultado(props) {
    return (
        <div>
            <p>Soma das notas: {props.somaNotas}</p>
            <p>Situação: {props.somaNotas >= 60?'Aprovado':'Reprovado'}</p>
        </div>
    )
}