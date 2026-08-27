import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex flex-col items-center justify-center text-center px-4">

      <div className="relative group">
        <img
          src="/myprofile.png"
          alt="profile"
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
        >
          Hire Me
        </button>

        <a
          href="/Renuka_Kapse_Resume.pdf"
          download
          className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
        >
          Download CV
        </a>

        <button
          onClick={() => navigate("/projects")}
          className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
        >
          Projects
        </button>

      </div>
    </div>
  );
}

export default Hero;