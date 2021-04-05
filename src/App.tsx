import React from 'react';
import Render from './components/Render';
import GameContext from './context/game/GameContext';
function App() {
  return (
    <div className={`App`}>
      <GameContext>
        <Render />
      </GameContext>
    </div>
  );
}

export default App;
