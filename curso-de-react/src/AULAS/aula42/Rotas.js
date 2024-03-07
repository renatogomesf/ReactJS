import React from "react";
import {Routes, Route, Link} from 'react-router-dom'

import Pagina1 from '../../componentes/Pagina1'
import Pagina2 from '../../componentes/Pagina2'
import Pagina3 from '../../componentes/Pagina3'

export default function Rotas() {
    return (
        <>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/pagina1">Pagina 1</Link>
            <Link className="link" to="/pagina2">Pagina 2</Link>
            <Link className="link" to="/pagina3">Pagina 3</Link>
            
            <Routes>
                <Route path="/"/>
                <Route path="/pagina1" element={<Pagina1/>}/>
                <Route path="/pagina2" element={<Pagina2/>}/>
                <Route path="/pagina3" element={<Pagina3/>}/>
            </Routes>
        </>
    )
}