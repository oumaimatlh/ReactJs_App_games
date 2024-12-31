import { useReducer, useState } from "react";
import CounterReducer from "./FunctionReduceComposant";

export default function Counter(){

    const [state , dispatch]=useReducer(CounterReducer ,{counter:0}) ; 
    const [inputNumber , setinputNumber]=useState(0) ; 


    const handlAjouter=(e)=>{
        e.preventDefault() ; 
        dispatch(
            {
                type : 'Ajouter' ,
                number : parseInt(inputNumber)
            }
        )
    }

    const handlSoustraire=(e)=>{
        e.preventDefault() ; 
        dispatch(
            {
                type : 'Soustraire' , 
                number : parseInt(inputNumber)
            }
        )
    }

    const handlReinitialisation=(e)=>{
        e.preventDefault() ; 
        dispatch(
            {
                type : 'Reinitialisation' , 
                number : parseInt(inputNumber)
            }
        )
    }


    return (
        <div>
            <input type="Number" onChange={(e)=>{setinputNumber(e.target.value)}} placeholder="Entrez un nombre "></input>
            <p className="ms-5 mt-3 rounded border border-2 border-info p-3" style={{width:'100px' , textAlign:'center'}}>{state.counter}</p>


            <button   className="btn btn-danger m-2" onClick={(e)=>{handlAjouter(e)}}>Ajouter </button>
            <button  className="btn btn-danger m-2 " onClick={(e)=>{handlSoustraire(e)}}>Soustraire</button>
            <button  className="btn btn-danger  m-2" onClick={(e)=>{handlReinitialisation(e)}}>Reinitialisation </button>

        </div>
    )

}