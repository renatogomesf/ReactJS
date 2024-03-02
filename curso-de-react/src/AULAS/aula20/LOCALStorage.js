import React,{useState} from 'react'

export default function LOCALStorage() {
    
    // localStorage: armazenamento local do browser.

    // ".setItem("chave","valor")": cria uma chave e seu valor. os nomes são definidos por mim. caso eu crie uma chave com nome que já exista, o valor desta chave existente é trocado pelo novo valor.
    // localStorage.setItem("nome","bruno")

    // ".getItem("chave")": caso eu queira pegar uma chave específica, basta por o nome dela.
    // localStorage.getItem("nome")

    // ".removeItem("chave")": caso eu deseje remover uma chave específica, basta por o nome dela.
    // localStorage.removeItem("nome")

    const [nome,setNome] = useState()

    const armazenar=(chave,valor)=>{
        localStorage.setItem(chave,valor)
    }

    const consultar=(chave)=>{
        alert(localStorage.getItem(chave))
    }

    const apagar=(chave)=>{
        localStorage.removeItem(chave)
    }

    return (
        <div>
            <label htmlFor="">Digite um nome: </label> <br />
            <input type="text" name="" value={nome} onChange={(e)=>setNome(e.target.value)}/> <br />

            <button onClick={()=>armazenar("ls_nome",nome)}>Gravar nome</button>
            <button onClick={()=>consultar("ls_nome")}>Ver nome</button>
            <button onClick={()=>apagar("ls_nome")}>Remover nome</button>
        </div>
    )
}