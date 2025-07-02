import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[mycount,setcount]=useState(0);
  return(
  <div className="mycount">
  <h1>Practice Project-1:Counter App</h1>
  <p>Counter Value=<strong>{mycount}</strong></p>

  <button onClick={()=>{setcount(mycount-1)}} className="count">-</button>
  <button onClick={()=>{setcount(mycount+1)}} className="count">+</button>

  </div>
  );
  }


export default App;
