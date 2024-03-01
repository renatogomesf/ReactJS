import React from "react";

export default function Caixa(props) {
    return (
        <div>
            <p>{props.site}</p>
            {/* retorna, nesta posição, os filhos definidos em caixa no app pai. como o children é um array, posso escolher um filho específico com o uso de ['índex']. caso deseje chamar todo o conteúdo, é só não usar a notação de posição de array*/}
            {props.children[0]}
            {props.children[1]}
            {props.children}
        </div>
    )
}