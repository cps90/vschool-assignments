import React, { Component } from 'react'
import { connect } from 'react-redux'

class Comment extends Component {

    render(){
        return (
            <div>
                <p>{this.props.name}:  {this.props.body}</p>
            </div>
        )
    }

}    

export default Comment