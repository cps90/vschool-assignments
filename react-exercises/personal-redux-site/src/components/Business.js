import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBusinessData } from '../redux';
import Main from './Main';


class Business extends Component {
    constructor (){
        super()
    }

    componentDidMount() {
        this.props.getBusinessData()
    }

    render() {
        console.log(this.props.data)
        var mappedBusinessData = this.props.data && this.props.data.articles.map((article, i) => {
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
                { mappedBusinessData }
            </div>
        );
    }
}

export default connect(state=>state, { getBusinessData })(Business);
