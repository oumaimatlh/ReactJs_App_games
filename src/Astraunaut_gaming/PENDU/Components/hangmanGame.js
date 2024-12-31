import React, { useEffect } from 'react';
import { getRandomWord } from '../store/wordStore';
import { useGameLogic } from '../store/gameLogic';
import '../styles/hangman.css';

import Header from './Header';
import Figure from './Figure';
import Word from './Word';
import WrongLetters from './WrongLetters';
import GameMessage from './GameMessage';

function HangmanGame() {
  const {
    selectedWord,
    correctLetters,
    wrongLetters,
    playable,
    message,
    setCorrectLetters,
    setWrongLetters,
    checkWinOrLose,
    resetGame,
  } = useGameLogic(getRandomWord());
  
  // Fonction pour vérifier si le joueur a gagné
  const isWin = correctLetters.length > 0 && selectedWord.split("").every(letter => correctLetters.includes(letter));

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;

      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          }
        }

        checkWinOrLose();
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [playable, correctLetters, wrongLetters, selectedWord, checkWinOrLose, setCorrectLetters, setWrongLetters]);

  return (
    <div className='hangman'>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      {message && <GameMessage message={message} onPlayAgain={() => resetGame(getRandomWord())} />}
      {isWin && !message && <GameMessage message="You Won!" onPlayAgain={() => resetGame(getRandomWord())} />}
    </div>
  );
}

export default HangmanGame;
