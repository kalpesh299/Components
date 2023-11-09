import React, { useState } from 'react'


export const ConditionalREndering = () => {
    const [isLogin,setisLogin]=useState(false);
    const clickHandle=()=>{
    setisLogin(!isLogin)
    }
    
    
      return (
       
       <div>
        {isLogin ?(<h1>You are Login</h1> ):(<h2>PLease click to sign in</h2>)}
        <button onClick={clickHandle}>Click</button>
       </div>
        
      )
}
