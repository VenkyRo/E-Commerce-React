import React from 'react'

import {useCart} from './context/CartContext'
import Navbar from './components/Navbar'

const UserCart = () => {
    const { cartItems, addToCart, removeCart } = useCart();
  return (
    <>
      <Navbar></Navbar>
      <div>
        <h2 className="y-cart">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="empty">Your Cart is Empty</p>
        ) : (
          <div>
            {cartItems.map((item) => {
              return (
                <div className="Cart-Section">
                  <div className="cart-img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="cat-detalis">
                    <h3>{item.product}</h3>
                    <h2>{item.price}</h2>
                    <h3>{item.model}</h3>
                  </div>
                  <button
                    className="removeBtn"
                    onClick={() => removeCart(item)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default UserCart