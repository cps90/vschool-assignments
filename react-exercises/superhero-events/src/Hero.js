import React from 'react';

const Hero = (props) => {


    return(
        <div>
        <h1 onClick={() => props.handleClick(props.phrase)}>{props.name}</h1>
        <img style={{width: "400px", height: "300px"}}src={props.img}/>
        {/* <p>{props.phrase}</p> */}
        </div>
    );

}    

export default Hero;