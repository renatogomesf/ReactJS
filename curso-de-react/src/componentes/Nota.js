import React from "react";

export default function Nota(props){


    const handleFormChange=(e)=>{
        if(e.target.getAttribute('name')=='nota1'){
            props.setNota({
                "nota1":e.target.value,
                "nota2":props.nota.nota2,
                "nota3":props.nota.nota3,
                "nota4":props.nota.nota4,
            })
            
        }else if(e.target.getAttribute('name')=='nota2'){
            props.setNota({
                "nota1":props.nota.nota1,
                "nota2":e.target.value,
                "nota3":props.nota.nota3,
                "nota4":props.nota.nota4,
            })

        }else if(e.target.getAttribute('name')=='nota3'){
            props.setNota({
                "nota1":props.nota.nota1,
                "nota2":props.nota.nota2,
                "nota3":e.target.value,
                "nota4":props.nota.nota4,
            })

        }else if(e.target.getAttribute('name')=='nota4'){
            props.setNota({
                "nota1":props.nota.nota1,
                "nota2":props.nota.nota2,
                "nota3":props.nota.nota3,
                "nota4":e.target.value,
            })
        }
    }



    return (
        <div>
            <legend>Informe a nota: 1</legend>
            <input type="text" name="nota1" onChange={(e)=>handleFormChange(e)}/>

            <legend>Informe a nota: 2</legend>
            <input type="text" name="nota2" onChange={(e)=>handleFormChange(e)}/>

            <legend>Informe a nota: 3</legend>
            <input type="text" name="nota3" onChange={(e)=>handleFormChange(e)}/>

            <legend>Informe a nota: 4</legend>
            <input type="text" name="nota4" onChange={(e)=>handleFormChange(e)}/>
        </div>
    )
}