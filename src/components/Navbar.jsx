import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { mContext } from "../context/Themecontext";
import { Link } from "react-router-dom";

function Navbar() {
  const { theme, setTheme, handleToggle } = mContext();
  return (
    <div className="flex items-center justify-between px-2 py-2 h-15 bg-black text-black dark:bg-gray-800 dark:text-white">
      <div>
        <img src="/logo.png" />
      </div>
      <ul className="flex gap-5  text-white">
        <li className="hover:underline underline-offset-4 cursor-pointer text-white">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:underline underline-offset-4 cursor-pointer text-white">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:underline underline-offset-4 cursor-pointer text-white">
          <Link to="/experience">Experience</Link>
        </li>
        <li className="hover:underline underline-offset-4 cursor-pointer text-white">
          <Link to="/contact">Contact</Link>
        </li>
        <button
          onClick={handleToggle}
          className="bg-white text-black px-4 py-1 rounded"
        >
          {theme ? <FaMoon /> : <IoSunnyOutline />}
        </button>
      </ul>
    </div>
  );
}
export default Navbar;
