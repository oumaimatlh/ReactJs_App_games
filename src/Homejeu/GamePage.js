import React from 'react';
import { useParams } from 'react-router-dom';
import Home from './Home';

const GamePage = () => {
    const { gameId } = useParams(); // Extract gameId from the URL params

    // You can replace this part with actual game data fetching logic if needed.
    const gameData = {
        pokemon: { title: 'Pokemon Puzzle', description: 'Puzzle game with Pokémon characters.' },
        tic: { title: 'Tic Tae Toe', description: 'Classic Tic Tac Toe game.' },
        // Add other game data here
    };

    const game = gameData[gameId];

    if (!game) {
        return <div>Game not found!</div>;
    }

    return (
        
        <div className="game-page">
            
            <h2>{game.title}</h2>
            <p>{game.description}</p>
            {/* Here you can render the actual game component */}
        </div>
    );
};

export default GamePage;
