import React from 'react';
import axios from 'axios';
export default class Employe extends React.Component {
    constructor(){
        super()
        this.API="https://jsonplaceholder.typicode.com/users" 
        this.state={
             
            utilisateurs:[] ,
        
        }
    }


    componentDidMount() {
        axios.get(this.API)
            .then((i) => {
                console.log(i.data);
                this.setState({ utilisateurs: i.data });
                
            }) 
           
    }
    render(){
        return(
            <div></div>
        )
    }



   



}