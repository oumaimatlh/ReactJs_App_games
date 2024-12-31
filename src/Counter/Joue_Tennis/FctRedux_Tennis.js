import { createStore } from "redux";

function FctRedx_Tennis(state ={ s1: 0, s2: 0 , message:'' }, action) {
    
   
    switch (action.type) {
        case 'P1':
            if(state.s1===0 ){
                return {...state, s1: state.s1 + 15 }; 
            }
    
            if(state.s1===15 ){
                return {...state, s1: state.s1 + 15 }; 
            } 
    
            if(state.s1===30 ){
                return {...state, s1: state.s1 + 10 }; 
            }
            if(state.s1===40 && state.s2<40){
                return {...state,  s1:0,s2:0 ,message:'Player 1 winner' }; 
            }
            if(state.s1===40 && state.s2===40  ){
                return {...state, s1:  'AVNG' }; 
            }
            if(state.s1=== 'AVNG' ){
                if(state.s2==='AVNG'){
                    return {...state, s1:40,s2:40,message:''}; 
                }
                else if(state.s2===40){
                    return {...state, s1:0,s2:0 ,message:'Player 1 winner'}; 
                }

            }
          

           

            case 'P2':
                if( state.s2===0){
                    return {...state, s2: state.s2 + 15 }; 
            }
        
                if( state.s2===15){
                    return {...state, s2: state.s2 + 15 }; 
            } 
        
                if( state.s2===30){
                    return {...state, s2: state.s2 + 10 }; 
                }
                if(state.s2===40 && state.s1===40){
                    return {...state, s2:  'AVNG' }; 
                }
                if(state.s2===40 && state.s1<40){
                    return {...state,  s1:0,s2:0 ,message:'Player 2 winner' }; 
                }
                if(state.s2=== 'AVNG' ){
                    if(state.s1==='AVNG'){
                        return {...state, s1:40,s2:40}; 
                    }
                    else if(state.s1===40){
                        return {...state, s1:0,s2:0 ,message:'Player 2 winner'}; 
                    }
                    
                }

               
            default:
                return state; 
        }
  
        
    


    
}

const store = createStore(FctRedx_Tennis);

export { store };