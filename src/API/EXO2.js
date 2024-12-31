import React from "react";
import axios from 'axios'; 


export default class UseAlbum extends React.Component {
    constructor(){
        super(); 
        this.api='https://jsonplaceholder.typicode.com/albums'
        this.state={
            data:[],
            number:0, 
            afficher:false, 
            id:0
        }
        this.expN=/^[1-9][0-9]?$/ ;
        
       
    }

    componentDidMount=()=>{
        fetch(this.api)
        .then((res)=>{return res.json()})
        .then((users)=>this.setState({data:users}))
    }
    
    handlClick(e){
        e.preventDefault() ; 
        if(!(this.expN.test(this.state.number))){
            return alert('il faut tapezz entre 1 et 100');
            
        }
        else{
            this.setState({
                afficher:true,
                id:this.state.number
            })
        }
    }
    render(){
        
        console.log(this.state.data[this.state.id])

           return(
            <div>
                    <h1>Entrer l'id entre 1 et 100 :</h1>
                    <form>
                        <input type='text' onChange={(e)=>this.setState({number:e.target.value})}/>
                        <button onClick={(e)=>this.handlClick(e)}>Chercher</button>
                    </form>
                    {
                        this.state.afficher && <div>
                            <p>Vous avez Choisi le id : {this.state.id}</p>

                            <br></br>

                            <p>
                                le titre de l'album cherché est : {this.state.data[parseInt(this.state.id)-1].title}
                            </p>
                        </div>
                    }
            </div>
        )
    }

}