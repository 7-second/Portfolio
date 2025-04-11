import React from 'react';
import { motion } from 'framer-motion';

function ShowInfo() {
  const skills = [
    { name: 'JavaScript', icon: '🟨', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'React', icon: '⚛️', link: 'https://reactjs.org/' },
    { name: 'Tailwind CSS', icon: '🌬️', link: 'https://tailwindcss.com/' },
    { name: 'HTML', icon: '📄', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', icon: '🎨', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  ];

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio to showcase my skills and projects.',
      link: '#', // Replace with the actual link
    },
    {
      title: 'E-commerce App',
      description: 'A fully functional e-commerce application with React and Tailwind CSS.',
      link: '#', // Replace with the actual link
    },
    {
      title: 'Weather App',
      description: 'A weather forecasting app using JavaScript and OpenWeather API.',
      link: '#', // Replace with the actual link
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-4">
      {/* Skills Section */}
      <h2 className="text-3xl font-bold text-center mb-8 text-teal-400">My Skills</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {skills.map((skill, index) => (
          <a
            key={index}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-teal-400">{skill.name}</h3>
          </a>
        ))}
      </div>

      {/* Projects Section */}
      <h2 className="text-3xl font-bold text-center mt-16 mb-8 text-teal-400">My Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block" // Added 'block' to make the anchor fill the card
          >
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-700 shadow-md rounded-lg p-6 hover:shadow-lg transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-teal-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <span className="text-teal-400 font-medium hover:underline">
                View Project
              </span>
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ShowInfo;