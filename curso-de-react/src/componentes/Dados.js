import React from "react";

function Dados(props){
    return(
        <div>
            <p>canal:{props.canal}</p>
            <p>youtube:{props.youtube}</p>
            <p>curso:{props.curso}</p>
        </div>
    )
}

export default Dados