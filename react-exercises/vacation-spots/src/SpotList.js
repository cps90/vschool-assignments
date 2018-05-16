import React from 'react';
import Place from './Place';
import PropTypes from 'prop-types';


const SpotList = (props) => {
    
    const mappedSpots = props.spots.map((spot, i) => {
        console.log(spot)
        return (
            <Place  place={ spot.place }
                    price={ spot.price }
                    timeToGo={ spot.timeToGo }
                    key={ spot.place + i }
            />
        );
    })
    return (
        <div className='cardContainer'>
            { mappedSpots }
        </div>
    )
}

SpotList.propTypes = {
    spots: PropTypes.arrayOf(PropTypes.object)
}

export default SpotList;