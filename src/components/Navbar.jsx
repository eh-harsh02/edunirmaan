import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-blue-600 font-bold text-xl">
          <Link to="/">EduNirmaan</Link>
        </div>

        {/* Mobile menu button */}
        <div className="block md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>

        {/* Navigation links */}
        <ul
          className={`md:flex gap-6 items-center ${
            menuOpen ? 'block' : 'hidden'
          } md:block absolute md:static top-full right-4 md:right-0 bg-white md:bg-transparent p-4 md:p-0 rounded-md shadow-md md:shadow-none`}
        >
          <li>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-gray-800 hover:text-blue-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/quiz"
              onClick={() => setMenuOpen(false)}
              className="text-gray-800 hover:text-blue-600"
            >
              Career Quiz
            </Link>
          </li>
          <li>
            <Link
              to="/learning"
              onClick={() => setMenuOpen(false)}
              className="text-gray-800 hover:text-blue-600"
            >
              Learning
            </Link>
          </li>
          <li>
            <Link
              to="/scholarships"
              onClick={() => setMenuOpen(false)}
              className="text-gray-800 hover:text-blue-600"
            >
              Scholarship
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="text-gray-800 hover:text-blue-600"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="bg-gray-100 text-blue-600 px-4 py-2 rounded hover:bg-blue-100 border"
            >
              Sign Up
            </Link>
          </li>
          <li>
            <Link
              to="/get-help"
              onClick={() => setMenuOpen(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Get Help
            </Link>
          </li>
          
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
