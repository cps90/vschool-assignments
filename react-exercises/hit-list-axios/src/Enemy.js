import React from 'react';
import axios from 'axios';


const Enemy = (props) => {
    return (
        <div>
            <div className='enemyContainer' style={{backgroundImage: `url(${props.image})`}}>
            <p className='enemyName'>{props.name}</p>
            </div>
        </div>
    )
}

export default Enemy;
