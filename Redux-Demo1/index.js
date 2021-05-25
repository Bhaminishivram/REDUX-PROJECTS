
 
const redux = require('redux') 
const createStore = redux.createStore;



const BUY_CAKE ='BUY_CAKE'  
const BUY_ICECREAMS ='BUY_ICECREAMS' 

    function buyCake(){
        return {
        type: BUY_CAKE, 
        info: 'My first redux action'
         }  
        }
    function buyIceCreams(){
        return {
        type: BUY_ICECREAMS, 
        info: 'My first redux action'
         } 
} 

// (previousState, action ) => newState  

const initialState ={
    numofCakes :10, 
    numofIceCreams:20
} 

const reducer = ( state = initialState, action)=> {
    switch(action.type){
        case BUY_CAKE: return { 
            ...state,  
          numofCakes : state.numofCakes - 1
        }  
        case BUY_ICECREAMS: return { 
            ...state,  
          numofIceCreams : state.numofIceCreams- 1
        } 
        default: return state
    }
} 

const store = createStore(reducer) 
console.log("Initial state", store.getState()) 
const unsubscribe= store.subscribe(() =>
 console.log('Updated state', store.getState())) 

store.dispatch(buyCake()) 
store.dispatch(buyCake())
store.dispatch(buyCake()) 
store.dispatch(buyCake()) 
store.dispatch(buyCake())  
store.dispatch(buyIceCreams()) 
store.dispatch(buyIceCreams())
store.dispatch(buyIceCreams()) 
store.dispatch(buyIceCreams()) 
store.dispatch(buyIceCreams())  

unsubscribe()