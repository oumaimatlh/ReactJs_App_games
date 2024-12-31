import { useState } from "react"

export default function Nom(){
        const [name,setName]=useState('') ; 
        const [afficher,setAfficher]=useState('')
        
        const handlSubmit=(e)=>{
            e.preventDefault() ; 
            if(name=="Oumaima Talhaoui "){
                setAfficher(name.toUpperCase()) 
            }
            else{
                setAfficher('Votre mot de passe incorrecte')
            }
        }

        return(
                <>
                    <form onSubmit={handlSubmit}>
                        <label>Tapez votre nom :</label>
                        <input onChange={(e)=>setName(e.target.value)}></input>
                        <button type="submit">Afficher votre nom </button>
                    </form>
                    {afficher && <p style={{color:'green'}}>Bienvenue , {afficher}</p>}
                </>                
     

        )
}