import React,{useState} from "react";
import Globais from "../../componentes/Globais";
import Info from "../../componentes/Info";

export default function VariaveisGlobais() {

    const [resumo,setResumo] = useState(Globais.resumo)

    const gravarResumo = ()=>{
        Globais.resumo=resumo
    }

    const verResumo = ()=>{
        alert(Globais.resumo)
    }

    return (
        <>
            <Info></Info>

            <p>{`canal: ${Globais.canal}`}</p>
            <p>{`curso: ${Globais.curso}`}</p>
            <p>{`ano: ${Globais.ano}`}</p>
            <hr />
            <input type="text" size='50' value={resumo} onChange={(e)=>setResumo(e.target.value)} />

            <button  onClick={()=>gravarResumo()}>Gravar resumo</button>
            <button  onClick={()=>verResumo()}>Ver resumo</button>
        </>
    )
}