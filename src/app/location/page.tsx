// src/pages/location.js

import React from 'react';

const Location = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#7a8727] p-8">
      <div className="w-full max-w-4xl bg-[#f5f5f0] shadow-2xl rounded-3xl p-8 flex flex-col md:flex-row">
        
        {/* Map Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h1 className="text-3xl font-bold text-[#444d1e] mb-4 text-center md:text-left">Visit Us Here!</h1>
          <p className="text-[#444d1e] text-center md:text-left mb-6">
            Welcome to <span className="font-semibold text-[#7a8727]">The Heritage Grills</span>. Discover the taste of our authentic meals in a cozy setting. Find us at the address below:
          </p>
          <div className="relative overflow-hidden rounded-lg shadow-md h-72 md:h-64 mb-6">
            <img
              src="/images/location.webp"
              alt="Map Location"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="px-6 py-2 bg-[#444d1e] text-white font-semibold rounded-full hover:bg-[#7a8727] transition duration-200 w-full">
            Get Directions
          </button>
        </div>



        <header className="absolute top-0 left-0 right-0 mx-auto flex justify-center p-4 z-10">
  <nav className="bg-[#7a8727] rounded shadow-md p-2">
    <ul className="flex space-x-6 text-white">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About Us</a></li>
      <li><a href="/menu">Menu</a></li>
      <li><a href="/special">Pakistani Dishes</a></li>
      <li><a href="/contact">Contact Us</a></li>
    </ul>
  </nav>
</header>


        {/* Contact Section */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold text-[#444d1e] mb-4 text-center md:text-left">Our Location</h2>
          <div className="bg-[#e8e8e4] p-6 rounded-lg shadow-lg">
            <p className="text-[#444d1e] font-medium">📍 Address:</p>
            <p className="text-[#555555] mb-4">123 Fake Street, City Center, Cityville</p>
            <p className="text-[#444d1e] font-medium">📞 Phone:</p>
            <p className="text-[#555555] mb-4">(123) 456-7890</p>
            <p className="text-[#444d1e] font-medium">✉️ Email:</p>
            <p className="text-[#555555]">contact@theheritagegrills.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
