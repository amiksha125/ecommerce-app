import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

  const { products } = useContext(ShopContext);
//   console.log(products);
  //store the first 10 latest products using state 
  const [latestProducts, setLatestProducts] = useState([]);
//useEffect is a hook to store data
  useEffect(() => {
     setLatestProducts(products.slice(0, 10));
  }, [products]) //, [] is an empty dependency array
  //to map this data , create a productitem.jsx component 

  return (
    <div className='my-10'>
       <div className='text-center py-8 text-3xl'>
        {/* WE CAN USE THIS TITLE COMPONENT MULTIPLE TIMES IN OUR PROJECT */}
           <Title text1={'LATEST'} text2={'COLLECTIONS'} />
           <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates molestiae nam cum laudantium hic consequuntur iste quis, veniam laborum, saepe blanditiis necessitatibus eius aperiam maxime aspernatur, dolores labore debitis ad.
           </p>
       </div>

       {/* Rendering products with ProductItem*/}

       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            latestProducts.map((item, index) => (
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />

            ))
        }
       </div>
    </div>
  )
}

export default LatestCollection