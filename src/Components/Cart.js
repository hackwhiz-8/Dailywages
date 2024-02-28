import React from "react";

const Product = ({ image, name, details }) => (
  <div className="flex flex-col sm:w-1/3">
    <img src={image} alt="Product Image" className="w-full h-32 sm:h-48 object-cover mb-2" />
    <span className="text-gray-600">{name}</span>
    {details.map((detail, index) => (
      <span key={index} className="text-gray-600">{detail}</span>
    ))}
  </div>
);

const Cart = () => {
 
  return (
    <div className="bg-gray-100 w-full h-[800px] p-4 flex items-center justify-center flex-col   ">
      <img className="w-[100px] h-[100px]" src="https://imgs.search.brave.com/4LnWLIFcEasGKmYSYkGySiJeJfVTS0P7hs41lfUyrxE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvMTAyLzEwMjY2/MS5wbmc" alt="" />
      <h1 className="text-xl ">Cart is empty</h1>
    </div>
  );
};

export default Cart;