import React,{useState} from 'react'


function Formulario() {

    const [nome,setNome] = useState('')

    // handle: modificador
    const handleChangeNome=(e)=>{
        setNome(e.target.value)
    }

    const [carro,setCarro] = useState('')

  return (
    <div>
        {/* notei que o "value" não é nescessário. mas, como foi mostrado na aula, irei manter. */}
        <label htmlFor="fnome">Digite seu nome: </label>
        <input type="text" name="fnome" id="fnome" value={nome} onChange={(e)=>handleChangeNome(e)}/>
        <p>Nome digitado: {nome}</p>

        <label htmlFor="">Selecione um carro</label>
        {/* "onChange": quando mudar */}
        <select name="" id="" value={carro} onChange={(e)=>setCarro(e.target.value)}>
            <option value="hrv">hrv</option>
            <option value="golf">golf</option>
            <option value="cruze">cruze</option>
            <option value="argo">argo</option>
        </select>
        <p>Carro selecionado: {carro}</p>
    </div>
  );
}

export default Formulario;