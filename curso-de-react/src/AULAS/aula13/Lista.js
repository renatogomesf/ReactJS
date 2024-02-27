import React from 'react'


function Lista() {

  const carros = [
    {categoria: 'Esporte', preço: '110000,00', modelo: 'Golf GTI'},
    {categoria: 'Esporte', preço: '120000,00', modelo: 'Camaro'},
    {categoria: 'SUV', preço: '85000,00', modelo: 'HRV'},
    {categoria: 'SUV', preço: '83000,00', modelo: 'T-Cross'},
    {categoria: 'Utilitário', preço: '120000,00', modelo: 'Hillux'},
    {categoria: 'Utilitário', preço: '90000,00', modelo: 'Ranger'},
  ]

  const listaCarros = carros.map((el,i)=>{
    return <li>{i} - {`categoria: ${el.categoria}, preço: ${el.preço}, modelo: ${el.modelo}`}</li>
  })

  return (
    <div className="App">
      
      <ul>
        {listaCarros}
      </ul>

    </div>
  );
}

export default Lista;
