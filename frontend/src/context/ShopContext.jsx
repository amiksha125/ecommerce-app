import React, { createContext, useEffect, useState } from 'react'
// import { products } from '../assets/assets';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ShopContext = createContext();

// context provider function
const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    //create backend url variable
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    //search icon 
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();
    //state variable for backend product data
    const [products, setProducts] = useState([]);
    //state variable for login token
    const [token, setToken] = useState('');

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
        // console.log(cartItems);
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

     const getProductData = async () => {

          try{
               console.log(import.meta.env.VITE_BACKEND_URL);
               const response = await axios.get(backendUrl + '/api/product/list');
               console.log(response.data);
                //console.log('Status:', response.status);

               if(response.data.success){
                    setProducts(response.data.products);
               } else {
                    toast.error(response.data.message);
               }
  
               
          } catch (err){
              console.log(err);
              toast.error(err.message)          
          }

     }

     useEffect(() => {
       getProductData();
     }, [])

     useEffect(() => {
          if(!token && localStorage.getItem('token')){
               setToken(localStorage.getItem('token'))
          }
     }, [])

    const value = {
         products, currency, delivery_fee,
         search, setSearch, showSearch, setShowSearch,
         cartItems, addToCart, setCartItems,
         getCartcount, updateQuantity,
         getCartAmount, navigate, backendUrl, token, setToken
    }

    return (
         <ShopContext.Provider value = {value}>
            {props.children}
         </ShopContext.Provider>

    )
}

export default ShopContextProvider;