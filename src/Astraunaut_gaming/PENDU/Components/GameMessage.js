import React from 'react';

const GameMessage = ({ message, onPlayAgain }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <h2>{message}</h2>
        <button className="btn" onClick={onPlayAgain}>
          Rejouer
        </button>
      </div>
    </div>
  );
};

export default GameMessage;
