import React, { useState, useEffect } from 'react';
import './Home.css';
import { Routes, Route, Link } from 'react-router-dom';


export default function HomeGame() {
    const fixedCardSizes = [
        'large', 'large', 'small', 'small', 'large', 'large', 'small','small',
        'large', 'large', 'large', 'large', 'large', 'large', 'large',  'large','large','large'
    ];

    const gameData = [
        { image: '/images/pok.jpeg', title: 'Pokemon Puzzle' },
        { image: '/images/tic.jpeg', title: 'Tic Tae Toe' },
        { image: '/images/car.jpeg', title: 'XCar 2' },
        { image: '/images/pendu.jpeg', title: 'Jeu Pendue' },
        { image: '/images/demon.jpeg', title: 'Demon slayer' },
        { image: '/images/uno.jpeg', title: 'UNO' },
        { image: '/images/garou.jpeg', title: 'Le loup Garou' },
        { image: '/images/pou.jpeg', title: 'Pou' },
        { image: '/images/domino.jpeg', title: 'Jeu de dés' },
        { image: '/images/temple.jpeg', title: 'Temple run 2' },
        { image: '/images/amng.jpeg', title: 'Amoung us' },
        { image: '/images/GTA.jpeg', title: 'GTA' },
        { image: '/images/fire.jpeg', title: 'Free Fire' },
        { image: '/images/roblox.jpeg', title: 'roblox' },
        { image: '/images/mario.jpeg', title: 'Mario' },
        { image: '/images/8bal.jpeg', title: '8 Ball Pool' },
        { image: '/images/call.jpeg', title: 'Call Of Duty' },
        { image: '/images/princesse.jpeg', title: 'Habillage Princesse' },
    ];

    const [cardSizes, setCardSizes] = useState([]);

    useEffect(() => {
        setCardSizes(fixedCardSizes);
    }, []);
    return (
        <div className="main-content">
                 <div className="game-grid">
                    {cardSizes.map((size, index) => (
                        <Link to={`/game/${gameData[index].title}`} key={index}>
                            <div className={`card ${size}`}>
                                <img
                                    src={gameData[index].image}
                                    alt={gameData[index].title}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{gameData[index].title}</h5>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
        </div>
    );
}
