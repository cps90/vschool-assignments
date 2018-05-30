import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
            <div className="navbar">
                <div className="links"> 
                    <h1>tT</h1>
                    <Link to="/"> Home </Link>
                    <Link to="/business"> Business </Link>
                    <Link to="/sports"> Sports </Link>
                    <Link to="/politics"> Politics </Link>
                </div>
            </div>
    )
}

export default Navbar

