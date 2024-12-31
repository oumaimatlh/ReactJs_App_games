import { useState } from 'react';

import styled from 'styled-components';

//Ajouter un style par Module : 
 import './style.css' ;

export default function AjoutArticle() {
  // Ces trois useStates permettent d'obtenir les propriétés d'article à partir des champs 
  const [ID, setID] = useState('');
  const [DES, setDES] = useState('');
  const [Prix, setPrix] = useState('');

  const [Articles, setArticles] = useState([{ id: 1, designation: "Clavier", prix: 45 }]);

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Vérifier si l'ID existe déjà dans la liste des articles
    const existingArticle = Articles.find((article) =>article.id === parseInt(ID) || article.designation === DES);

    if (!existingArticle) {
      // Stocker les articles dans une liste 
      setArticles([...Articles, { id: parseInt(ID), designation: DES, prix: parseFloat(Prix) }]);
      setMessage(false); // Réinitialiser le message d'erreur

      // Réinitialiser les champs du formulaire
      setID('');
      setDES('');
      setPrix('');
    } else {
      setMessage(true);
      setID('');
      setDES('');
      setPrix('');
    }
  };

    // Ajouter un style : Composant Stylisée : 
        const Div = styled.div`
            background-color: rgb(255, 103, 128) ;
            width: 50% ;
            margin:auto ; 
            padding:10px ;

        `

  return (
    <Div>
        {/* Ajouter un style : style*/}
      <h1
            style={
                {
                    fontFamily:'monospace' , fontWeight : 'unset' , marginLeft:'30%' , marginBottom:'30px'
                }
            }     
      >Ajout d'un Article : </h1>

      <form onSubmit={handleSubmit}>
        {/* Formulaire pour Ajouter un Article dans la liste des articles  :  */}
        <label>Id : </label>
        <input  type='number' value={ID} onChange={(e) => setID(e.target.value)} /> <br></br>

        <label>Désignation : </label>
        <input type='text' value={DES} onChange={(e) => setDES(e.target.value)} /><br></br>

        <label>Prix : </label>
        <input type='number' value={Prix} onChange={(e) => setPrix(e.target.value)} /><br></br>

        <input type='submit' value={"Ajouter"} />
        <br />
        {message && <p style={{ color: 'white' }}>'Cet Article existe déjà dans la liste des Articles'</p>}
      </form>

      <h2>Listes Articles : </h2>
      <ul>
        {
          // Afficher les articles dans une liste désordonnée : 
          Articles.map((item) => (
            <li key={item.id}>{item.id} | {item.designation} | {item.prix} Dh</li>
          ))
        }
      </ul>
    </Div>
  );
}