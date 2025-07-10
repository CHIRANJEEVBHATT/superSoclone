import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md text-gray-700 flex items-center justify-between px-6 py-3 shadow-md sticky top-0 z-50 ">
    
      <img src="superco.png" alt="logo" className="h-12" />

      
      <div className="flex gap-6 items-center">
        <Link className="text-lg hover:text-blue-600" to="/home">Templates</Link>
        <Link className="text-lg hover:text-blue-600" to="/product">Showcase</Link>
        <Link className="text-lg hover:text-blue-600" to="/features">Features</Link>
        <Link className="text-lg hover:text-blue-600" to="/pricing">Pricing</Link>
        <Link className="text-lg hover:text-blue-600" to="/guides">Guides</Link>
        <Link className="text-lg hover:text-blue-600" to="/blog">Blog</Link>

      
        <button className="text-sm font-medium bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">
          Sign in
        </button>
        <button className="text-sm font-medium bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition">
          Get started free
        </button>
      </div>
    </nav>
  );
};

export default Header;

