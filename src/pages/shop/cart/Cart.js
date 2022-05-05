import React from 'react'

export default function Cart(props) {
  const {cart} = props
    let total = 0
    for(const product of cart){
        total = total + product.price
    }
    const shipping = total > 0 ? 15 : 0
    const tax = ( total + shipping ) * 0.10
  return (
    <div>
        <h2>Order Summary</h2>
        <p>Items Ordered: {cart.length}</p>
        <p> Shopping: {shipping} </p>
        <p> Tax: {tax.toFixed(0)} </p>
        <p>Total:{total.toFixed(0)}</p>
    </div>
  )
}
