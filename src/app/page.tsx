import React from 'react';
import Header from './components/header';

const Page = () => {
  return (
    <div
      className="relative w-screen h-screen bg-cover bg-center bg-fixed overflow-x-hidden"
      style={{ backgroundImage: "url('/images/food.png')",  backgroundPosition: "center top 20%" }}
    >
      <Header />


    </div>
  );
};

export default Page;
