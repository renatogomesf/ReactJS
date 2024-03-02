import React,{useEffect,useState} from 'react'

export default function USEEffect() {

    
    const [contagem,setContagem] = useState(0)

    
    // o useEffect é chamado todas as vezes em que a página é montada ou atualizada. 
    useEffect(
        ()=>{
            console.log('página carregada')
            document.title='contagem: ' + contagem
        }
    )

    return (
        <div>

            <p>Contagem: {contagem}</p>
            <button onClick={()=>setContagem(contagem + 1)}>Contar</button>

        </div>
    )
}