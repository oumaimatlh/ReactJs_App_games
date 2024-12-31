import React, { useState } from "react";

/*export default function ListeElements() {
  const [elements, setElements] = useState([
    { id: 1, nom: "Element 1" },
    { id: 2, nom: "Element 2" },
    { id: 3, nom: "Element 3" },
  ]);

  const handleAjouterElement = () => {
    // Ajouter plusieurs éléments à la liste
    setElements((n)=>[...n,{ id: 4, nom: "Element 4" }]); 
    setElements((n)=>[...n,{ id: 5, nom: "Element 5" }]); 
    setElements((n)=>[...n,{ id: 6, nom: "Element 6" }]); 


  };

  return (
    <div>
      <ul>
        {elements.map((element) => (
          <li key={element.id}>{element.nom}</li>
        ))}
      </ul>
      <button onClick={handleAjouterElement}>Ajouter des éléments</button>
    </div>
  );
}  */

  

  export default function Form() {
    const [person, setPerson] = useState({
      firstName: 'Barbara',
      lastName: 'Hepworth',
      email: 'bhepworth@sculpture.com'
    });
  
    function handleFirstNameChange(e) {
        setPerson({
            ...person , firstName:e.target.value
        })
    }
  
    function handleLastNameChange(e) {
        setPerson({
            ...person , lastName:e.target.value
        })
    }
  
    function handleEmailChange(e) { setPerson({
        ...person , email:e.target.value
    })
    }
  
    return (
      <>
        <label>
          First name:
          <input
           
            onChange={handleFirstNameChange}
          />
        </label>
        <label>
          Last name:
          <input
      
            onChange={handleLastNameChange}
          />
        </label>
        <label>
          Email:
          <input
     
            onChange={handleEmailChange}
          />
        </label>
        <p>
          {person.firstName}{' '}
          {person.lastName}{' '}
          ({person.email})
        </p>
      </>
    );
  }
  
