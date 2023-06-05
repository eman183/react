import React, { useEffect, useState } from 'react'
import MyCard from './MyCard'

const ProductsSection =({cartCount,setCartCount})=>{
  const[products,setProducts]=useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(dataArr=>setProducts(dataArr))
  }
  ,[]);
  return(
        <div className='container'>
        <div className="row g-2">
        {products.map((product)=>(
          <MyCard key={product.id} setCartCount={setCortCount} cartCount={cartCount} product={product}/>

          )
      
        )}
      </div>
      </div> 
)}
export default ProductsSection;
