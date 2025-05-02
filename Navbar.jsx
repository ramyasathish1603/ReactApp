// src/Navbar.jsx

import React from "react";

function Navbar({ cart, setShowCart }) {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <h3 className="text-lg font-semibold">Tap N Buy</h3>
      <button
        onClick={() => setShowCart(true)}
        className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
      >
        Cart ({cart.length})
      </button>
    </nav>
  );
}

export default Navbar;

