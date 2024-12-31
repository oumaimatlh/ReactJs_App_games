export default function Composant2(props){
    
    return(
        <>
        
                <ul>
                    {
                        props.l.map((c , index)=>(
                            <div  key={index}><li>{c}</li><br></br><br></br></div>
                        ))

                    }
                </ul>
       
           
        </> 
    )

}