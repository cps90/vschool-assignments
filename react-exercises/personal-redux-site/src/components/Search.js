import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getSearchData, clearData } from '../redux';
import Main from './Main'

class Search extends Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.clearData()
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.getSearchData(this.state.input)
        this.setState({
            input: ''
        }) 
    }

    render() {
        console.log(this.props.data)
        var mappedSearchData = this.props.data && this.props.data.articles.map((article, i) => {
            return (
                <Main title={ article.title }
                    description={ article.description }
                    url={ article.url }
                    source={ article.source.name }
                    image={ article.urlToImage }
                    key={article.title + i }
                />    
            );
        })
        return (
            <div>
                <h3 className="searchDesc">Enter a search term below to search any topic over the last six months.</h3>
                <form className="searchBar" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter Search Terms" name="input" onChange={this.handleChange} value={this.state.input}/>
                    <button>SUBMIT</button>
                </form>
                { mappedSearchData }
            </div>
        )
    }
}

export default connect(state=>state, { getSearchData, clearData })(Search);