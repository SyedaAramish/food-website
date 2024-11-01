// src/app/components/header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center items-center p-4">
            <nav>
                <ul className="flex space-x-4 text-white text-base sm:text-lg font-semibold">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/menu">Menu</Link></li>
                    <li><Link href="/special">Pakistani Dishes</Link></li>
                    <li><Link href="/location">Location</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
