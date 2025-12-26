// JewelryStore
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import CartModal from './components/CartModal';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import './JewelryStore.css';

const JewelryStore = () => {
  const [cartItems, setCartItems] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);
  
  const products = [
    {
      name: "Gold Necklace",
      price: 4999,
      image: "/img/diamond1.png",
    },
    {
      name: "Diamond Ring",
      price: 7999,
      image: "/img/diamond2.png",
    },
    {
      name: "Luxury Watch",
      price: 15999,
      image: "/img/diamond3.png",
    },
    {
      name: "Designer Handbag",
      price: 9999,
      image: "/img/diamond4.png",
    },
    {
      name: "Gold Bracelet",
      price: 6999,
      image: "/img/gold1.png",
    },
    {
      name: "Diamond Earrings",
      price: 8999,
      image: "/img/gold2.png",
    },
    {
      name: "Pearl Necklace",
      price: 12999,
      image: "/img/gold3.png",
    },
  ];

  const addToCart = (index) => {
    setCartItems(cartItems + 1);
    alert(`Added "${products[index].name}" to cart!`);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const openProductPage = (product, index) => {
    setSelectedProduct(product);
    setSelectedProductIndex(index);
  };

  const closeProductPage = () => {
    setSelectedProduct(null);
    setSelectedProductIndex(null);
  };

  const checkout = () => {
    if (cartItems === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert(`Thank you for your purchase!\nThis is a demo. No actual payment processed.`);
    setCartItems(0);
    setIsCartOpen(false);
  };

  return (
    <div className="jewelry-store">
      <Header 
        cartItems={cartItems}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        toggleCart={toggleCart}
      />
      
      <Hero />
      
      <ProductsSection 
        products={products}
        addToCart={addToCart}
        onProductClick={openProductPage}
      />
      
      <CartModal 
        products={products}
        isCartOpen={isCartOpen}
        toggleCart={toggleCart}
        checkout={checkout}
      />

      {selectedProduct && (
        <ProductPage
          product={selectedProduct}
          productIndex={selectedProductIndex}
          onClose={closeProductPage}
          addToCart={addToCart}
        />
      )}
      
      <Footer />
    </div>
  );
};

export default JewelryStore;