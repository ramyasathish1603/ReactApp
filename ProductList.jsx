// src/ProductList.jsx

import React from "react";

function ProductList({ products, addToCart }) {
  return (
    <div className="flex flex-wrap justify-between gap-4 px-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-[23%] mb-5 border border-gray-300 p-4 rounded shadow-sm bg-white"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[150px] object-contain mb-3"
          />
          <h4 className="text-sm font-medium h-[50px] overflow-hidden mb-2">{product.title}</h4>
          <p className="font-semibold text-gray-800 mb-3">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
