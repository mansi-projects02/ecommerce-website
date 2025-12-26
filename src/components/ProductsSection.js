// ProductsSection.js
import React from 'react';
import ProductCard from './ProductCard';

const ProductsSection = ({ products, addToCart, onProductClick }) => {
  return (
    <section className="products" id="products">
      <div className="container">
        <h2 className="section-title">Where Beauty Meets Brilliance!!</h2>

        <div className="filters">
          <div className="fbox">
            <img src="/img/cod.png" alt="COD" />
            <h4>COD Available</h4>
          </div>
          <div className="fbox">
            <img src="/img/return.png" alt="return" />
            <h4>7 Days Return</h4>
          </div>
          <div className="fbox">
            <img src="/img/fast-delivery.png" alt="fast-delivery" className="fbox1" />
            <h4>Fast Delivery</h4>
          </div>
          <div className="fbox">
            <img src="/img/affordable.png" alt="affordable price" />
            <h4>Affordable Price</h4>
          </div>
          <div className="fbox">
            <img src="/img/collection.png" alt="collection" />
            <h4>Exclusive Collection</h4>
          </div>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard 
              key={index} 
              product={product} 
              index={index} 
              addToCart={addToCart}
              onProductClick={onProductClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;