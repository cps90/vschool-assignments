import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getIssues } from '../redux'
import Issue from './Issue'



class MainPage extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            description: '',
            url: '',
            urlImage: '',
            source: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

    componentDidMount() {
        this.props.getIssues()
    }

    handleChange(e) {
        const { value, name } = e.target
        this.setState({
          [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
    }


    render() {
        console.log(this.props)
        return (
          <div>
            {this.props.issues.map(issue => 
                <Issue title={issue.title}
                    description={issue.description}
                    id={issue._id}
                    url={issue.url}
                    urlImage={issue.urlImage}
                    source={issue.source}
                    key={issue._id} 
                    comment={issue.comments}/>
            )}
          </div>
        );
    }
}

export default connect(state => ({issues: state}), {getIssues})(MainPage);