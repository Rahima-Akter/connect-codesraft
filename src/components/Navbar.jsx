import { useState } from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-sm z-50 px-4 lg:px-12 py-4 flex justify-between items-center">
      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="btn btn-ghost btn-square"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        
        {/* Mobile menu dropdown - now controlled by state */}
        {isMenuOpen && (
          <div className="absolute left-0 top-16 w-full bg-white shadow-lg">
            <div className="flex flex-col p-4 space-y-2">
              <NavLink 
                to="/" 
                className="px-4 py-2 hover:bg-gray-100 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="about" 
                className="px-4 py-2 hover:bg-gray-100 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink 
                to="blog" 
                className="px-4 py-2 hover:bg-gray-100 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </NavLink>
            </div>
          </div>
        )}
      </div>

      {/* Logo */}
      <NavLink to="/" className="text-xl font-bold ml-4 lg:ml-0">
        CONNECT.
      </NavLink>

      {/* Desktop navigation */}
      <div className="hidden lg:flex space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-[#85a49a] px-4 py-2 rounded text-white" : "px-4 py-2 hover:bg-gray-100 rounded"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? "bg-[#85a49a] px-4 py-2 rounded text-white" : "px-4 py-2 hover:bg-gray-100 rounded"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="blog"
          className={({ isActive }) =>
            isActive ? "bg-[#85a49a] px-4 py-2 rounded text-white" : "px-4 py-2 hover:bg-gray-100 rounded"
          }
        >
          Blog
        </NavLink>
      </div>

      {/* Contact button */}
      <NavLink 
        to="contact" 
        className="btn bg-[#85a49a] text-white hover:bg-[#6d8c82]"
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;