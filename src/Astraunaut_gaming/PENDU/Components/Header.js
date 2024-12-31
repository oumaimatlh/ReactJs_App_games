import React, { useEffect } from 'react';
import '../styles/hangman.css';

function Header() {
  return (
    <header className='header'>
      <h1>
        <span>P</span>
        <span>E</span>
        <span>N</span>
        <span>D</span>
        <span>U</span>
      </h1>
      <h2>Tapez une lettre pour deviner le mot ! 👀🧠 </h2>
    </header>
  );
}

export default Header;
