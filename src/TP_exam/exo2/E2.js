import {useState} from 'react' ; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styled from 'styled-components';
import ListeMateriel from './E22';

export default function Materiel(){

    const marques= ['HP', 'PH', 'Sonic', 'Acer', 'Lenovo'];
    const Categories=['Catégorie 1', 'Catégorie 2', 'Catégorie 3'] ; 

    const [CodeMateriel, setCodeMateriel] = useState('');
    const [Marque, setMarque] = useState('');
    const [Date, setDate] = useState('');
    const [Categorie , setCategorie] = useState('')

   
   

    const [infoM,setInfoM ] = useState([{code:'' , m:'' , date:'' , catego : ''}])

    const  [Afficher, setAfficher]=useState(false) ; 
    const  [message, setMessage]=useState(false) ;

   

    const handleSubmit=(e)=>{
        e.preventDefault() ; 
        if( !(CodeMateriel) || !(Marque) || !(Date) || !(Categorie)) {
            setMessage(true)

            
        }
        else {
            setInfoM([{
                code:CodeMateriel ,
                m:Marque, 
                date:Date, 
                catego :Categorie
            }])
            setAfficher(true)
            setMessage(false)
        }
    }
    
    return(
        <div style={{width:"90%" , margin : "20px"}}>
            <h1>Gestion Matériel : </h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className='"mb-3 row"'>
                    <label className='"col-sm-2 col-form-label'>Code Matériel:  (*)</label>
                    <input className='form-control w-25' type='text'  onChange={(e)=>setCodeMateriel(e.target.value)}/>
                </div>
                    

                <div className='"mb-3 row"'>
                    <label className='"col-sm-2 col-form-label'>Marque: (*) </label>
                    <select className='form-control w-25' onChange={(e)=>setMarque(e.target.value)}>
                            <option value="">Choisir une Marque</option>
                                {
                                    marques.map((i,index)=>(
                                     
                                            <option value={i} key={index} name='marq'>{i}</option>
                                        
                                    ))
                                }
                    </select>
                </div>
                    

                <div className='"mb-3 row"'>
                    <label className='"col-sm-2 col-form-label'>Date ajout utilisation: (*) </label>
                    <input className='form-control w-25' type='date' onChange={(e)=>setDate(e.target.value)} />
                </div>
                    

                <div className='"mb-3 row"'>
                    <label className='"col-sm-2 col-form-label'>Catégories: (*) </label>
                    <select className='form-control w-25' onChange={(e)=>setCategorie(e.target.value)}>
                                <option value="">Choisir un Module</option>
                                {
                                    Categories.map((i,index)=>(
                                        
                                            <option key={index} value={i} name='categories'>{i}</option>
                                      
                                    ))
                                }
                    </select>
                </div>

                    <br>
                    </br>

                {
                    message && <p style={{color:'red'}}>Remplir  tous les champs '*'</p>
                }
                <input type='submit'  value={"Confirmer"} className='btn btn-danger'/>
            </form>
            {Afficher && <ListeMateriel liste ={infoM}/>}
        
        
        </div>
    )
}