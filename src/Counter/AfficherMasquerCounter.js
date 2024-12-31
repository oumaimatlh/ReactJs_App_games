import { useReducer, useState } from "react";
import CounterReducer from "./FunctionReduceComposant";
import Counter from "./ComposantCounter";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function AfficherMasquerCounter(){

    const [state , dispatch]=useReducer(CounterReducer,{Afficher:true }) ; 

    const handlContenu=(e)=>{
        e.preventDefault() ; 
        dispatch(
            {
                type:'Contenu'
            }
        )
    }
  
        return(
            <div>
                <button  className="btn btn-warning m-2 " onClick={(e)=>handlContenu(e)}>{state.Afficher ? 'Masquer le contenu' : 'Afficher le contenu'}</button>
            
                {
                    state.Afficher &&   <Counter/> 
                  
                }
               
            </div>
        )

}