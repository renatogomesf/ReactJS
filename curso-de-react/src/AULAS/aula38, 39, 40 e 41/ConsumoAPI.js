import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function ConsumoAPI() {

    const [carros,setCarros] = useState([])

    useEffect(()=>{
        axios.get('https://70724f1f-c86c-4d55-ba5f-2ee41a493bae-00-1pfzxbybk37v4.janeway.replit.dev/')
        .then((response)=>{
            setCarros(response.data)
        })
    })

    return (
        <div>
            {carros.map((carro)=>{
                return (
                    <div key={carro.id}>{carro.id} - {carro.marca} - {carro.modelo} </div>
                )
            })}
        </div>
    )
}