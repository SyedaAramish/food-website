// src/pages/menu.js

import React from 'react';

const dishes = [
  { name: "Biryani", price: "$12", image: "/images/biryani.webp" },
  { name: "Chicken Shawarma", price: "$09", image: "/images/shawarma.webp" },
  { name: "Karahi", price: "$10", image: "/images/karahi.jpg" },
  { name: "Chicken Charga", price: "$20", image: "/images/charga.jpg" },
  { name: "Chapli Kabab", price: "$11", image: "/images/kabab.jpeg" },
  { name: "Nihari", price: "$9", image: "/images/nihari.jpeg" },
  { name: "Haleem", price: "$13", image: "/images/haleem.jpg" },
  { name: "Chicken Jalfrezi", price: "$111", image: "/images/jalfrezi.jpg" },
  { name: "Golgappay", price: "$6", image: "/images/gol.jpg" },
  { name: "Chana Chaat", price: "$8", image: "/images/chaat.jpg" },
  { name: "Zarda", price: "$9", image: "/images/zarda.jpg" },
  { name: "Kulfi", price: "$8", image: "/images/kulfi.jpg" },
  { name: "Kheer", price: "$7", image: "/images/kheer.webp" },
];

const MenuPage = () => {
  return (
    <div className="bg-[#444d1e] p-8 min-h-screen relative">
      {/* Restaurant Name */}
      <h1 className="absolute top-15 left-8 text-4xl text-white font-bold font-serif">THE HERITAGE GRILL</h1>
      
      {/* Header on the Right */}
      <header className="absolute top-0 right-0 flex justify-center space-x-4 p-4 z-10">
        <nav className="bg-[#444d1e] rounded shadow-md p-2">
          <ul className="flex space-x-6 text-white">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/location">Location</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      {/* Menu Heading */}
      <h2 className="text-center text-6xl text-white mb-8 font-bold mt-28 font-times new roman">Special Pakistani Dishes</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dishes.map((dish, index) => (
          <div 
            key={index} 
            className="bg-[#7a8727] rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl text-white font-semibold">{dish.name}</h3>
              <p className="text-lg text-yellow-400">{dish.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
