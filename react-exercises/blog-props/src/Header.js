import React from 'react';
import Navbar from './Navbar';

const Header = (props) => {
    return (
        <div className='header'>
            <Navbar />
            <h1 className='mainTitle'>Clean Blog</h1>
            <h4 className='subTitle'>A Blog Theme by Start Bootstrap</h4>
        </div>
    )
}

export default Header
