import React , {useState} from 'react' ; 

export default function Person(){

    // les expression reguliere : 
    
    const expNom=/[A-Za-z/s]{4,}/ ; 
    const expEmail= /^[A-Za-z0-9_%\-]+\@[A-Za-z]{4,}\.[a-z]{3}$/ ; 
    const expPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const exptele = /^0[1-9][0-9]{8}/
    const Pays=['Maroc' , 'France' , 'Belgique']
    const Interets=['I1' , 'I2' , 'I3']
    const Niveaus=['B1' , 'B2' , 'B3']

    const [Nom , setNom]=useState('')
    const [Email , setEmail]=useState('')
    const [Password , setPassword]=useState('')
    const [Confpass , setConfpass]=useState('')
    const [Tele , setTele]=useState('')
    const [Py , setPy]=useState('')
    const [Niveau , setNiveau]=useState('')


    const [listeche , setListeche]= useState([])



    const handlecheck=(e)=>{
      

        if(!(listeche.includes(e.target.value))){
            setListeche([...listeche , e.target.value ])       
        }
        else{
            setListeche(listeche.filter((r)=>r !== e.target.value))       

        }


    }
  

        const hanlSubmit=(e)=>{
            e.preventDefault(); 
           
           
            if(!(expNom.test(Nom)) || !(expEmail.test(Email)) ||!(expPass.test(Password)) 
                ||!(exptele.test(Tele)) || Password!==Confpass || !(Py) || !(Niveau) || listeche.length ===0 ){
            
                    return alert('il faut saisir tous les champs')
                }
            else{
                return alert('valider')

            }
  
        }


    return (
        <><form onSubmit={(e)=>hanlSubmit(e)} >
            <lable>Nom :</lable><input type='text' onChange={(e)=>setNom(e.target.value)} /> <br></br>

            <lable>Email :</lable><input type='text' onChange={(e)=>setEmail(e.target.value)}/> <br></br>

            <lable>Mot de passe :</lable><input type='password' onChange={(e)=>setPassword(e.target.value)}/> <br></br>

            <lable>Confirmation Mot de passe :</lable><input type='password' onChange={(e)=>setConfpass(e.target.value)}/> <br></br>

            <lable>Téléphone :</lable><input type='text' onChange={(e)=>setTele(e.target.value)}/> <br></br>

            <lable>Pays de résidence :</lable>
            <select onChange={(e)=>setPy(e.target.value)} >
                <option>Choisir un Pays</option>
                {
                    Pays.map((pays)=>(
                        <option value={pays} name='p'>{pays}</option>
                    )) 
                }
            </select><br></br>

            <label>Intérets : </label>
            {
                Interets.map((item, index)=>(
                    <div key={index}>
                        <input type='checkbox' onChange={(e)=>handlecheck(e)} value={item} name='check'/><label>{item}</label>

                    </div>
                ))
            }
            <label>Niveau d'étude : </label>
            {
                Niveaus.map((item, index)=>(
                    <div key={index}>
                        <input type='radio' onChange={(e)=>setNiveau(e.target.value)} name='rd' value={item}/><label>{item}</label>

                    </div>
                ))
            }

            <input type='submit' />


        </form>
        
        
   
        
        </>
    )
}