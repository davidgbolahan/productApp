import React from 'react'
import Product_Image from '../ProductImage/ProductImage'
import "./product.css"
const Product = ({name, description,price, image}) => {
  return (
    <div className='cardContainer'>
    <div className='card'>
      <div className='imgBox'>
      <Product_Image imageUrl={image} alttext={name}/>
      </div>
      <div className='text'>
      <h3 id='name'>{name}</h3>
      <h4 id='price'>{price}</h4>
      <p id='description'>{description}</p>
      </div>
     
    </div>
    </div>
    
  )
}

export default Product