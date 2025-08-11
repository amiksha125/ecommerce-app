import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
import { backendUrl } from '../App.jsx'
import { toast} from 'react-toastify';


const Orders = ( {token} ) => {

  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if(!token){
      return null;
    }

    try {
      const response = await axios.post(backendUrl + '/api/order/list', {}, {headers : {token}});
      // console.log(response.data);
      if(response.data.success){
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
      
    } catch (error) {
      toast.error(error.message);
      
    }
  }

  useEffect( () => {
    fetchAllOrders();
  }, [token])
  return (
    <div></div>
  )
}

export default Orders