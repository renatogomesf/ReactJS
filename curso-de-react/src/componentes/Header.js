import React from 'react';
import Logo from './img/logo.png'

function Header() {
    return(
        <header>
            <img src={Logo} alt="logo" />
            <h1>Logo</h1>
        </header>
    )
}

export default Header;