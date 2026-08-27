import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex flex-col items-center justify-center text-center px-4">

=======
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-blue-100 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 flex flex-col items-center justify-center text-center px-4 transition-colors duration-300">

      {/* Profile Image */}
>>>>>>> a8b75d03ab7250ef76a89e32c6b1bf1a9e1f6c96
      <div className="relative group">
        <img
          src="/myprofile.png"
          alt="profile"
<<<<<<< HEAD
          className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-2xl transition duration-500 group-hover:scale-105"
        />
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-white mt-6">
        Renuka Kapse
      </h1>

      <p className="text-xl md:text-2xl text-slate-300 mt-2">
        Full Stack Developer
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-8">

        <button
          onClick={() => navigate("/whyhireme")}
          className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
=======
          className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-2xl transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Name */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mt-6">
        Renuka Kapse
      </h1>

      {/* Role */}
      <p className="text-xl md:text-2xl text-gray-600 dark:text-slate-300 mt-2">
        Full Stack Developer
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <button
          onClick={() => navigate("/whyhireme")}
          className="px-6 py-3 border border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition"
>>>>>>> a8b75d03ab7250ef76a89e32c6b1bf1a9e1f6c96
        >
          Hire Me
        </button>

        <a
          href="/Renuka_Kapse_Resume.pdf"
          download
<<<<<<< HEAD
          className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
=======
          className="px-6 py-3 border border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition"
>>>>>>> a8b75d03ab7250ef76a89e32c6b1bf1a9e1f6c96
        >
          Download CV
        </a>

        <button
          onClick={() => navigate("/projects")}
<<<<<<< HEAD
          className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
        >
          Projects
        </button>

=======
          className="px-6 py-3 border border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition"
        >
          Projects
        </button>
>>>>>>> a8b75d03ab7250ef76a89e32c6b1bf1a9e1f6c96
      </div>
    </div>
  );
}

export default Hero;