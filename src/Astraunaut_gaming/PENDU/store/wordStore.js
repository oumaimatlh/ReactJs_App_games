const words = ['application', 'interface', 'react', 'javascript'];

export const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};
