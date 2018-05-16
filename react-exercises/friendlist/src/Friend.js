import React from 'react';
import Pets from './Pets';
import PropTypes from 'prop-types';

const Friend = (props) => {
    
    const mappedPets = props.pets.map((pet, i) => {
        return (
            <Pets name={ pet.name }
                breed={ pet.breed }
                key={pet.name + i} />
        );
    })
   
   
    return (
       <div>
           <h1>Name: { props.name }</h1>
           <p>Age: { props.age }</p>
           <p>Pets: </p>
            { mappedPets }
       </div>
   )

}

Friend.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    pets: PropTypes.arrayOf(PropTypes.object)
}

export default Friend;