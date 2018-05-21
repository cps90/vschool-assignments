import React from 'react';

const Counter = (props) => {
    return (
        <div>
            <h1>{props.count}</h1>
            <button onClick={props.add}>Click to Add</button>
            <button onClick={props.subtract}>Click to Subtract</button>
        </div>
    )
    console.log(props.subtract);
}

export default Counter;