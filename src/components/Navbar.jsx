import React from "react";
import "./Navbar.css";

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">Tap N Buy</h1>
      <button className="cart-button" onClick={onCartClick}>
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;