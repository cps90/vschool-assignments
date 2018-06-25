import React, { Component } from 'react'
import { deleteTodo, editTodo } from './redux'
import { connect } from 'react-redux'

class Todo extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            description: '',
            isToggled: false

        }
        this.toggle = this.toggle.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const {name, value} = e.target
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
        this.props.editTodo(this.props.id, newTodo)
        this.setState({ isToggled: false, title: '', description: ''})
    }

    toggle() {
        this.setState(prevState => {
            return {
                //opposite of what it was in prev state
                isToggled: !prevState.isToggled
            }
        })
    }
   
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <button onClick={ () => this.props.deleteTodo(this.props.id) }>Delete</button>
                <button onClick={ this.toggle }>Edit</button>
                { this.state.isToggled 
                    ?   <form onSubmit={this.handleSubmit}>
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
                    : null
               }
            </div>
        )
    }
}

export default connect(null, {deleteTodo, editTodo})(Todo)