import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';

const Collection = () => {

  const {products} = useContext(ShopContext)
  // create state variable
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
         {/* Creating Filter options */}
         <div className='min-w-60'> 
          {/* if we click on filters then it will toggle showFilter value and we can toggle the options on small screen */}
          <p onClick = {() => setShowFilter(!showFilter)}className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
             <img className = {`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}src= {assets.dropdown_icon} alt="" />
          </p> 
          {/* Category Filter */}
         <div className={`border border-gray-300 pl-5 py-3 cursor-pointer gap-2 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className='flex fex-col gap-2 text-sm font-light text-gray-700'>
                 <p className='flex gap-2'>
                   <input type="checkbox" name="" id="" className='w-3' value = {'Men'}/>Men
                 </p>
            </div>

            <div className='flex fex-col gap-2 text-sm font-light text-gray-700'>
                 <p className='flex gap-2'>
                   <input type="checkbox" name="" id="" className='w-3' value = {'Women'}/>Women
                 </p>
            </div>

            <div className='flex fex-col gap-2 text-sm font-light text-gray-700'>
                 <p className='flex gap-2'>
                   <input type="checkbox" name="" id="" className='w-3' value = {'Kids'}/>Kids
                 </p>
            </div>
          </div>

          {/* Sub-Category Filter Option */}
          <div className={`border border-gray-300 pl-5 py-3 my-5 cursor-pointer gap-2 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>TYPE</p>
            <div className='flex fex-col gap-2 text-sm font-light text-gray-700'>
                 <p className='flex gap-2'>
                   <input type="checkbox" name="" id="" className='w-3' value = {'Topwear'}/>Topwear
                 </p>
            </div>

            <div className='flex fex-col gap-2 text-sm font-light text-gray-700'>
                 <p className='flex gap-2'>
                   <input type="checkbox" name="" id="" className='w-3' value = {'Bottomwear'}/>Bottomwear
                 </p>
            </div>

            <div className='flex fex-col gap-2 text-sm font-light text-gray-700'>
                 <p className='flex gap-2'>
                   <input type="checkbox" name="" id="" className='w-3' value = {'Winterwear'}/>Winterwear
                 </p>
            </div>
          </div>

         </div>
    </div>
  )
}

export default Collection