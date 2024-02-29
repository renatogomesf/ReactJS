import React,{useState} from 'react'
import Nota from '../../componentes/Nota'
import Resultado from '../../componentes/Resultado'

export default function ElevaçaoState() {

    const [notas,setNotas] = useState({
      'nota1':0,
      'nota2':0,
      'nota3':0,
      'nota4':0,
    })

  return (
    <div>

        <Nota nota={notas} setNota={setNotas}></Nota>

        <Resultado somaNotas={
          parseFloat(notas.nota1)+
          parseFloat(notas.nota2)+
          parseFloat(notas.nota3)+
          parseFloat(notas.nota4)}
        ></Resultado>
      
    </div>
  )
}