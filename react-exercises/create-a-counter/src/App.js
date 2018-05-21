import React,{Component} from 'react';
import Counter from './Counter'


export default class App extends Component {
    constructor(){
        super();
        this.state = {
            clickCounter: 0
        }
        this.addCount = this.addCount.bind(this)
        this.subtractCount = this.subtractCount.bind(this)
    }
    addCount() {
        this.setState(prevState => {
            return {
                clickCounter: prevState.clickCounter + 1
            }
        })
    }
    subtractCount() {
        this.setState(prevState => {
            return {
                clickCounter: prevState.clickCounter - 1
            }
        })
    }
    render(){
        return(
            <div>
                <Counter count={ this.state.clickCounter }
                         add={ this.addCount }
                         subtract={ this.subtractCount }/>
            </div>
        );
    }
} 

