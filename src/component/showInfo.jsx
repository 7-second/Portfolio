import React from 'react';

function ShowInfo({ title, description, details }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-gray-700">
        <h3 className="text-xl font-semibold mb-2">Details:</h3>
        <p>{details}</p>
      </div>
    </div>
  );
}

export default ShowInfo;