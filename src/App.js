import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Astraunaut_gaming/components/Home';
import GamePage from './Astraunaut_gaming/components/GamePage';
import Login from './Astraunaut_gaming/Authentification/authentification';
import Signup from './Astraunaut_gaming/Authentification/registrer';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}  />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route path="/game/:gameId" element={<GamePage />} />
    </Routes>
  );
}

export default App;
