import React from 'react';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

import './style.css';

const App = () => {
    return (
        <div>
        <Navbar />
        <Content />
        <Footer />
        </div>
    )
}

export default App;