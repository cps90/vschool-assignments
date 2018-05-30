import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSportsData } from '../redux';
import Main from './Main';


class Sports extends Component {
    constructor (){
        super()
      }

    componentDidMount() {
        this.props.getSportsData()
    }

    render() {
        console.log(this.props.data)
        var mappedSportsData = this.props.data && this.props.data.articles.map((article, i) => {
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
                { mappedSportsData }
            </div>
        );
    }
}

export default connect(state=>state, { getSportsData })(Sports);