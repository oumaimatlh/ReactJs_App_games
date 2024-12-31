import { useState, useCallback } from 'react';

export function useGameLogic(initialWord) {
  const [selectedWord, setSelectedWord] = useState(initialWord);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [playable, setPlayable] = useState(true);
  const [message, setMessage] = useState('');

  const checkWinOrLose = useCallback(() => {
    const won = selectedWord.split('').every((letter) => correctLetters.includes(letter));
    const lost = wrongLetters.length >= 6;

    if (won) {
      setMessage('You Win!');
      setPlayable(false);
    } else if (lost) {
      setMessage('You Lose!');
      setPlayable(false);
    }
  }, [selectedWord, correctLetters, wrongLetters]);

  const resetGame = (newWord) => {
    setSelectedWord(newWord);
    setCorrectLetters([]);
    setWrongLetters([]);
    setPlayable(true);
    setMessage('');
  };

  return {
    selectedWord,
    correctLetters,
    wrongLetters,
    playable,
    message,
    setCorrectLetters,
    setWrongLetters,
    checkWinOrLose,
    resetGame,
  };
}
