import React from 'react';
import PropTypes from 'prop-types';

const Place = (props) => {
    return (
        <div>
            <div className='card'>
            <h4 className='place text'>Place: { props.place }</h4>
            <p className='price text'>Price: { props.price }</p>
            <p className='time text'>Best time to go: { props.timeToGo }</p>
            </div>
        </div>
    );
}

Place.propTypes = {
    place: PropTypes.string,
    price: PropTypes.number,
    timeToGo: PropTypes.string
}

export default Place