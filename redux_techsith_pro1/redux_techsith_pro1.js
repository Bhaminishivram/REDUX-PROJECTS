const { createStore } = require('redux');  
const initialState = {
    age:21
}

const myReducer = (state  = initialState, action ) => {
 const newState = {...state};  

 if(action.type ==='ADD') 
 {
     //newState.age += 1;  
     newState.age += action.val;
 }  

 if(action.type ==='SUBSTRACT') 
 {
    // newState.age -= 1;  
    newState.age -= action.val;
 } 
 return newState; 

}



const store = createStore(myReducer);  

  store.subscribe (() => {
    console.log('state changed' + JSON.stringify(store.getState())); 
})



//store.dispatch({ type:'ADD'}); 
//console.log('after add' +JSON.stringify(store.getState())); 

//store.dispatch({type:'SUBSTRACT'});
//console.log( 'after substract' +JSON.stringify(store.getState()));

//keep adding store .dispatch  
store.dispatch({ type:'ADD', val:10}); 
//store.dispatch({ type:'ADD'}); 
// store.dispatch({ type:'ADD'}); 
// store.dispatch({ type:'ADD'}); 
// store.dispatch({ type:'ADD'}); 
// store.dispatch({ type:'ADD'}); 
// store.dispatch({ type:'ADD'}); 
store.dispatch({type:'SUBSTRACT', val:5});
