import React, { useState } from 'react'

export const Usestate = () => {

const [counter,setCounter]=useState(0);
const incrementCounter=()=>{
    setCounter(counter+1);
}
  return (
    <div>

      <h1>{counter}</h1>
      <button onClick={incrementCounter}>Increment Button</button>

    </div>
  )
}
