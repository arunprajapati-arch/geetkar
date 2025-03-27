"use client"
import { FC, useState } from 'react';
import Link from 'next/link';

const Navbar: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-black z-50 fixed top-0 w-full text-white py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-xl font-bold text-yellow-500">
                    <Link href="/">Geetkar</Link>
                </div>
                
                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    <li className="hover:text-gray-300">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-gray-300">
                        <Link href="#services">Services</Link>
                    </li>
                    <li className="hover:text-gray-300">
                        <Link href="/lessons">Artists</Link>
                    </li>
                    <li className="hover:text-gray-300">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
                
                {/* Login Button (Desktop) */}
                <div className="hidden md:block">
                    <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded">
                        Get Started
                    </button>
                </div>
                
                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-black py-2">
                    <div className="container mx-auto px-4">
                        <ul className="space-y-2">
                            <li className="hover:text-gray-300 py-2">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="hover:text-gray-300 py-2">
                                <Link href="#services">Services</Link>
                            </li>
                            <li className="hover:text-gray-300 py-2">
                                <Link href="/lessons">Lessons</Link>
                            </li>
                            <li className="hover:text-gray-300 py-2">
                                <Link href="/contact">Contact</Link>
                            </li>
                            <li className="py-2">
                                <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded w-full text-left">
                                    Ger Started
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;