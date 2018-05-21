import React from 'react';
import PropTypes from 'prop-types';

const Place = (props) => {
    const cardColor = () => {
        if(props.timeToGo === 'Spring') {
            return 'pink'
        } else if (props.timeToGo === 'Summer'){
            return 'green'
        } else if (props.timeToGo === 'Fall'){
            return 'orange'
        } else if (props.timeToGo === 'Winter') {
            return 'lightblue'
        }
    }   

    const seasonStyle = {
        backgroundColor: cardColor()
    }

    return (
        <div>
            <div className='card' style={seasonStyle}>
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