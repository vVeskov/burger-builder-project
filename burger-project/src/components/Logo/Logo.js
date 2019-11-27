import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import './Logo.css';

const Logo = (props) => {
    return (
        <img src={burgerLogo} style={{ height: props.height }} alt="MyBurger" className="Logo" />
    )
}

export default Logo