import { useState } from "react"; 
import styled from "styled-components";
import Composant2 from "./Composant2";

export default function Composant1(){
    
    const [listeClient , setListeClient] =useState(
        ['client 1' , 'client 2 ' ,'client 3', 'client 4']
    )    
    const [clientSupp , setClientSupp]=useState([]) ; 

    const DIV=styled.div`
            background-color:rgb(148, 226, 246);
            width:10% ; 
            height : 200px;
    `
    const StyledComposant2 = styled.div`
    background-color: rgb(247, 255, 23);
    width: 10%; 
    height: 200px;
    position: relative; 
    bottom: 20px;
`;

    const handlsupp=(clientsupprimer)=>{
        setListeClient(listeClient.filter((clientrester)=> clientrester !== clientsupprimer))
        setClientSupp([...clientSupp , clientsupprimer])
    }; 
    return(
        <>
            <DIV>
                <ul>
                    {
                        listeClient.map((c , index)=>(
                            <div  key={index}><button onClick={()=>handlsupp(c)}
                                    style={
                                        {
                                            backgroundColor:'rgb(148, 226, 246)' ,
                                            border:'none' 
                                        }
                                    }
                            ><li>{c}</li></button><br></br><br></br></div>
                        ))

                    }
                </ul>
            </DIV>
            
            <StyledComposant2>
                <Composant2  l={clientSupp} />

            </StyledComposant2>
        </>
    )
}