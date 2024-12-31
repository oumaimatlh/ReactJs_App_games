import React, { useRef, useState } from 'react';
import './TicTacToe.css';
import x from '../Assets/x3.jpg';
import o from '../Assets/o3.jpg';
import musicFile from '../Assets/ff.mp4'; // Assurez-vous que le fichier audio est correct

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
    let [Count, setCount] = useState(0);
    let [Lock, setLock] = useState(0);
    let [isMusicPlaying, setIsMusicPlaying] = useState(false); // Ajoutez un état pour suivre si la musique est en cours
    let titleref = useRef(null);
    const audioRef = useRef(new Audio(musicFile)); // Référence pour la musique

    const toggle = (e, num) => {
        if (Lock) {
            return 0;
        }
        if (Count % 2 === 0) {
            e.target.innerHTML = `<img src='${x}'>`;
            data[num] = "x";
            setCount(++Count);
        } else {
            e.target.innerHTML = `<img src='${o}'>`;
            data[num] = "o";
            setCount(++Count);
        }
        checkWin();
    };

    const checkWin = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[0] !== "") {
            won(data[0]);
        } else if (data[3] === data[4] && data[4] === data[5] && data[3] !== "") {
            won(data[3]);
        } else if (data[6] === data[7] && data[7] === data[8] && data[6] !== "") {
            won(data[6]);
        } else if (data[0] === data[3] && data[3] === data[6] && data[0] !== "") {
            won(data[0]);
        } else if (data[1] === data[4] && data[4] === data[7] && data[1] !== "") {
            won(data[1]);
        } else if (data[2] === data[5] && data[5] === data[8] && data[2] !== "") {
            won(data[2]);
        } else if (data[0] === data[4] && data[4] === data[8] && data[0] !== "") {
            won(data[0]);
        } else if (data[2] === data[4] && data[4] === data[6] && data[2] !== "") {
            won(data[2]);
        }

        if (!data.includes("") && Lock === 0) {
            titleref.current.innerHTML = "Match Nul !";
            setTimeout(() => {
                reset();
            }, 2000);
        }
    };

    const won = (winner) => {
        setLock(true);
        if (winner === "x") {
            titleref.current.innerHTML = `Félicitations: X a gagné!`;
        } else {
            titleref.current.innerHTML = `Félicitations: O a gagné!`;
        }
        setTimeout(() => {
            reset();
        }, 2000);
    };

    const reset = () => {
        setLock(false);
        setCount(0);
        data = ["", "", "", "", "", "", "", "", ""];
        const boxes = document.querySelectorAll('.boxes');
        boxes.forEach(box => {
            box.innerHTML = "";
        });
        titleref.current.innerHTML = 'Tic Tac Toe';
    };

    const playMusic = () => {
        if (audioRef.current) {
            audioRef.current.play(); // Joue la musique
            setIsMusicPlaying(true); // Met à jour l'état de la musique pour "en cours"
        }
    };

    const stopMusic = () => {
        if (audioRef.current) {
            audioRef.current.pause(); // Arrête la musique
            audioRef.current.currentTime = 0; // Remet à zéro la musique
            setIsMusicPlaying(false); // Met à jour l'état de la musique pour "arrêtée"
        }
    };

    // Fonction de gestion du bouton (alterne entre lecture et arrêt de la musique)
    const toggleMusic = () => {
        if (isMusicPlaying) {
            stopMusic(); // Si la musique est en cours, l'arrêter
        } else {
            playMusic(); // Si la musique est arrêtée, la jouer
        }
    };

    return (
        <div className='tic-container'>
            <h1 className='title' ref={titleref}>Tic Tac Toe </h1>
            <div className='board'>
                <div className='row1'>
                    <div className='boxes' onClick={(e) => { toggle(e, 0) }}></div>
                    <div className='boxes' onClick={(e) => { toggle(e, 1) }}></div>
                    <div className='boxes' onClick={(e) => { toggle(e, 2) }}></div>
                </div>

                <div className='row2'>
                    <div className='boxes' onClick={(e) => { toggle(e, 3) }}></div>
                    <div className='boxes' onClick={(e) => { toggle(e, 4) }}></div>
                    <div className='boxes' onClick={(e) => { toggle(e, 5) }}></div>
                </div>

                <div className='row3'>
                    <div className='boxes' onClick={(e) => { toggle(e, 6) }}></div>
                    <div className='boxes' onClick={(e) => { toggle(e, 7) }}></div>
                    <div className='boxes' onClick={(e) => { toggle(e, 8) }}></div>
                </div>
            </div>
            <button className='reset' onClick={() => { reset() }}>RESET</button>
            <button className='music' onClick={toggleMusic}>
                {isMusicPlaying ? "STOP MUSIC" : "PLAY MUSIC"}
            </button>
        </div>
    );
};

export default TicTacToe;
