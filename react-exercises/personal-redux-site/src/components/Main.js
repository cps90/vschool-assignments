import React from 'react';

function Main(props) {
    return (
        <div className="articleContainer">
                <img className="articleImage" src={props.image} alt=""/>
                <a className="articleTitle" href={ props.url } target="_blank">{props.title} </a>
                <p className="articleDesc">{props.description}</p>
                <p className="articleSource">{props.source}</p>
                
        </div>
    )
}

export default Main;