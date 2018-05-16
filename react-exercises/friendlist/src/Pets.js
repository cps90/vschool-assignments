import React from 'react';
import PropTypes from 'prop-types';

const Pets = (props) => {
    return (
        <div>
            <p>{props.name}, {props.breed}</p>
            
        </div>
    );
}
Pets.propTypes = {
    name: PropTypes.string,
    breed: PropTypes.string
}
export default Pets;