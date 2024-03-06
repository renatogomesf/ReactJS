import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function ConsumoAPI() {

    const [carros,setCarros] = useState([])

    useEffect(()=>{
        axios.get('https://70724f1f-c86c-4d55-ba5f-2ee41a493bae-00-1pfzxbybk37v4.janeway.replit.dev/')
        .then((res)=>{
            const dadosCarros = res.data
            setCarros(dadosCarros)
        })
    })

    return (
        <div>
            {carros.map((carro)=>{
                return (
                    <div>{carro.id} - {carro.marca} - {carro.modelo} </div>
                )
            })}
        </div>
    )
}