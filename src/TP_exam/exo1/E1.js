import {useState} from 'react' ; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Bienvenue(){

    const [nom , setNom] = useState('')
    const [prenom , setPrenom] = useState('')

    const  [message , setMessage]=useState(false)

    

    const handleSubmit=(e)=>{
        e.preventDefault() ; 
        if( !(nom)|| !(prenom)) {
            setMessage(true)
            
        }
        else {
            alert(`Bienvenue ${nom} ${prenom} .Merci pour votre Inscription 🥹 !`)
        }


    }
    return(
        <div>
            <form onSubmit={(e)=>handleSubmit(e)} >

            
                <div className='"mb-3 row"'>
                    <label className='"col-sm-2 col-form-label'>CIN: </label>
                    <input className='form-control w-25' type='text' />
                </div>
                    

                <div className='"mb-3 row"'>
                    <label className='"col-sm-2 col-form-label'>Nom: </label>
                    <input className='form-control w-25' type='text' onChange={(e)=>setNom(e.target.value)}/>
                </div>
                    

                <div className='"mb-3 row"'>
                    <label className='"col-sm-2 col-form-label'>Prénom: </label>
                    <input className='form-control w-25' type='text'  onChange={(e)=>setPrenom(e.target.value)}/>
                </div>
                    

                <div className='"mb-3 row"'>
                    <label className='"col-sm-2 col-form-label'>Date de naissance : </label>
                    <input className='form-control w-25' type='date'  />
                </div>

                    <br>
                    </br>

                {
                    message && <p style={{color:'red'}}>Remplir les champs 'nom , prenom'</p>
                }
                <input type='submit'  value={"Envoyer"} className='btn btn-danger'/>
            </form>
        </div>
    )
}