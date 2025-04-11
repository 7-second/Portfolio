import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold">
            <a href="#home" className="hover:text-teal-400">MyPortfolio</a>
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
  );
}

export default Navbar;