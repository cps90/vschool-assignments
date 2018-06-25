import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTodos, addTodo } from './redux'
import Todo from './todo'


class App extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            description: ''

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.getTodos()
    }

    handleChange(e){
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
    }    
    
    handleSubmit(e) {
        e.preventDefault()
        const newTodo = {
            title: this.state.title,
            description: this.state.description
        }
        this.props.addTodo(newTodo)
        this.setState({title: '', description: ''})
    }    

    render(){
        console.log(this.props)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        placeholder="Title" 
                        type="text" 
                        name="title" 
                        onChange={this.handleChange} 
                        value={this.state.title}/>
                    <input 
                        placeholder="Description"
                        type="text" 
                        name="description" 
                        onChange={this.handleChange} 
                        value={this.state.description}/>
                    <button>Submit</button>
                </form>
                {this.props.todos.map(todo => 
                    <Todo title={todo.title}
                        description={todo.description}
                        key={todo._id} 
                        id={todo._id}/>
                )}
            </div>    
        );
    }
}

export default connect(state=>({todos: state}), { getTodos, addTodo })(App);