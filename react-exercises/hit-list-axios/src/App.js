import React, { Component } from 'react';
import axios from 'axios';
import Enemy from './Enemy.js'
import Header from './Header.js'
import './style.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get("http://api.vschool.io:6543/hitlist.json").then(response => {
    this.setState({data: response.data})
    })
  }

  render() {
    const mappedHitList = this.state.data.map(enemy => {
        return (
          <Enemy 
            name = {enemy.name}
            image = {enemy.image}
          />
        ); 
    })

    return (
      <div>
        <Header />
       <div className='mainContent'>{mappedHitList}</div>
      </div>
    );
  }
}

export default App;
