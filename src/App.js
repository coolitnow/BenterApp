import React from 'react';
import './App.css';
import './Bored';
import Bored from './Bored';
import Axolotl from './Axoltl';
import SunStuff from './SunStuff';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="Header-Holders"><SunStuff /></div>
      
      <div className="Header-Holders">
          <div>Sum Cool</div>
          <div>Where you from?</div>
      </div>
      
      <div className="Header-Holders">put moonstuff? here</div>
      </header>  
      <div><Axolotl /></div>
      <div><Bored /></div>
      
    </div>
  );
}


export default App;

