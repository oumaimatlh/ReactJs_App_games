import { useState } from 'react';

export default function  C() {
  const [num, setNum] = useState('');
  const [titre, setTitre] = useState('');
  const [date, setDate] = useState('');
  const [genre, setGenre] = useState('');
  const [prix, setPrix] = useState('');

  const Genres = ['Comédie', 'Romantique', 'Horror', 'Imagination'];

  const [Livres, setLivres] = useState([{ N: 1, T: 'Twilight', D: '2012-09-03', G: 'Imagination', P: 199 }]);

  const AjouterLivre = (e) => {
    e.preventDefault()
    if (!(num && titre && date && genre && prix)) {
      return alert('Tous les champs doivent être renseignés');
      
    }
    if (parseInt(prix) > 200) {
      return alert('Le prix du livre ne doit pas dépasser 200 dh');
      
    }

    setLivres([...Livres, { N: parseInt(num), T: titre, D: date, G: genre, P: parseFloat(prix) }]);

  };

  const Reset = () => {
   
    setNum('');
    setTitre('');
    setDate('');
    setGenre('');
    setPrix('');

};

  return (
    <div>
      <h1 style={{ fontFamily: 'monospace', fontWeight: 'unset', marginLeft: '30%', marginBottom: '30px' }}>
        Ajouter un Livre :
      </h1>

      <form>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Numéro: (*)</label>
          <input className="form-control w-25" type="number" onChange={(e) => setNum(e.target.value)} />
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Titre: (*)</label>
          <input className="form-control w-25" type="text" onChange={(e) => setTitre(e.target.value)} />
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Date d'édition: (*)</label>
          <input className="form-control w-25" type="date" onChange={(e) => setDate(e.target.value)} />
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Genre Littéraire: (*)</label>
          <select className="form-control w-25" onChange={(e) => setGenre(e.target.value)}>
            <option value="">Choisir un Genre </option>
            {Genres.map((genre, index) => (
              <option value={genre} key={index}>{genre}</option>
            ))}
          </select>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Prix: (*)</label>
          <input className="form-control w-25" type="number" onChange={(e) => setPrix(e.target.value)} />
        </div>

        <button onClick={AjouterLivre} className="btn btn-danger">Confirmer</button> 
        <button className="btn btn-info" onClick={Reset}>Réinitialiser</button>
      </form>

      <h2>Listes des Livres :</h2>
      <ul>
        {Livres.map((item) => (
          <li key={item.N}>
            Num = {item.N} | Titre = {item.T} | Genre = {item.G} | Date d'édition = {item.D} | Prix = {item.P} Dh
          </li>
        ))}
      </ul>
    </div>
  );
}
