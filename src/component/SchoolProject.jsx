import React from 'react';
import academic from '../assets/Academy project/Capture.png';

function SchoolProject() {
  const schoolProjects = [
    {
      title: 'Hammer car delership web System',
      description: 'A system to To sell And Rent Cars.',
      link: '#',
      image: academic,
    },
    {
      title: 'cooming soon',
      description: '...',
      link: '#',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'cooming soon',
      description: '..',
      link: '#',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-teal-400">Academic Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {schoolProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-lg transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-teal-400 mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex justify-end h-fit">
              <a href="https://hammer-car.vercel.app/">
              <span
                className= "font-medium text-white hover:underline bg-pink-700 px-4 py-2 rounded-lg shadow-lg hover:shadow-pink-500/50 transition-all duration-300 w-fit ml-auto animate-pulse hover:animate-none"
              >
                View Project
              </span>
              </a>
              
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SchoolProject;