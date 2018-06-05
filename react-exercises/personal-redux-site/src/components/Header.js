import React from 'react';
import myImage from '../topTen_logo.png'

function Header() {
    return (
        <div className="header">
            {/* <img className="headerLogo" src={ myImage }/> */}
            
            <h1 className="headerTitle">topTEN</h1>
            <h3 className="subtitle">News Delivered to You Ten Stories at a Time</h3>
        </div>
    );
}

export default Header;