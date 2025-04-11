import React from 'react';

function SchoolProject() {
  const schoolProjects = [
    {
      title: 'Library Management System',
      description: 'A system to manage library books, members, and borrowing records.',
      link: '#',
    },
    {
      title: 'Student Attendance Tracker',
      description: 'A web app to track student attendance and generate reports.',
      link: '#',
    },
    {
      title: 'Online Quiz System',
      description: 'An interactive platform for conducting online quizzes and assessments.',
      link: '#',
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-teal-400">School Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {schoolProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-teal-400 mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <span className="text-teal-400 font-medium hover:underline">View Project</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SchoolProject;