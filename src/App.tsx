import './App.css'
import { useState, useEffect } from 'react'
import { getGoal } from './services/MetaverseService';
import { getPositions } from './utils/metaverse-positions';
import { createPolyanet } from './services/PolyanetsService';
import { MegaverseObject } from './models/MegaverseObject';

function App() {

  const [megaverseObjects, setMegaverseObjects] = useState<MegaverseObject[]>([]);

  useEffect(() => {
    getGoal().then((response) => {
      setMegaverseObjects(getPositions(response))
    });
  }, []);

  if (megaverseObjects) {
    megaverseObjects.forEach(megaverseObject => {
      //createPolyanet(element.row, element.column); 
      if ('direction' in megaverseObject) {
        // call API for Cometh object
        console.log('Cometh');
      } else if ('color' in megaverseObject) {
        // call API for Soloon object
        console.log('Soloon');
      } else {
        // call API for Polyanet object
        console.log('Polyanet');
      } 
    });  
  }
  
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}

export default App;
