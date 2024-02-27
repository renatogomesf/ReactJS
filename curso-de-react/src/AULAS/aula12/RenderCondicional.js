import React,{useState} from 'react'


function RenderCondicional() {

    const [log,setLog] = useState(false)

    const msgLogin = ()=>{
        return 'Usuário logado'
    }

    const msgLogoff = ()=>{
        return 'Favor logar'
    }







    const cumprimento = ()=>{
        const hora = new Date().getHours()

        if(hora >= 0 && hora < 13){
            return <p>Bom dia</p>
        }else if(hora >= 13 && hora < 18){
            return <p>Boa tarde</p>
        }else{
            return <p>Boa noite</p>
        }
    }






    const [cor,setCor] = useState(1)

    const vermelho = {color:'#f00'}
    const verde = {color:'#0f0'}
    const azul = {color:'#00f'}

    const retCor=(c)=>{
        if(c==1){
            return vermelho
        }else if(c==2){
            return verde
        }else{
            return azul
        }
    }

    const mudaCor=()=>{
        setCor(cor + 1)

        if(cor > 2){
            setCor(1)
        }
    }

    // setInterval(mudaCor,1000)

  return (
    <div>

       <h1 style={retCor(cor)}>CFB Cursos</h1>

       <button onClick={()=>mudaCor()}>Mudar cor</button>

       {cumprimento()}

       <p>{log?msgLogin():msgLogoff()}</p>

       <button onClick={()=>setLog(!log)}>{log?'logoff':'login'}</button>
      
    </div>
  );
}

export default RenderCondicional;