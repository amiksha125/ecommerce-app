import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  //check royute , we are getting productid fron url
  const { productId } = useParams();
  // console.log(productId)
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');

  const fetchProductData = async () => {
    //store products data in state variable
    // console.log("All products:", products); 
    products.map((item) => {
      //console.log("item._id:", item._id, "productId:", productId);

      // if(item._id === productId){
      if(String(item._id).trim() === String(productId).trim()){
        setProductData(item);
        //console.log(item);
        setImage(item.image[0])
        return null; //return so that execution stop after finding item
      }
    })
  }

//   const fetchProductData = async () => {
//   if (!products || products.length === 0) {
//     console.log("Products not yet loaded");
//     return;
//   }

//   const foundProduct = products.find((item) => item._id === productId);

//   if (foundProduct) {
//     setProductData(foundProduct);
//     setImage(foundProduct.image[0]);
//     console.log("Found product:", foundProduct);
//   } else {
//     console.warn("Product not found with ID:", productId);
//   }
// };

useEffect(() => {
  fetchProductData();
}, [productId, products]);

  //when this component get loaded run fetch function through useEffect

  useEffect(() => {
    fetchProductData();

  }, [productId, products])
 
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
          {/* Product Images */}
          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
             <div className='flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                 {
                  productData.image.map((item, index) => (
                       <img src= {item} key = {index} className = 'w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'alt="" />
                  ))
                 }
             </div>
          </div>
        </div>
    </div>
  ) : <div className='opacity-0' ></div>
}

export default Product