import React,{useState} from "react";

const carros = [
    {categoria:"Esporte", preco:"110.000", modelo:"Golf GTI"},
    {categoria:"Esporte", preco:"120.000", modelo:"Camaro"},
    {categoria:"SUV", preco:"85.000", modelo:"HRV"},
    {categoria:"SUV", preco:"83.000", modelo:"T-Cross"},
    {categoria:"Utilitário", preco:"125.000", modelo:"Hilux"},
    {categoria:"Utilitário", preco:"90.000", modelo:"Ranger"}
]

const linhas=(cat)=>{

    const li = []

    carros.forEach((carro)=>{
        if(carro.categoria.toUpperCase() == cat.toUpperCase() || cat == ''){
            li.push(
                <tr>
                    <td>{carro.categoria}</td>
                    <td>{carro.preco}</td>
                    <td>{carro.modelo}</td>
                </tr>
            )
        }
    })

    return li
}

const tabelaCarros=(cat)=>{
    return (
        <table border={1} style={{borderCollapse:'collapse'}}>
            <thead>
                <tr>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th>Modelo</th>
                </tr>
            </thead>
            <tbody>
                {linhas(cat)}
            </tbody>
        </table>
    )
}

const pesquisaCategoria=(cat,scat)=>{
    return (
        <div>
            <label htmlFor="cat">Digite uma categoria: </label>
            <input type="text" name="cat" id="cat" value={cat} onChange={(e)=>scat(e.target.value)} />
        </div>
    )
}

export default function ExercReact() {

    const [categoria,setCategoria] = useState('')

    return (
        <>
            {pesquisaCategoria(categoria,setCategoria)}
            <br />
            {tabelaCarros(categoria)}
        </>
    )
}