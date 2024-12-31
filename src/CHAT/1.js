import { useState } from "react"

export default function Todolist(){
const [taches,setTaches]=useState([])
const [nvtache,setNvtache]=useState('')
const [suptache,setSuptache]=useState('')

function ajout(e) {
    e.preventDefault(); 
    if (nvtache) {
      setTaches([...taches, nvtache]); 
      setNvtache(""); 
    }
}

function supp(e) {
    e.preventDefault();
    if (suptache) {
        const tt=taches.filter((item) => item !== suptache);
        setTaches(tt); 
    }

    setSuptache("");
}

    return(
        <>
        <h3>les taches</h3>
        <ul> {taches.map((tache,index)=>(
            <li key={index}>{tache}</li>
        ))}</ul>
        <form onSubmit={ajout}>
            <input type="text"  value={nvtache} onChange={(e)=>setNvtache(e.target.value)}/>
            <input type="submit"  value="Ajouter"/>
           
            
        </form>
        <form onSubmit={supp}>
        <input type="text"  value={suptache} onChange={(e)=>setSuptache(e.target.value)}/>
        <input type="submit" value="supprimer"/>
        </form>
        </>
    )
}