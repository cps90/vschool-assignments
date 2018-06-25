import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'

class Issue extends Component {


    render() {
        return (
            <div>
                <a href={this.props.url}><h2>{this.props.title}</h2></a>
                <h4>{this.props.description}</h4>
                <p>{this.props.source}</p>
                <div>
                {this.props.comment.map(comment =>
                    <Comment 
                        name={comment.name}
                        body={comment.body}
                        id={comment._id}
                        key={comment._id}/>
                )}    
                </div>
            </div>
        )
    }
}

export default Issue