import React from "react";
import { useDispatch , useSelector } from "react-redux";

export default function Tennis(){

    const score=useSelector((state)=>state)
    
    const dispatch =useDispatch()

    const handlClick=(e,P)=>{
        e.preventDefault() ; 
        dispatch({type:P})
    }
    console.log(score)

    return(
       <>
            <h1>Joue de Tennis</h1>
            <hr></hr>

            
            <button onClick={(e)=>handlClick(e,'P1')}>Player 1 </button>
             <p>les points de Player 1:  {score.s1}</p> 
            <button onClick={(e)=>handlClick(e,'P2')}>Player 2 </button>
            <p>les points de Player 1:  {score.s2}</p>

            <h1 style={{color:'blue'}}>{score.message}</h1>



       
       </>
    )
} 