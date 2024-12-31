import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaHome, FaThList, FaHeart, FaCog, FaSearch } from 'react-icons/fa'; // Importer les icônes
import JeuPokemon from '../Jeux_poke_puzzle/Pokemon_puzzle';
import Jeu from '../Jeu_dés/Jeu.js' ;
import HangmanGame from '../PENDU/Components/hangmanGame.js';
import TicTacToe from '../XO/TicTacToe/TicTacToe.js'
import '../styles/Game.css';


export default function GamePage() {
    const { gameId } = useParams();
    
    // Recherchez les données du jeu à partir de l'ID
    const gameData = [
        { id: '1', component: <JeuPokemon /> },
        { id: '2', component: <TicTacToe /> }, // Remplacez par le composant approprié
        { id: '9', component: <Jeu /> }, // Remplacez par le composant approprié
        { id: '6',component:<HangmanGame /> }, // Remplacez par le composant approprié

    ];

    const game = gameData.find(g => g.id === gameId);

    return (
        <div className='game-page'>
            <div className="sidebar">
                <div className="logo">
                    <img src="/images/logo.png" alt="Logo" className="logo-img" />
                </div>
                <div className="search-box">
                    <input type="text" placeholder='  Search games...' />
                </div>
                <nav>
                    <Link to='/' ><FaHome /> Home</Link>
                    <a href="#"><FaThList /> Categories</a>
                    <a href="#"><FaHeart /> Favorites</a>
                    <a href="#"><FaCog /> Settings</a>
                </nav>
            </div>
           
                {game ? (
                    game.component
                ) : (
                    <p>Jeu non trouvé.</p>
                )}
         
        </div>
    );
}
