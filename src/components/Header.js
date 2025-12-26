// Header.js
import React from 'react';

const Header = ({ cartItems, searchQuery, setSearchQuery, toggleCart }) => {
  return (
    <header className="jewelry-header">
      <div className="head2">
        <a href="#home" className="logo">Jewellery Shop0</a>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="cart-icon" onClick={toggleCart}>
          <img src="/img/cart.png" alt="cart" style={{width: '24px', height: '24px'}} />
          <span className="cart-count">{cartItems}</span>
        </div>
      </div>
      <nav className="container">
        <ul className="nav-links">
          <li><a href="#home">Necklaces</a></li>
          <li><a href="#products">Rings</a></li>
          <li><a href="#about">Earrings</a></li>
          <li><a href="#contact">Bangles</a></li>
          <li><a href="#contact">Mens Bracelets</a></li>
          <li><a href="#contact">Hand Bags</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;