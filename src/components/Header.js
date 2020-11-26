import React from 'react';
import logo from '../images/mesto-logo.svg';

function Header() {
    return (
        <header className="header">
                    <img className="header__logo logo" src={logo} alt="Логотип Mesto" />
                </header>
    );
}

export default Header;
