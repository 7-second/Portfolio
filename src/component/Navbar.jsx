import React, { useState } from 'react';
import g from "../assets/g.jpg";

function Navbar() {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <>
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleImageClick}
        >
          <img
            className="w-auto h-auto max-w-full max-h-full rounded-lg"
            src={g}
            alt="Profile"
          />
        </div>
      )}
      <nav className="bg-gray-700 text-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-1 text-2xl font-bold">
              <img
                onClick={handleImageClick}
                className={`w-[50px] h-[50px] rounded-full border-2 border-teal-400 shadow-lg cursor-pointer transition-transform duration-300 ${
                  isZoomed ? "scale-150" : "scale-100"
                }`}
                src={g}
                alt="Profile"
              />
              <a href="#home" className="hover:text-teal-400">Biniyam Goosa</a>
            </div>
            <ul className="hidden md:flex space-x-6">
              <li><a href="#about" className="hover:text-teal-400">About</a></li>
              <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
              <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
              <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
            </ul>
            <div className="md:hidden">
              <button className="text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;