import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Business from './components/Business';
import Politics from './components/Politics';
import Sports from './components/Sports';
import Navbar from './components/Navbar';

function App()  {

    return (
        <div>
          <Navbar />
          <Header />
          <Switch>
            <Route exact path="/" component={ MainPage } />
            <Route path="/business" component={ Business } />
            <Route path="/sports" component={ Sports } />
            <Route path="/politics" component={ Politics } />
          </Switch>
          <Footer />
        </div>
    );
}

export default App;
