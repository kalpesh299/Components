import React from 'react'

const CardsinCart = ({handleClickInc,count}) => {

  // if(count==-1){
  //   document.querySelector(".visible").style.display="none";
  // }
  if(count==-1){
    document.querySelector(".visible").style.display="none";
  }
  return (
    <div>
      
<div class="w-full border-2 border-black md:w-28 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 visible">
 
  <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=2560&hei
        =1440&fmt=p-jpg&qlt=80&.v=1692846360609" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{count}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Produnct Card</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <a href="#" onClick={handleClickInc} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+</a>
            <a href="#" class="md:bg-red-500 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">-</a>
        </div>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div class="bg-blue-600 h-2.5 rounded-full" style={{width: `${10*count}%`}}></div>
</div>
</div>

    </div>
  )
}

export default CardsinCart