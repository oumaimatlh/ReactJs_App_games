
export default function CounterReducer(state, action ){

    switch(action.type ) {
        case 'Ajouter' : {
            return {counter:state.counter + action.number} ;
            
        }

        case 'Soustraire' : {
            return { counter:state.counter - action.number}
            
        }
        
        case 'Reinitialisation' : {
            return {counter:0} 
            
        }
        case 'Contenu' : {
            return { Afficher:!state.Afficher }
        }
        
        default : 
        return state ;
}
     
    
}