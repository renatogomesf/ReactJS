import React,{useState,useEffect} from "react";

export default function FetchAPI() {

    const [carros,setCarros] = useState([])

    useEffect(()=>{
        fetch('https://70724f1f-c86c-4d55-ba5f-2ee41a493bae-00-1pfzxbybk37v4.janeway.replit.dev/')
        .then((resultado)=>{
            return resultado.json()
        })
        .then((res)=>{
            setCarros(res)
        })
    })


    return (
        <div>
            {carros.map((carro)=>{
                return (
                    <div key={carro.id}>{carro.id} - {carro.marca} - {carro.modelo}</div>
                )
            })}
        </div>
    )
}