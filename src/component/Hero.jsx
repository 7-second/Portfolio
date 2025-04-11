import React, { useRef, useEffect, useState } from 'react';
import profile from '../assets/profile.jpg';
import documentPhoto from '../assets/doc.jpg'; // Add your document photo here
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function Hero() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [showDocument, setShowDocument] = useState(false); // State to toggle document photo
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Biniyam Gossa", "a Web Developer", "AI Specialist", "a Continuous Learner"],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
    };

    typedRef.current = new Typed('.typed', options);

    return () => {
      typedRef.current.destroy();
    };
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: '#4fd1c5',
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        outModes: 'out',
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
      },
    },
    background: {
      gradient: {
        enable: true,
        type: 'radial',
        colors: ['#1a202c', '#2d3748'],
        stops: [0.3, 1],
      },
    },
  };

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  const handleDocumentClick = () => {
    setShowDocument(!showDocument);
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
            src={profile}
            alt="Profile"
          />
        </div>
      )}
      {showDocument && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleDocumentClick}
        >
          <img
            className="w-auto h-auto max-w-full max-h-full rounded-lg"
            src={documentPhoto}
            alt="Document"
          />
        </div>
      )}
      <section className="h-fit pb-2 flex items-center justify-center relative overflow-hidden bg-gray-800">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="absolute inset-0"
        />
        <div className="text-center px-6 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-6"
          >
            <img
              onClick={handleImageClick}
              src={profile}
              alt="Profile"
              className="w-40 h-40 rounded-full border-4 border-teal-400 shadow-lg cursor-pointer transition-transform duration-300"
            />
          </motion.div>
          <div className="bg-gray-900 bg-opacity-70 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              Hi, I'm <span className="text-teal-400 typed"></span>
            </h1>
            <p className="text-lg md:text-lg text-gray-300 mb-4">
              A passionate <span className="text-teal-400">Web Developer</span> with love for creating intuitive user experiences.
            </p>
            <p className="text-md md:text-md text-gray-400 mb-6 text-left">
              I graduated from <span className="text-teal-400">Hope University College</span> with a Bachelor's Degree.
              Specialized in <span className="text-teal-400">Frontend Development</span> using modern tools like
              <span className="text-teal-400"> React</span>, <span className="text-teal-400">Tailwind CSS</span>, and
              <span className="text-teal-400"> JavaScript</span>. I believe that continuous learning is crucial in this field.
            </p>
            <div className="space-x-4">
              <motion.a
                href="#projects"
                className="bg-teal-400 text-gray-900 px-5 py-2 rounded-lg font-medium hover:bg-teal-500 transition text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="border border-teal-400 text-teal-400 px-5 py-2 rounded-lg font-medium hover:bg-teal-400 hover:text-gray-900 transition text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
              <motion.button
                onClick={handleDocumentClick}
                className="bg-gray-700 text-teal-400 px-5 py-2 rounded-lg font-medium hover:bg-gray-600 transition text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Show Document
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;