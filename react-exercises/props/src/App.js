import React from 'react';
import Welcome from './Welcome'

const App = () => {
   return (
      <div>
        <Welcome name='John' email='john@aol.com' phone='205-627-6693'/>
        <Welcome name='Courtney' email='john@aol.com' phone='205-627-6693'/>
        <Welcome name='Betty' email='john@aol.com' phone='205-627-6693'/>
      </div>
   );
}

export default App;