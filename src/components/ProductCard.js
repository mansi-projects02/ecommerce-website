// ProductCard.js
import React from 'react';

const ProductCard = ({ product, index, addToCart }) => {
  return (
    <div className="product">
      <div className="image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>₹{product.price}</p>
        <button className="add-to-cart" onClick={() => addToCart(index)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;