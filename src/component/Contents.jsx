import React from 'react';
import { motion } from 'framer-motion';
import academic from '../assets/Academy project/Capture.png'; 
import food from '../assets/Academy project/food.png'; 

function ShowInfo() {
  const skills = [
    { name: 'JavaScript', icon: '🟨', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'React', icon: '⚛️', link: 'https://reactjs.org/' },
    { name: 'Tailwind CSS', icon: '🌬️', link: 'https://tailwindcss.com/' },
    { name: 'HTML', icon: '📄', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', icon: '🎨', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
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
 

 {/* schoolProjects */}

    <div className="bg-gray-900 text-white py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-teal-400">Academic Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {schoolProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-lg transition flex flex-col justify-between h-full"
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
          </a>
        ))}
      </div>
    </div>
 </>
  );
}

export default ShowInfo