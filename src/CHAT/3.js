import { useState } from "react"

export  {useState} from "react"
export default function Togglebutton(){
    const [text, setText]=useState(true) ; 

    const handlclick=()=>{
        setText(!text)
    }
    return (
        <button onClick={handlclick}>{text?'Activer':'Désactiver'}</button>
    )
}