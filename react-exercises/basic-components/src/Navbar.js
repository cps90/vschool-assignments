import React from 'react';

const Navbar = () => {
    return (
        <div className="headerContainer">
            <nav>
                <ul className="navBar">
                    <li className='Produce'>Produce</li>
                    <li className='nav home'>Home</li>
                    <li className='nav shop'>Shop</li>
                    <li className='nav learn'>Learn More</li>
                </ul>
            </nav>
            <div className="heroImage"></div>   
        </div>
    )
}

export default Navbar;