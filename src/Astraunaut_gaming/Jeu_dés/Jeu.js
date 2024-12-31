import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialiser, change } from './jeuSlice';
import i from './R';
import './cssjeu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Jeu = () => {
  const dispatch = useDispatch();
  const { face, nombre_essaie, image, action, bravo } = useSelector((state) => state.jeu);

  return (
    <div className='des-container'>
      <img src={i.img} alt="Dice" />
      <h1>Jeu de Dé 🎲 </h1>
      <p>Face : {face}</p>
      <img src={image} className="mesure" alt="Dice face" />
      <p>Nombre d'essaie: {nombre_essaie}</p>
      <p id='color'>{bravo}</p>
      <button
        className='btn btn-danger w-25'
        onClick={action === 'Initialiser' ? () => dispatch(initialiser()) : () => dispatch(change())}
      >
        {action}
      </button>
    </div>
  );
};

export default Jeu;
