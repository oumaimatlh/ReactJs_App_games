import { useState } from "react";

export default function Login(){
    const  [utilisateur , setUtilisateur]=useState('');
    const  [motdepasse , setMotdepasse]=useState('');
    const  [message , setMessage]=useState({succes:false , error:false});
    const user_pass=[
        {user:'Oumatlh4@gmail.com' , mot_p:'isoiso'} ,
        {user:'Iness(@gmail.com' , mot_p:'popopo'} ,
        {user:'rawya@gmail.com' , mot_p:'kikokiko'} ,

]

const Verifier=(e)=>{
        e.preventDefault()
        const Verifier=user_pass.find((item)=>
            (utilisateur === item.user && motdepasse === item.mot_p)) 
        if(Verifier){
            setMessage({succes:true ,error:false})
        }
        else{
            setMessage({succes:false ,error:true})

        }
    
}


    return (
        <><form onSubmit={(e)=>Verifier(e)}>
            <label>Username : </label>
            <input type="text" name="user" onChange={(e)=>setUtilisateur(e.target.value)}></input>

            <label>Pass-word : </label>
            <input type="text" name="pass" onChange={(e)=>setMotdepasse(e.target.value)} ></input>

            <input type="submit" value='Login'></input>


        </form>
            {message.succes && <p style={{color:'green'}}>Welcome</p>}
            {message.error && <p style={{color:'red'}}>ERROR</p>}

        </>
    )
}