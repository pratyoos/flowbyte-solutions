import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          Flowbyte <br /> Solutions
        </Link>
        <ul className="flex space-x-6 items-center text-gray-800 dark:text-white font-medium">
          <li>
            <Link to="/about" className="hover:text-blue-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-600 transition">
              Services
            </Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-blue-600 transition">
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/get-started">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;