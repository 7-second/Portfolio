import React from 'react';
import { motion } from 'framer-motion';

function ShowInfo() {
  const skills = [
    { name: 'JavaScript', icon: '🟨' },
    { name: 'React', icon: '⚛️' },
    { name: 'Tailwind CSS', icon: '🌬️' },
    { name: 'HTML', icon: '📄' },
    { name: 'CSS', icon: '🎨' },
  ];

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio to showcase my skills and projects.',
      link: '#',
    },
    {
      title: 'E-commerce App',
      description: 'A fully functional e-commerce application with React and Tailwind CSS.',
      link: '#',
    },
    {
      title: 'Weather App',
      description: 'A weather forecasting app using JavaScript and OpenWeather API.',
      link: '#',
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-10">
      {/* Skills Section */}
      <h2 className="text-3xl font-bold text-center mb-8 text-teal-400">My Skills</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-gray-800 to-gray-700 shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-teal-400">{skill.name}</h3>
          </motion.div>
        ))}
      </div>

      {/* Projects Section */}
      <h2 className="text-3xl font-bold text-center mt-16 mb-8 text-teal-400">My Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-gray-800 to-gray-700 shadow-md rounded-lg p-6 hover:shadow-lg transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-teal-400 mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-teal-400 font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ShowInfo;