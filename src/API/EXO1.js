import React , {useEffect, useState} from 'react' ; 
import axios from 'axios';

//API par FETCH//
/*export default function Pays(){
    const API='h'
    const [data , setdata] = useState([]) ; 

    useEffect(()=>{
        fetch('https://disease.sh/v3/covid-19/countries')
        .then(res=>{return res.json()})
        .then(user=>setdata(user))

        
    },[])

    console.log(data);


    return (
        <div>
            <ul>
                {
                    data.map((item,index)=>(
                        <li key={index}>
                            {item.country}_____________{item.cases}
                        </li>
                    ))

                }
            </ul>
        </div>
    )
}*/

//API par AXIOS//
/*export default function Pays(){
    const [data,setdata]=useState([]) ; 

    useEffect(()=>{
        axios('https://disease.sh/v3/covid-19/countries')
        .then((users)=>{setdata(users.data)}) ; 
    }

    ,[])
    console.log(data);


    return (
        <div>
            <ul>
                {
                    data.map((item,index)=>(
                        <li key={index}>
                            {item.country}_____________{item.cases}
                        </li>
                    ))

                }
            </ul>
        </div>
    )
    
}*/

// API par classe 
export default class Pays extends React.Component {
    constructor(){
        super(); 
        this.api='https://disease.sh/v3/covid-19/countries'
        this.state={
            data:[]
        }
       
    }

    componentDidMount=()=>{
        fetch(this.api)
        .then((res)=>{return res.json()})
        .then((users)=>this.setState({data:users}))
        console.log(this.state.data)
    }
    
    render(){
        
       return(
            <div>
                <ul>
                    {
                        this.state.data.map((item,index)=>(
                            <li key={index}>
                                {item.country}_____________{item.cases}
                            </li>
                        ))

                    }
                </ul>
            </div>
        )
    }
}