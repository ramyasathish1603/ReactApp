// src/CartModal.jsx

import React from "react";

function CartModal({ show, setShowCart, cart, removeFromCart }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">Your Cart</h3>
        {cart.length === 0 ? (
          <p className="text-gray-600">No items in the cart</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={() => setShowCart(false)}
          className="mt-6 bg-gray-600 text-white w-full py-2 rounded hover:bg-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default CartModal;
