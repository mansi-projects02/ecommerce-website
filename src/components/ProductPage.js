// ProductPage.js
import React, { useState } from 'react';

const ProductPage = ({ product, onClose, addToCart, productIndex }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('Medium');

  // Mock additional images for the product
  const productImages = [
    product.image,
    product.image, // You can add more image variations here
    product.image,
  ];

  const sizes = ['Small', 'Medium', 'Large'];
  const features = [
    'Premium Quality Materials',
    'Handcrafted Design',
    'Certificate of Authenticity',
    '1 Year Warranty',
    'Free Cleaning Service',
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(productIndex);
    }
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div className="product-page-overlay">
      <div className="product-page-container">
        <button className="close-product-page" onClick={onClose}>
          &times;
        </button>
        
        <div className="product-page-content">
          {/* Left Side - Images */}
          <div className="product-images-section">
            <div className="main-product-image">
              <img 
                src={productImages[selectedImage]} 
                alt={product.name}
                className="main-image"
              />
            </div>
            <div className="thumbnail-images">
              {productImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} view ${index + 1}`}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="product-details-section">
            <div className="product-header">
              <h1 className="product-title">{product.name}</h1>
              <div className="product-rating">
                <div className="stars">
                  {'★★★★★'}
                </div>
                <span className="rating-text">(4.8/5 - 124 reviews)</span>
              </div>
            </div>

            <div className="product-price-section">
              <span className="current-price">₹{product.price.toLocaleString()}</span>
              <span className="original-price">₹{(product.price * 1.3).toLocaleString()}</span>
              <span className="discount">25% OFF</span>
            </div>

            <div className="product-description">
              <p>
                Experience luxury with this exquisite piece from our premium collection. 
                Crafted with the finest materials and attention to detail, this {product.name.toLowerCase()} 
                represents the perfect blend of traditional craftsmanship and modern design.
              </p>
            </div>

            {/* Size Selection */}
            <div className="size-selection">
              <h3>Size:</h3>
              <div className="size-options">
                {sizes.map(size => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="quantity-selection">
              <h3>Quantity:</h3>
              <div className="quantity-controls">
                <button onClick={decreaseQuantity} className="qty-btn">-</button>
                <span className="quantity-display">{quantity}</span>
                <button onClick={increaseQuantity} className="qty-btn">+</button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="product-actions">
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add to Cart - ₹{(product.price * quantity).toLocaleString()}
              </button>
              <button className="buy-now-btn">
                Buy Now
              </button>
              <button className="wishlist-btn">
                ♡ Add to Wishlist
              </button>
            </div>

            {/* Product Features */}
            <div className="product-features">
              <h3>Features:</h3>
              <ul>
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Delivery Info */}
            <div className="delivery-info">
              <div className="delivery-item">
                <span className="delivery-icon">🚚</span>
                <span>Free Delivery in 3-5 days</span>
              </div>
              <div className="delivery-item">
                <span className="delivery-icon">↩️</span>
                <span>7 Days Return Policy</span>
              </div>
              <div className="delivery-item">
                <span className="delivery-icon">💰</span>
                <span>Cash on Delivery Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;