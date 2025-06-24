import React, { createContext, useEffect, useState } from 'react'
import { products } from '../assets/assets';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext();

// context provider function
const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    //search icon 
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async(itemId, size) => {
     //if size is not selected , create a toast
     if(!size){
          toast.error('Please Select Product Size')
          return;
     }
     //create a copy of cart item object
     let cartData = structuredClone(cartItems);

     if(cartData[itemId]){
          if(cartData[itemId][size]){
               cartData[itemId][size] += 1;
          } else {
               cartData[itemId][size] = 1;
          }
     }
     else {
          cartData[itemId] = {};
          cartData[itemId][size] = 1;
     }

       setCartItems(cartData);

    }

    const getCartcount = () => {
     let totalcount = 0;
     for(const items in cartItems){
          for(const item in cartItems[items]){
                 try{
                    if(cartItems[items][item] > 0){
                        totalcount += cartItems[items][item];
                    }
                 } catch (error) {

                 }
          }
      }

      return totalcount;

    }

    useEffect(() => {
         console.log(cartItems);
    }, [cartItems])//whenever this, [cartItems] get modified useEfffect will execute
    
   //delete icon functionality on your cart page
    const updateQuantity = async (itemId, size, quantity) => {
      //create copy of cart items
      let cartData =  structuredClone(cartItems);
     //we will receive quantity as 0
      cartData[itemId][size] = quantity;

      setCartItems(cartData);
    }

    //get total cart amount functionality
    const getCartAmount =  () => {
       let totalAmount = 0;
       for(const items in cartItems){
          let itemInfo = products.find((product) => product._id === items);

          for(const item in cartItems[items]){
               try{
                    if(cartItems[items][item] > 0){    //below is quantity
                      totalAmount += itemInfo.price * cartItems[items][item];
                    }
               } catch(error){

               }
          }
       }
       return totalAmount;
     }

    const value = {
         products, currency, delivery_fee,
         search, setSearch, showSearch, setShowSearch,
         cartItems, addToCart, 
         getCartcount, updateQuantity,
         getCartAmount, navigate
    }

    return (
         <ShopContext.Provider value = {value}>
            {props.children}
         </ShopContext.Provider>

    )
}

export default ShopContextProvider;