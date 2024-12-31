import React,{useState} from "react" ; 
export default function Stagiaire (){

    const groupes= ['groupe1' ,'groupe2' ,'groupe3' ,'groupe4' ,'groupe5' ]
    const modules= ['module1' ,'module2' ,'module3' ,'module4' ,'module5' ]
    
    const [nom , setnom]=useState('') ; 
    const [prenom , setprenom]=useState('') ; 
    const [groupe , setgroupe]=useState('') ; 
    const [module , setmodule]=useState('') ; 
    const [note , setnote]=useState(0) ; 
    const [Moyenne, setMoyenne]=useState(0)
  


    const [AfficherInfos , setAfficherInfos]=useState(false) ; 
    const [AffMoyenne, setAffMoyenne]=useState(false)
    

    const [stagiaire , setstagiaire ]=useState({
        Nom : '' , Prenom:'' , Groupe:'' , Module:[] , Note:[] , moyenne:0
    })


    const hanlAjouter=(e)=>{
        e.preventDefault() ; 
        setstagiaire(prevStagiaire =>(
            
                {
                    Nom : nom , Prenom: prenom , Groupe:groupe , Module:[...prevStagiaire.Module , module] ,Note:[...prevStagiaire.Note ,parseInt(note)] ,
                })
            
        )

        setMoyenne(M=>M+parseInt(note))
        




        setAfficherInfos(true)
        setAffMoyenne(true)
       console.log(Moyenne)

    }


    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Nom </td>
                        <td>
                            <input type="text " onChange={(e)=>setnom(e.target.value)} />
                        </td>
                    </tr>

                    <tr>
                        <td>Prénom </td>
                        <td>
                            <input type="text " onChange={(e)=>setprenom(e.target.value)}/>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>Groupe</td>
                        <td>
                            <select onChange={(e)=>setgroupe(e.target.value)}>
                                <option>Choisir un groupe</option>
                                {
                                    groupes.map(
                                        (item , index)=>(
                                            <option key={index} value={item} name='grp'>{item}</option>
                                        )
                                    )
                                }
                            </select>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>Module</td>
                        <td>
                            <select onChange={(e)=>setmodule(e.target.value)}>
                                <option>Choisir un module</option>
                                {
                                    modules.map(
                                        (item , index)=>(
                                            <option key={index} value={item} name='mdl'>{item}</option>
                                        )
                                    )
                                }

                            </select>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>Note</td>
                        <td>
                            <input type="number"onChange={(e)=>setnote(e.target.value)} />
                        </td>
                    </tr>
                    
                    <tr>
                        <td colSpan={2}><button onClick={(e)=>hanlAjouter(e)}>Ajouter</button> </td>
                    </tr>
                </tbody>
            </table>

            {
                AfficherInfos && AffMoyenne && (
                    <>
                        <p>Nom    : {stagiaire.Nom}</p>
                        <p>Prénom : {stagiaire.Prenom}</p>
                        <p>Groupe : {stagiaire.Groupe} </p>
                       
                        <h2>Les notes : </h2>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Modules</th>
                                    <th>Notes</th>
                                </tr>
                              
                                        {
                                            stagiaire.Module.map((item ,index)=>
                                                (
                                                    <tr key={index}>
                                                        <td >{item}</td>
                                                        <td>{stagiaire.Note[index]}</td>
                                                    </tr>
                                                )
                                            )
                                        }
                           
                            </tbody>
                        </table>
                    
                        <p>Moyenne : {Moyenne / stagiaire.Note.length}</p>
                    </>
                )
            }
        </div>
    )
}