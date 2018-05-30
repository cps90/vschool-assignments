import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPoliticsData } from '../redux';
import Main from './Main';


class Politics extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        this.props.getPoliticsData()
    }

    render() {
        console.log(this.props.data)
        var mappedPoliticsData = this.props.data && this.props.data.articles.map((article, i) => {
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
                { mappedPoliticsData }
            </div>
        )
    }
}

export default connect(state=>state, { getPoliticsData })(Politics);