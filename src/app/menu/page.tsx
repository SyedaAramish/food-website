// src/pages/menu.js

import React from 'react';

const dishes = [
  { name: "Spaghetti Carbonara", price: "$15", image: "/images/carbonara.jpg" },
  { name: "Margherita Pizza", price: "$12", image: "/images/pizza.jpg" },
  { name: "Caesar Salad", price: "$10", image: "/images/salad.jpg" },
  { name: "Grilled Salmon", price: "$20", image: "/images/salmon.jpg" },
  { name: "Beef Tacos", price: "$11", image: "/images/tacos.jpg" },
  { name: "Vegetable Stir Fry", price: "$9", image: "/images/stir.jpg" },
  { name: "Chicken Alfredo", price: "$16", image: "/images/chicken.jpg" },
  { name: "Manchurian Momos", price: "$18", image: "/images/momo.avif" },
  { name: "Korean Chicken", price: "$25", image: "/images/korean.jpg" },
  { name: "Chocolate Lava Cake", price: "$8", image: "/images/cake.webp" },
  { name: "Chocolate Peanut Clusters", price: "$8", image: "/images/peanut.webp" },
  { name: "Peaches-And-Cream Icebox Pies", price: "$8", image: "/images/cup.webp" },
];

const MenuPage = () => {
  return (
    <div className="bg-[#7a8727] p-8 min-h-screen relative">
      {/* Restaurant Name */}
      <h1 className="absolute top-15 left-8 text-4xl text-white font-bold font-serif">THE HERITAGE GRILL</h1>
      
      {/* Header on the Right */}
      <header className="absolute top-0 right-0 flex justify-center space-x-4 p-4 z-10">
        <nav className="bg-[#7a8727] rounded shadow-md p-2">
          <ul className="flex space-x-6 text-white">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/special">Pakistani Dishes</a></li>
            <li><a href="/location">Location</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      {/* Menu Heading */}
      <h2 className="text-center text-6xl text-white mb-8 font-bold mt-16">Menu</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dishes.map((dish, index) => (
          <div 
            key={index} 
            className="bg-[#444d1e] rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
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
