import React from 'react';
import './App.css';
import './Bored';
import Bored from './Bored';
import Axolotl from './Axoltl';
import Sun from './Sun.js';
import MoonPhase from './MoonPhase';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <div className="Header-Holders"><Sun /></div>
      
      <div className="Header-Holders">
        <div class="wrapper">
	            Sum:Cool
        </div>
      </div>
      
      <div className="Header-Holders"><MoonPhase /></div>
      </header>
      <div className="MiddleContainer"> 
      <div><Axolotl /></div>
      <div><Bored /></div>
      </div> 
      
    </div>
  );
}


export default App;

