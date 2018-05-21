import React from 'react';
import Hero from './Hero';
import superheroData from './superhero.json'

const Superhero = () => {
    
    function speak(hero) {
        alert(hero)
    }
    
    const superheroes = superheroData
                        .map((superhero, i) => 
                            <Hero
                                name={superhero.Name}
                                img={superhero.img}
                                phrase={superhero.Catchphrase}
                                hero={superhero}
                                handleClick={speak}
                                key={superhero.Name + i}
                            />
                        )                              
    return (
        <div>
            {superheroes}
         </div>
   );
   console.log(superheroes);
}

export default Superhero;