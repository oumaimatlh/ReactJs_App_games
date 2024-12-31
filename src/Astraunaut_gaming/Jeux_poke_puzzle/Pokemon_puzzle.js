import React, { useState, useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Style.css';

import initialImage from './Pokemon Pikachu Dragon Anime Japan Cartoon Art Creative Design Gift Funny Cute Charmander Bulbasaur.jpeg';
import initialPokemons from "./Data"; // Data contenant JSON API pour les images des Pokémon
import backgroundMusic from './videoplayback.mp4'; // Chemin vers le fichier audio

export default function JeuPokemon() {
    const [images, setImages] = useState(Array(12).fill(initialImage));
    const [score, setScore] = useState(0);
    const [gameFinished, setGameFinished] = useState(false);
    const [emojiVisible, setEmojiVisible] = useState([]);
    const [audioPlaying, setAudioPlaying] = useState(false); // État pour suivre si l'audio joue
    const totalPairs = 6;
    const audioRef = useRef(null); // Référence pour l'élément audio

    // Génération des images aléatoires (inchangé)
    const generateRandomImages = () => {
        const randomImages = [];
        while (randomImages.length < 6) {
            const randomIndex = Math.floor(Math.random() * initialPokemons.length);
            const randomImage = initialPokemons[randomIndex];
            if (!randomImages.includes(randomImage)) {
                randomImages.push(randomImage);
            }
        }
        const duplicatedImages = [...randomImages, ...randomImages];
        for (let i = duplicatedImages.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [duplicatedImages[i], duplicatedImages[j]] = [duplicatedImages[j], duplicatedImages[i]];
        }
        return duplicatedImages;
    };

    const [randomImages, setRandomImages] = useState(generateRandomImages());
    const [selectedIndices, setSelectedIndices] = useState([]);
    const [temporaryImages, setTemporaryImages] = useState([]);

    // Gestion de la musique
    useEffect(() => {
        if (audioPlaying && audioRef.current) {
            audioRef.current.play();
        }
    }, [audioPlaying]);

    const toggleAudio = () => {
        if (audioRef.current) {
            if (audioPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setAudioPlaying(!audioPlaying);
        }
    };

    const handlChanger = (index) => {
        if (selectedIndices.length === 1) {
            const firstIndex = selectedIndices[0];
            const secondImage = randomImages[index];
            const firstImage = randomImages[firstIndex];

            if (firstImage === secondImage) {
                setScore(score + 1);
                const updatedImages = [...images];
                updatedImages[firstIndex] = firstImage;
                updatedImages[index] = secondImage;
                setImages(updatedImages);

                setSelectedIndices([]);
                setTemporaryImages([]);

                if (score + 1 === totalPairs) {
                    setGameFinished(true);
                    triggerSuccessEvent();
                    setTimeout(()=>{HandlReset()},3000) ;
                }
            } else {
                setTemporaryImages([firstImage, secondImage]);
                setTimeout(() => {
                    const resetImages = [...images];
                    resetImages[firstIndex] = initialImage;
                    resetImages[index] = initialImage;
                    setImages(resetImages);
                    setSelectedIndices([]);
                    setTemporaryImages([]);
                }, 1000);
            }
        } else {
            setSelectedIndices([index]);
        }

        const updatedImages = [...images];
        updatedImages[index] = randomImages[index].image;
        setImages(updatedImages);
    };

    const HandlReset = () => {
        setImages(Array(12).fill(initialImage));
        setScore(0);
        setSelectedIndices([]);
        setTemporaryImages([]);
        setGameFinished(false);
        setEmojiVisible([]);
        setRandomImages(generateRandomImages());
    };

    const triggerSuccessEvent = () => {
        const emojis = ["🎉", "🎊", "💥", "✨", "🏆", "💣", "🎉", "🎊", "💥", "✨", "🏆", "💣"];
        const emojiList = [];
        for (let i = 0; i < emojis.length; i++) {
            const position = {
                top: `${Math.random() * 50 + 20}%`,
                left: `${Math.random() * 80 + 10}%`,
            };
            emojiList.push(
                <div
                    key={i}
                    className="falling-emoji"
                    style={{ top: position.top, left: position.left, animationDelay: `${i * 0.2}s` }}
                >
                    {emojis[i]}
                </div>
            );
        }
        setEmojiVisible(emojiList);
        setTimeout(() => {
            setEmojiVisible([]);
        }, 4000);
    };

    const progressBarWidth = (score / totalPairs) * 100;

    const getProgressBarColor = (score) => {
        if (score === totalPairs) {
            return "#4caf50";
        }
        const percentage = (score / totalPairs) * 100;
        if (percentage <= 33) {
            return "#ff0000";
        } else if (percentage <= 66) {
            return "#ffa500";
        } else {
            return "#4caf50";
        }
    };

    return (
            <div className="container">
                <audio ref={audioRef} src={backgroundMusic} loop />
                <h1 className="title">🧩 Jeu De Pokemon Puzzle 🧩  </h1>

                <div id="SCORE" className="score-container">
                    <h2>Score: {score}/{totalPairs}</h2>
                    <div className="progress-bar-background">
                        <div
                            className="progress-bar"
                            style={{
                                width: `${progressBarWidth}%`,
                                backgroundColor: getProgressBarColor(score),
                            }}
                        ></div>
                    </div>
                </div>

                <div className="box">
                    {images.map((img, index) => (
                        <button
                            key={index}
                            onClick={() => handlChanger(index)}
                            disabled={temporaryImages.includes(img)}
                            className="carreau"
                        >
                            <img src={img} alt={`Pokemon ${index}`} />
                        </button>
                    ))}
                </div>

                {emojiVisible && <>{emojiVisible}</>}

                <button className="reset-button" onClick={HandlReset}>Reset</button>
                <button className="reset-button" onClick={toggleAudio}>
                    {audioPlaying ? "Pause Music" : "Play Music"}
                </button>

                {gameFinished && (
                    <div className="game-finished-message">
                        <h2>Félicitations, vous avez terminé le jeu 🧩🧩🧩 !</h2>
                    </div>
                )}
            
        </div>
    );
}
