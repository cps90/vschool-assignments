import React from 'react';

function Main(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.source}</p>
        </div>
    )
}

export default Main;