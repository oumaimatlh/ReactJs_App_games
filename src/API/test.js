
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

export default function Api1(){
    const [utilisateur , setUtilisateur]=useState([]) ; 
    const [posts , setPosts]=useState([]) ; 
    const [filtposts , setFiltposts]=useState([])
    const [ADetails , setADetails]= useState(0)


    useEffect(
        ()=>{
              axios('https://jsonplaceholder.typicode.com/users')
             
              .then((users)=>{setUtilisateur(users.data) })

              axios('https://jsonplaceholder.typicode.com/posts')
             
              .then((p)=>{setPosts(p.data) })

        }
    ,[])

    
    

    const AfficherDetails=(i)=>{
        setADetails(i)
        setFiltposts(posts.filter((p)=>p.userId === i)) ; 
  

    }
    return (
        <div>
            {utilisateur.map((item)=>(
                <div key={item.id}>
                    <p style={{display:'inline'}}>  {item.name}</p>
                    <button onClick={()=>AfficherDetails(item.id)}>Afficher details</button>
                    <br></br>
                    {ADetails ===item.id && 
                        <ul>
                            {
                                filtposts.map(
                                    (a)=> (
                                         <li key={a.id}>
                                            {a.id} =  {a.title}
                                         </li>
                                    ))
                                
                            }
                        
                        
                        </ul>
                         
                        
                        }; 
                </div>
            ))}
            
                       
        </div>
    )
}

