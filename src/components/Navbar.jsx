import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-red-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Discover China</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-red-200">Home</Link></li>
          <li><Link to="/attractions" className="hover:text-red-200">Attractions</Link></li>
          <li><Link to="/culture" className="hover:text-red-200">Culture</Link></li>
          <li><Link to="/plan" className="hover:text-red-200">Plan Your Trip</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
