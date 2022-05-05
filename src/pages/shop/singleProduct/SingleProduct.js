import React from 'react'
import './SingleProduct.css'

export default function SingleProduct(props) {
  const{img, stock, name, price, seller}=props.product;
  return (
    <div className='products'>
      <div className="img">
            <img src={img} className='product-img' alt="" />
        </div>
        <div className="side-product">
            <h3>{name}</h3>
            <p><small>By: {seller}</small></p>
            <p>${price}</p>
            <p><small>only {stock} left in stock - order soon</small></p>
            <button 
            className="btn-regular"
            onClick={()=> props.handlerAddToCard(props.product)}
            >add to card</button>
        </div>
    </div>
  )
}
