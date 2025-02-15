import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Astraunaut_gaming/components/Home';
import GamePage from './Astraunaut_gaming/components/GamePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game/:gameId" element={<GamePage />} />
    </Routes>
  );
}

export default App;
