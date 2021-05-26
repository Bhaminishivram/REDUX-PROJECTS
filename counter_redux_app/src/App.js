 import React from 'react';
import './App.css';
import  {useSelector,useDispatch} from 'react-redux'; 
import {increment} from './actions/demo'; 
import {decrement} from './actions/demo'; 

function App() { 
 const counter = useSelector
 (state => state.counter); 

 const logged = useSelector
 (state => state.logged);
  
 const dispatch = useDispatch(); 
   return(
    <div className="App">
      <h1>Counter{counter}</h1>    
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

    {logged ? <h3> Valuable information i shoundn't see</h3>:''}
    </div>
   );
};

export default App;
