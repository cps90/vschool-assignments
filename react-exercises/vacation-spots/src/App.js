import React from 'react';
import SpotList from './SpotList'
import Header from './Header'
import './style.css'


const App = () => {
    const vacationSpots = [
        {
            place: "Meridian, Idaho",
            price: 40,
            timeToGo: "Spring"
          },{
            place: "Cancun",
            price: 900,
            timeToGo: "Winter"
          },{
            place: "China",
            price: 1200,
            timeToGo: "Fall"
          },{
            place: "Russia",
            price: 1100,
            timeToGo: "Summer"
          },{
            place: "Lebanon",
            price: 400,
            timeToGo: "Spring"
          }
    ]

    return (
        <div>
        <Header />
        <SpotList spots={ vacationSpots } />
        </div>
    );
}

export default App;