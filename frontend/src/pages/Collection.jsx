import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const {products, search, showSearch} = useContext(ShopContext)
  // create state variable
  const [showFilter, setShowFilter] = useState(false);
  //for mapping products
  const [filterProduct, setFilterProduct] = useState([]);
  // all the category and type filterdata will be store in these array
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (e) => {
    //check if selected category is available category state
    if (category.includes(e.target.value)){
         setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      // if category not available then add it to array
      setCategory(prev => [...prev, e.target.value]);
    }
  }
 
  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  }

  const applyFilter = () => {
    //create copy of all selected category products
    let productsCopy = products.slice();
    
    //search products
    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProduct(productsCopy);
  }

  //sort product logic
  const sortProduct = () => {
    //based on filter product on categories we will apply sortby feature, create filter product copy
    let fpCopy = filterProduct.slice();
    switch(sortType){
      case 'low-high':
        setFilterProduct(fpCopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilterProduct(fpCopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }
  }
  
  //whenever this component is loaded this function is executed

// useEffect(() => {
//     console.log(subCategory);
//    }, [subCategory]);

  //run applyFilter function whenever category or subcategory filter is updated using effects

useEffect(() => {
  applyFilter();
}, [category, subCategory, search, showSearch, products]) //whenever these dependency array elem value changes applyFilter() is called

useEffect(() => {
  sortProduct();
}, [sortType]);


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
                   <input type="checkbox" name="" id="" className='w-3' value = {'Men'} onClick = {toggleCategory}/>Men
                 </p>
            </div>

            <div className='flex fex-col gap-2 text-sm font-light text-gray-700'>
                 <p className='flex gap-2'>
                   <input type="checkbox" name="" id="" className='w-3' value = {'Women'} onClick = {toggleCategory}/>Women
                 </p>
            </div>

            <div className='flex fex-col gap-2 text-sm font-light text-gray-700'>
                 <p className='flex gap-2'>
                   <input type="checkbox" name="" id="" className='w-3' value = {'Kids'} onClick = {toggleCategory}/>Kids
                 </p>
            </div>
          </div>

          {/* Sub-Category Filter Option */}
          <div className={`border border-gray-300 pl-5 py-3 my-5 cursor-pointer gap-2 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>TYPE</p>
            <div className='flex fex-col gap-2 text-sm font-light text-gray-700'>
                 <p className='flex gap-2'>
                   <input type="checkbox" name="" id="" className='w-3' value = {'Topwear'} onChange={toggleSubCategory}/>Topwear
                 </p>
            </div>

            <div className='flex fex-col gap-2 text-sm font-light text-gray-700'>
                 <p className='flex gap-2'>
                   <input type="checkbox" name="" id="" className='w-3' value = {'Bottomwear'} onChange={toggleSubCategory}/>Bottomwear
                 </p>
            </div>

            <div className='flex fex-col gap-2 text-sm font-light text-gray-700'>
                 <p className='flex gap-2'>
                   <input type="checkbox" name="" id="" className='w-3' value = {'Winterwear'} onChange={toggleSubCategory}/>Winterwear
                 </p>
            </div>
          </div>

         </div>

         {/* Right Side */}
         <div className='flex-1'>
            <div className='flex justify-between text-base sm:text-2xl mb-4'>
                 <Title text1= {'ALL'} text2 = {'COLLECTIONS'} />
                 {/* Product Sort */}
                 <select onClick = {(e) => setSortType(e.target.value)}className='border-2 border-gray-300 text-sm px-2'>
                  <option value="relavent">Sort by: Relavent</option>
                  <option value="low-high">Sort by: Low to High</option>
                  <option value="high-low">Sort by: High to Low</option>
                 </select>
            </div>

            {/* Map Products */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
              {
                filterProduct.map((item, index) => (
                  <ProductItem key={index} name={item.name} id={item._id} price={item.price}image={item.image}  />

                ))
              }
            </div>

         </div>
    </div>
  )
}

export default Collection