import React from 'react'
import Verde from './img/verde.png'
import Vermelho from './img/vermelho.png'


function Led(props) {

  return (
    <div className="App">
      <img className='vermelho' src={props.ligado?Verde:Vermelho} alt="" />
      <button onClick={()=>props.setLigado(!props.ligado)}>{props.ligado?'Desligar':'Ligar'}</button>
    </div>
  );
}

export default Led;
