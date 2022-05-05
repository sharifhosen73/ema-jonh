import React, { useEffect, useState } from 'react'
import Cart from '../cart/Cart';
import SingleProduct from './../singleProduct/SingleProduct';
import './products.css'

export default function Products() {
  const[products,setProducts] = useState([]);
    const [cart, setCart]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
            .then(res=>res.json())
            .then(data=> setProducts(data))
    },[])

    const handlerAddToCard=product =>{
      const newCart = [...cart, product]
      setCart(newCart)
    }
  return (
    <div className='shop'>
      <div className="products-container">
        {
              products.map(product=><SingleProduct
                product={product}
                key={product.key}
                handlerAddToCard={handlerAddToCard}
              >
                </SingleProduct>)
        }
      </div>
      <div className="card-container">
          <Cart cart={cart}></Cart>
      </div>
    </div>
  )
}

