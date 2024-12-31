import React from 'react';

const WrongLetters = ({ wrongLetters }) => {
  return (
    <div className="wrong-letters-container">
      <p>Lettres incorrectes :</p>
      <span>
        {wrongLetters.map((letter, index) => (
          <span key={index}>{letter}{index < wrongLetters.length - 1 ? ', ' : ''}</span>
        ))}
      </span>
    </div>
  );
};

export default WrongLetters;
