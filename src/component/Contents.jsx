import React from 'react';
import { motion } from 'framer-motion';
import academic from '../assets/Academy project/Capture.png';
import food from '../assets/Academy project/food.png';
import p1 from "../assets/personal project/best.png"


function ShowInfo() {
  const skills = [
    { name: 'JavaScript', icon: '🟨', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'React', icon: '⚛️', link: 'https://reactjs.org/' },
    { name: 'Tailwind CSS', icon: '🌬️', link: 'https://tailwindcss.com/' },
    { name: 'HTML', icon: '📄', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', icon: '🎨', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  ];

  const personalProjects = [
    {
      title: 'B-Movie :  (Movie Web App)',
      description: "Let's watch and enjoy together🥰",
      link: 'https://b-moviee.vercel.app/', // Replace with your project link
      image: p1 , // Replace with the actual image path
      status: 'developing', // Add a status property
    },
    {
      title: 'Personal Project 2 comming soon...',
      description: 'comming soon project 2.',
      link: '#', // Keep it as '#' or a relevant placeholder
      image: "https://media.istockphoto.com/id/1411798446/vector/modern-coming-soon-under-construction-sticker-banner.jpg?s=612x612&w=0&k=20&c=KgQ9eYEfuzTdmc5ypmMYoz8JHPTbe_TjEXxyxNixKQ4=", // Replace with the actual image path
      status: 'coming-soon', // Add a status property
    },
    // Add more personal projects here
  ];

  const schoolProjects = [
    {
      title: 'Hammer Car Dealership Web System',
      description: 'A system to sell and rent cars.',
      link: 'https://hammer-car.vercel.app/',
      image: academic,
    },
    {
      title: 'B-foods ',
      description: 'onlne food ordering system',
      link: 'https://b-food.vercel.app/',
      image: food,
    },
    {
      title: 'Coming Soon',
      description: '.................',
      link: '#',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <>
      <div className="bg-gray-900 text-white py-4">
        {/* Skills Section */}
        <h2 className="text-3xl font-bold text-center mb-8 text-teal-400">My Skills</h2>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4 px-4">
          {skills.map((skill, index) => (
            <motion.a
              key={index}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-400 text-gray-900 px-6 py-3 rounded-full font-medium shadow-lg hover:bg-teal-500 hover:shadow-xl transition-transform transform hover:scale-105 flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">{skill.icon}</span>
              {skill.name}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Personal Projects Section */}
      <div className="bg-gray-900 text-white py-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-pink-500">Personal Projects</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {personalProjects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-gray-800 shadow-md rounded-lg p-6 flex flex-col justify-between h-full hover:scale-105 transition-transform duration-300 ${project.status === 'developing' ? 'border-l-4 border-yellow-500' : ''} ${project.status === 'coming-soon' ? 'border-l-4 border-gray-500' : ''}`}
              whileHover={{ boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)" }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                {project.status === 'developing' && (
                  <div className="absolute top-2 left-2 bg-yellow-500 text-gray-900 text-xs font-semibold rounded-md px-2 py-1">
                    Developing...
                  </div>
                )}
                {project.status === 'coming-soon' && (
                  <div className="absolute top-2 left-2 bg-gray-500 text-white text-xs font-semibold rounded-md px-2 py-1">
                    Coming Soon
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-pink-500 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex justify-end ">
                <span
                  className={`font-medium text-white hover:underline ${project.status === 'developing' ? 'bg-yellow-600 hover:shadow-yellow-500/50' : (project.status === 'coming-soon' ? 'bg-gray-600 hover:shadow-gray-500/50 cursor-not-allowed' : 'bg-purple-700 hover:shadow-purple-500/50')} px-4 py-2 rounded-lg shadow-lg transition-all duration-300 w-fit ${project.status !== 'coming-soon' ? 'animate-pulse hover:animate-none' : ''}`}
                >
                  View Project
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* schoolProjects */}
      <div className="bg-gray-900 text-white py-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-teal-400">Academic Projects</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {schoolProjects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 shadow-md rounded-lg p-6 flex flex-col justify-between h-full hover:scale-105 transition-transform duration-300"
              whileHover={{ boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-teal-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex justify-end ">
                <span
                  className="font-medium text-white hover:underline bg-pink-700 px-4 py-2 rounded-lg shadow-lg hover:shadow-pink-500/50 transition-all duration-300 w-fit animate-pulse hover:animate-none"
                >
                  View Project
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowInfo;