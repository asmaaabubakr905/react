import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo (2).svg';


function Nav() {
  return (
    <header className="bg-yellow-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <span className="ml-2 font-bold text-xl text-gray-800">Brand</span>
        </Link>

        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <Link to="/todo" className="hover:text-yellow-600 transition-colors">
                TODO
              </Link>
            </li>
            <li>
              <Link to="/product" className="hover:text-yellow-600 transition-colors">
                PRODUCTS
              </Link>
            </li>
            <li>
              <Link to="/productPage" className="hover:text-yellow-600 transition-colors">
                BOOKS
              </Link>
            </li>
             {/* <li>
              <Link to="/book" className="hover:text-yellow-600 transition-colors">
                BOOKS
              </Link>
            </li> */}
            <li>
              <Link to="/cart" className="hover:text-yellow-600 transition-colors">
                cart
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-yellow-600 transition-colors">
                LOGIN
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;