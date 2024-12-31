import axios from 'axios' ; 
import React,{useState,useEffect} from 'react' ; 

export default function Countries(){
    const [users , setusers]=useState([])
    const [nom , setnom]=useState('') ; 
    const [message , setmessage]=useState(false)
    const [liste , setliste]=useState({})
    const [Afficher, setAfficher]=useState(false)


    useEffect(
        ()=>{
            axios(  )
            .then((res)=>setusers(res.data))
        }
    )
   
    const hancherhcer=(e)=>{
        e.preventDefault() ; 
      
    
        if(!(users.find((i)=>i.country === nom))){
            setmessage(
                true
                                
            )
        }
        else{
            
            setliste(users.find((i)=>i.country === nom))
            setmessage(
              false
                
            )
            setAfficher(true)
        }

    }


    return(
        <div>
            <h1>donner par pays </h1>
            <form>
                <input type='text' onChange={(e)=>setnom(e.target.value)}/>
                <button onClick={(e)=>hancherhcer(e)}>chercher</button>
            </form>


            {message && <p>error</p>}
            {Afficher && 
                        <div>
                            <p>{liste.country}</p>
                            <p>{liste.cases}</p>

                        </div>            }
          

                <table>
                    <tbody>
                        <tr>
                            <th>
                                Pays
                            </th>
                            <th> Cas</th>
                        </tr>
                        {
                            users.map((item,index)=>(
                                <tr key={index}>
                                    <td>{item.country}</td>
                                    <td>{item.cases}</td>
                                </tr>
                            ))

                        }
                    </tbody>
                </table>
            </div>
    )
}