import React from "react";
import Globais from "./Globais";

export default function Info() {
    return (
        <>
            <p>{`canal: ${Globais.canal}`}</p>
            <p>{`curso: ${Globais.curso}`}</p>
            <p>{`ano: ${Globais.ano}`}</p>
            <hr />
        </>
    )
}