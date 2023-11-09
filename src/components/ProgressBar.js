import React, { useEffect, useState } from 'react'

export const ProgressBar = () => {
    const [progress,setProgress]=useState(1)
    const [Loadingstate,setLoadingstate]=useState("Loading...")

    

    useEffect(() => {

        const intervalId = setInterval(() => {
            if (progress < 100) {
              setProgress(progress + 3);
            } else {
              clearInterval(intervalId); // Clear the interval when progress reaches 100
              setLoadingstate("Completed")
            }
          }, 1000);
      
          return () => {
            clearInterval(intervalId); // Clear the interval when the component unmounts
          };
   
      
    }, [progress])
    
    
  return (
    <div>
        <div className="w-full md:w-1/4 md:m-auto h-10 bg-gray-200 rounded-full dark:bg-gray-700">
  <div className={`h-10 rounded-full ${progress === 100?'bg-green-500':'bg-blue-600'} dark:bg-blue-500`} style={{width: `${progress}%`}}></div>
  <h1 className='text-center m-6 font-bold text-xl'>{Loadingstate}</h1>
</div>
    </div>
  )
}
