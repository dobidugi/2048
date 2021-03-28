import React from 'react';
import './App.css';
// import DataString from './components/DataString';
import Game from './components/game/Game';
import Render from './components/Render';
import { data } from './data';


function App() {

  return (
    <div className={`App`}>
      <Render />
    </div>
  );
}

export default App;
