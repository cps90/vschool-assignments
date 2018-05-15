import React from 'react';

const Component = (props) => {
    return (
        <div className={props.uniqueStyle}>
            <h2 className='showTitle'>{props.show}</h2>
            <h4 className='network'>{props.network}</h4>
            <p className='describe'>{props.describe}</p>
        </div>
    );
}

export default Component;