import React, { useState, useEffect } from 'react';
import './Home.css';
import { FaHome, FaThList, FaHeart, FaCog, FaSearch } from 'react-icons/fa'; // Importer les icônes
import { Routes, Route, Link } from 'react-router-dom';
import HomeGame from './HomeGame';

export default function App_Game(){
    
    return (
        <div>
            <div className="sidebar">
                {/* Logo de l'application */}
                <div className="logo">
                    <img src="/images/logo.png" alt="Logo" className="logo-img" /> {/* Assurez-vous de mettre le chemin correct */}
                </div>
                <div className="search-box">
                    <input type="text" placeholder='  Search games...' />
                </div>
                <nav>
                    <Link to='/' element={<App_Game />}><FaHome /> Home</Link>
                    <a href="#"><FaThList /> Categories</a>
                    <a href="#"><FaHeart /> Favorites</a>
                    <a href="#"><FaCog /> Settings</a>
                </nav>
            </div>
            <div cla>
                    <Routes>
                        <Route path="/" element={<HomeGame />} />
                    </Routes>
            </div>
        </div>
    );
}
