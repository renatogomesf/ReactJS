import React from 'react'
import Caixa from '../../componentes/Caixa'
import Canal from '../../componentes/Canal'


export default function Contencao() {

  return (
    <div>

       <div>

        <Caixa site='www.cfbcursos.com.br'>
            {/* elementos filhos de caixa */}
            <h1>cfb cursos</h1>
            <p>curso de react</p>
            <Canal></Canal>
        </Caixa>

       </div>
      
    </div>
  )
}