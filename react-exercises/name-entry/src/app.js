import React, {Component} from 'react';


export default class App extends Component {
    constructor(){
        super();
        this.state = {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({name: event.target.value});
    }
    handleSubmit(event){
        let names = document.getElementById('nameList');
        let list = document.createElement('li');
        list.innerText = this.state.name;
        names.appendChild(list);
        event.preventDefault();
        this.setState({name: ''})
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:  
                        <input type="text" 
                               value={this.state.name} 
                               onChange={this.handleChange}/>
                    </label>
                    <input type="submit" 
                           value="Submit"/>
                </form>
                <h1 id='h1'> {this.state.name}</h1>
                <ol id='nameList'>
                    
                </ol>
            </div>
        );
    }
}

