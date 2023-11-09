
import './App.css';
import CardsinCart from './components/CardsinCart.js';
import { ProgressBar } from './components/ProgressBar.js';
import { UseEffeect } from "./components/UseEffeect.js";
import React, { useState } from 'react'

function App() {

  const [count,setcount]= useState([0,0,0,0,0]);



  const handleClickInc=(index)=>{
  const newCount=[...count];
  newCount[index]+=1;


  
   setcount(newCount);
  }

  return (
    <div className="App">
  
     {/* {count.map((cnt,index)=>(cnt<=10 &&
      <CardsinCart  handleClickInc={()=>handleClickInc(index)} count={cnt} key={index}/>
     ))} */}
  
  <ProgressBar/>
    </div>
  );
}

export default App;
