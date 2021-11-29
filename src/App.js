import React from 'react';
import './App.css';
import './Bored';
import Bored from './Bored';
import Axolotl from './Axoltl';
import Sun from './Sun.js';
import MoonPhase from './MoonPhase';
import MoonStuff from './MoonStuff';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="Header-Holders"></div>
      
      <div className="Header-Holders">
          <div className="spin">Sum Cool</div>
      </div>
      
      <div className="Header-Holders"><MoonPhase /></div>
      </header>  
      <div><Axolotl /></div>
      <div><Bored /></div>
      
    </div>
  );
}


export default App;

