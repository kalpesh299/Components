import React, { useState,useEffect } from 'react'
// import useState from 'react';

export const UseEffeect = () => {
         
    const [Count, setCount] = useState(0);


    const HandleClick = () =>{
        // console.log("working");
        setCount(Count+1);
    }
//this is the component mounting which executes only once when renendering done after we changes something
    useEffect(() => {
      console.log("Component mounting");
      return () => {
        console.log("Component nmounting");
      }
     }, [])

     // This is updating phase 
     
     useEffect(() => {
       console.log("updating phase")
     
     }, [Count])
     

   
    

  return (
    <div>
     <h1>UseEffect and lifecycle phases</h1>
     <button onClick={HandleClick} >Click Mee</button>
    </div>
  )
}
