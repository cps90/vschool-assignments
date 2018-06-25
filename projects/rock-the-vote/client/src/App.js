import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Post from './components/Post'
import About from './components/About'


function App() {
   
    return (
         <div>
            <Header/>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={ MainPage } />
                <Route path="/post" component={ Post } />
                <Route path="/about" component={ About } />
            </Switch>
        </div>
    );
}

export default App;
