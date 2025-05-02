// src/App.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import CartModal from "./CartModal";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Fetch products
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  // Add to cart
  const addToCart = (product) => {
    if (cart.some(item => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar cart={cart} setShowCart={setShowCart} />
      <main className="container mx-auto px-4 py-6">
        <ProductList products={products} addToCart={addToCart} />
      </main>
      <CartModal
        show={showCart}
        setShowCart={setShowCart}
        cart={cart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
