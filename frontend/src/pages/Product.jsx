import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  //check royute , we are getting productid fron url
  const { productId } = useParams();
  console.log(productId)
  return (
    <div></div>
  )
}

export default Product