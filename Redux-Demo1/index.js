
 
const redux = require('redux')  
const reduxLogger = require('redux-logger') 

const createStore = redux.createStore;
const combineReducers =redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()


const BUY_CAKE ='BUY_CAKE'  
const BUY_ICECREAM ='BUY_ICECREAM' 

    function buyCake(){
        return {
        type: BUY_CAKE, 
        info: 'My first redux action'
         }  
        }
    function buyIceCream(){
        return {
        type: BUY_ICECREAM, 
        info: 'My first redux action'
         }  
} 

// (previousState, action ) => newState  

// const initialState ={
//     numofCakes :10, 
//     numofIceCreams:20
// }   

const initialCakeState = {
    numofCakes:10 
}  

const initialIceCreamState ={
    numofIceCreams:20
}


// const reducer = ( state = initialState, action)=> {
//     switch(action.type){
//         case BUY_CAKE: return { 
//             ...state,  
//           numofCakes : state.numofCakes - 1
//         }  
//         case BUY_ICECREAMS: return { 
//             ...state,  
//           numofIceCreams : state.numofIceCreams- 1
//         } 
//         default: return state
//     }
// }   

const cakeReducer = ( state = initialCakeState, action)=> {
    switch(action.type){
        case BUY_CAKE: return { 
            ...state,  
          numofCakes : state.numofCakes - 1
        } 
        default: return state
    }
}  

const iceCreamReducer = ( state = initialIceCreamState, action)=> {
    switch(action.type){
        case BUY_ICECREAM: return { 
            ...state,  
          numofIceCreams : state.numofIceCreams- 1
        } 
        default: return state
    }
} 



const rootReducer = combineReducers({
    cake:cakeReducer, 
    iceCream:iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger)) 
console.log("Initial state", store.getState()) 
const unsubscribe= store.subscribe(() => {})
 //console.log('Updated state', store.getState())

store.dispatch(buyCake()) 
store.dispatch(buyCake())
store.dispatch(buyCake()) 
store.dispatch(buyCake()) 
store.dispatch(buyCake())  
store.dispatch(buyIceCream()) 
store.dispatch(buyIceCream())
store.dispatch(buyIceCream()) 
store.dispatch(buyIceCream()) 
store.dispatch(buyIceCream())  

unsubscribe()  