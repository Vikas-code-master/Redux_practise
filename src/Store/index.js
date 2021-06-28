
import { createStore } from 'redux';

const counterReducer = (state = {counter : 5 , showCounter: true}, action)=>{
    if(action.type === 'INCREMENT'){
        return {
            counter : state.counter + 1 ,
            showCounter : state.showCounter,
        }
    }
    if(action.type === 'DECREMENT'){
        return {
            counter : state.counter - 1 ,
        }
    }
    if(action.type === 'INCREMENTBY5'){
        return {
            counter : state.counter + 5 ,
        }
    }
    if(action.type === 'RESET'){
        return {
            counter : 0 ,
        }
    }
    return state ;    
}

const store = createStore (counterReducer) ;

export default store ;