// src/app/contact/page.tsx

"use client"; // Ensure this is a client component

import React from 'react';

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/back3.jpg')" }}
    >
      {/* Overlay for better text visibility */}
      <div className="bg-black bg-opacity-70 min-h-screen flex flex-col items-center justify-center text-white p-8">
        
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#FDDB53] mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-center max-w-xl mb-8 text-lg">
          The Heritage Grill would love to hear from you! Fill out the form below.
        </p>

        {/* Contact Form */}
        <form className="w-full max-w-lg bg-[#7a8727] bg-opacity-90 p-8 rounded-lg shadow-lg space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded-md text-[#333] focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md text-[#333] focus:outline-none"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 h-32 rounded-md text-[#333] focus:outline-none"
            required
          />
          <button type="submit" className="w-full py-3 bg-[#444d1e] hover:bg-[#333333] text-white font-semibold rounded-md transition duration-300">
            Send Message
          </button>
        </form>
      </div>
      <header className="absolute top-0 left-100 right-0 mx-auto flex justify-center p-4 z-10">
  <nav className=" rounded shadow-md p-2">
    <ul className="flex space-x-6 text-white">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About Us</a></li>
      <li><a href="/menu">Menu</a></li>
      <li><a href="/special">Pakistani Dishes</a></li>
      <li><a href="/contact">Contact Us</a></li>
    </ul>
  </nav>
</header>
    </div>
  );
};

export default Contact;
