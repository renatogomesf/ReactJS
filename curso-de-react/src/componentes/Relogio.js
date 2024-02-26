import React,{useState} from "react";

function Relogio(){

    const [hora,setHora] = useState(0)

    function tiktak(){
        return setHora(new Date().toLocaleTimeString())
    }

    setInterval(tiktak,1000)

    return(

        <p>{hora}</p>
        
    )
}

export default Relogio