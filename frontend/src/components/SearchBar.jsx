import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const SearchBar = () => {
    //get serch, setsearch, showSearch, setShowSearch from context api
    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
  return (
    <div></div>
  )
}

export default SearchBar