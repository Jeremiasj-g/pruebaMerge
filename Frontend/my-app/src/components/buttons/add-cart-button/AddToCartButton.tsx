import React from 'react';

const AddToCartButton = () => {
  return (
    <button
      className="py-3 px-5 
             bg-gray-900 text-white 
               flex gap-2 
               rounded-lg
               transition-all
               shadow-xl
               hover:scale-110 hover:bg-gray-700">

      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>

      <span>Añadir al carrito</span>
    </button>
  );
};

export default AddToCartButton;
