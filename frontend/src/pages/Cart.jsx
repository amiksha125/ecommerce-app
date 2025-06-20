import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Cart = () => {
  const { products, currency, cartItems } = useContext(ShopContext);

  const [cartData, setcartData] = useState([]); //initialize with empty array

  useEffect(() => {
     //when cart page is loaded combine product data and cartItems data to create array

     const tempData = [];
     for(const items in cartItems){
      for (const item in cartItems[items]){
        if(cartItems[items][item] > 0){
             tempData.push({
              _id: items,
              size:item,
              quantity: cartItems[items][item]
             })
        }
      }
     }
     console.log(tempData);
  }, [cartItems])
  return (
    <div>Cart</div>
  )
}

export default Cart