import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { FaHome, FaThList, FaHeart, FaCog, FaSearch } from 'react-icons/fa'; // Importer les icônes

export default function Home() {
    const fixedCardSizes = [
        'large', 'large', 'small', 'small', 'large', 'large', 'small','small',
        'large', 'large', 'large', 'large', 'large', 'large', 'large',  'large','large','large'
    ];

    const gameData = [
        { image: '/images/pok.jpeg', title: 'Pokemon Puzzle', id: '1' },
        { image: '/images/tic.jpeg', title: 'Tic Tae Toe', id: '2' },
        { image: '/images/car.jpeg', title: 'XCar 2', id: '3' },
        { image: '/images/uno.jpeg', title: 'UNO', id: '6' },
        { image: '/images/demon.jpeg', title: 'Demon slayer', id: '5' },
        { image: '/images/pendu.jpeg', title: 'Hang Man', id: '6' },
        { image: '/images/mario.jpeg', title: 'Mario', id: '7' },
        { image: '/images/dunk.jpeg', title: 'Perfect Dunk', id: '8' },
        { image: '/images/domino.jpeg', title: 'Jeu de dés', id: '9' },
        { image: '/images/temple.jpeg', title: 'Temple run 2', id: '10' },
        { image: '/images/amng.jpeg', title: 'Amoung us', id: '11' },
        { image: '/images/GTA.jpeg', title: 'GTA', id: '12' },
        { image: '/images/oo.gif', title: 'Pac man hunt', id: '13' },

        { image: '/images/roblox.jpeg', title: 'roblox', id: '14' },
        { image: '/images/fire.jpeg', title: 'Free Fire', id: '15' },

        { image: '/images/8bal.jpeg', title: '8 Ball Pool', id: '16' },
        { image: '/images/call.jpeg', title: 'Call Of Duty', id: '17' },
        { image: '/images/princesse.jpeg', title: 'Habillage Princesse', id: '18' },
    ];

    const [cardSizes, setCardSizes] = useState([]);

    useEffect(() => {
        setCardSizes(fixedCardSizes);
    }, []);

    return (
        <div>
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
            <div className="main-content">
                <div className="game-grid" > 
                    {cardSizes.map((size, index) => (
                        <Link to={`/game/${gameData[index].id}`} key={index} className={`card ${size}`}>
                        <img
                                src={gameData[index].image}
                                alt={gameData[index].title}
                            />
                            <div className="card-body">
                                <h5 className="card-title" style={{color:'white' , fontSize:'40px'}}>{gameData[index].title}</h5>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
