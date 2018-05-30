import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home from "./Home";  
import About from "./About";  mk
import Services from "./Services";


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
          <Switch />
            <Route path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/services' component={Services}/>
          <Switch />  
        <Footer />
      </div>
    );
  }
}

export default App;
