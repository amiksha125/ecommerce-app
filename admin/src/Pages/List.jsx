import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {

  const [list, setList] = useState([]);
  const fetchList = async () => {

    try{
      const response = await axios.get(backendUrl + '/api/product/list');
      //console.log(response.data)
      if(response.data.success){
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    }
    catch(error){
      console.log(error);
      toast.error(error.message);

    }

  }

  useEffect(() => {
    fetchList();
  }, [])

  //run the fetchList func whenever the page loaded using useEffect hook
  return (
    <>
     <p className='mb-2'>All Products</p>
     <div className='flex flex-col gap-2'>
        {/* List Table Title */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] item-center py-1 px-2 bg-gray-100 border text-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>

          {/* Product List */}
        </div>
     </div>
    </>
  )
}

export default List