import React from 'react';


const Greeting = (props) => {
    let phrase;

    switch (props.language) {
        case "English":
            phrase = <h2>Hello</h2>
            break;
        case "Spanish": 
            phrase = <h2>Hola</h2> 
            break;
        case "French": 
            phrase = <h2>Bonjour</h2> 
            break;  
        case "Italian": 
            phrase = <h2>Ciao</h2> 
            break;          
        default:
            phrase = <h4>No props were given</h4>      
    }

    return (
        <div>
            { phrase }
        </div>
    )
}

export default Greeting