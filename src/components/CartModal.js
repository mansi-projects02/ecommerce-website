// CartModal.js
import React from 'react';

const CartModal = ({ isCartOpen, toggleCart, checkout, products, addToCart , index }) => {
  if (!isCartOpen) return null;

  return (
    <div className="cart-modal">
      <div className="cart-content">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="close-cart" onClick={toggleCart}>&times;</button>
        </div>
        <div id="cartItems" onClick={() => addToCart(index)}>
          {/* Cart items will be dynamically loaded here */}
          {/* <p>Cart functionality can be extended here</p> */}
          {
            <ul>
              {products.map((product) => (
                  <li key={product.index}>
                    {product.name} : {product.price} 
              </li>))}
            </ul>
          }
        </div>
        <div className="cart-total">
          Total: ₹0
        </div>
        <button 
          style={{width: '100%', marginTop: '1rem'}} 
          onClick={checkout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartModal;