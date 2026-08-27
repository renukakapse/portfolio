import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Hero from "./pages/Hero";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import WhyHireMe from "./components/WhyHireMe";
import Projects from "./pages/Projects";

function App() {
  return (
<<<<<<< HEAD
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 min-h-screen">
=======
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 min-h-screen dark:bg-gray-900 dark:text-white">
>>>>>>> a8b75d03ab7250ef76a89e32c6b1bf1a9e1f6c96
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/whyhireme" element={<WhyHireMe />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> a8b75d03ab7250ef76a89e32c6b1bf1a9e1f6c96
