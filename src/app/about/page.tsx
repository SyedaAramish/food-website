// src/pages/about.js

import React from 'react';

const AboutPage = () => {
  return (
    <div className="relative w-screen h-screen bg-[#7a8727] overflow-hidden">
      <header className="absolute top-0 left-0 right-0 flex justify-center space-x-4 p-4 z-10">
        <nav className="bg-[#7a8727] rounded shadow-md p-2">
          <ul className="flex space-x-6 text-white">
            <li><a href="/">Home</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/special">Pakistani Dishes</a></li>
            <li><a href="/location">Location</a></li>
          
          </ul>
        </nav>
      </header>

      <img
        src="/images/about.png"
        alt="About Us"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default AboutPage;
