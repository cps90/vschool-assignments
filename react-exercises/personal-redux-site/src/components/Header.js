import React from 'react';
import myImage from '../topTen_logo.png'

function Header() {
    return (
        <div className="header">
            <img className="headerLogo" src={ myImage }/>
            <h3 className="subtitle">News delivered to you ten stories at time.</h3>
        </div>
    );
}

export default Header;