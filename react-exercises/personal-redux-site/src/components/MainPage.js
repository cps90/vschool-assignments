import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMainData } from '../redux';
import Main from './Main'


class MainPage extends Component {
    constructor (){
      super()
    }
  
    componentDidMount(){
      this.props.getMainData()
    }
    

    render() {
      console.log(this.props.data)
      var mappedMainData = this.props.data && this.props.data.articles.map((article, i) => {
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
          <div className="container">
            { mappedMainData }
          </div>
      );
    }
  }

  export default connect(state=>state, { getMainData })(MainPage);