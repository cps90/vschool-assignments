import React, {Component} from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                name: '',
                phone: '',
                email: ''
            }
        }
        
    }
    render() {
        return (
            <div>
                <form onSubmit= {this.handleSubmit}>
                    <input type="text"/>
                    <input type="tel" placeholder='000-000-0000'/>
                    <input type="text"/>
                </form>
                <h3> {this.state.name} </h3>
                <p> {this.state.phone} </p>
                <p> {this.state.email}</p>
            </div>
        )       
    }

}

export default App;

