import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { mContext } from "../context/Themecontext";
import { Link } from "react-router-dom";

function Navbar() {
  const { theme, handleToggle } = mContext();

  return (
    <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-black dark:bg-gray-800 text-white">
      
      {/* Logo */}
      <div>
        <img
          src="/logo.png"
          alt="Renuka Kapse Logo"
          className="w-12 h-12 object-contain"
        />
      </div>

      {/* Navigation */}
      <ul className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
        <li className="hover:underline underline-offset-4 cursor-pointer">
          <Link to="/">Home</Link>
        </li>

        <li className="hover:underline underline-offset-4 cursor-pointer">
          <Link to="/about">About</Link>
        </li>

        <li className="hover:underline underline-offset-4 cursor-pointer">
          <Link to="/experience">Experience</Link>
        </li>

        <li className="hover:underline underline-offset-4 cursor-pointer">
          <Link to="/projects">Projects</Link>
        </li>

        <li className="hover:underline underline-offset-4 cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>

        {/* Theme Toggle */}
        <li>
          <button
            onClick={handleToggle}
            className="bg-white text-black dark:bg-gray-700 dark:text-white px-3 py-2 rounded-lg transition"
            aria-label="Toggle theme"
          >
            {theme ? (
              <FaMoon className="text-lg" />
            ) : (
              <IoSunnyOutline className="text-lg" />
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;