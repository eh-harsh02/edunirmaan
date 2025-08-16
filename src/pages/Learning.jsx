import React from 'react';
import { FaBook, FaVideo, FaFilePdf } from 'react-icons/fa';

const Learning = () => {
  const topics = [
    {
      title: 'Mathematics',
      description: 'Practice formulas, concepts, and solve problems.',
      icon: <FaBook className="text-blue-600 text-2xl" />,
    },
    {
      title: 'Science',
      description: 'Explore physics, chemistry, and biology with experiments.',
      icon: <FaBook className="text-green-600 text-2xl" />,
    },
    {
      title: 'Coding',
      description: 'Learn the basics of programming, logic, and web development.',
      icon: <FaBook className="text-purple-600 text-2xl" />,
    },
    {
      title: 'General Knowledge',
      description: 'Stay updated with facts, current affairs, and quiz prep.',
      icon: <FaBook className="text-orange-500 text-2xl" />,
    },
  ];

  const resourceTypes = [
    { name: 'Video Tutorials', icon: <FaVideo className="text-pink-600" /> },
    { name: 'PDF Notes', icon: <FaFilePdf className="text-red-600" /> },
    { name: 'Articles', icon: <FaBook className="text-yellow-600" /> },
  ];

  return (
    <div className="px-4 sm:px-6 pt-28 pb-12 max-w-7xl mx-auto text-gray-800">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 leading-tight">Learning Hub</h1>
        <p className="text-base sm:text-lg text-gray-600 mt-2">
          Dive into our curated learning resources and grow your knowledge.
        </p>
      </div>

      {/* Subject Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        {topics.map((topic, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md border p-5 space-y-2 hover:shadow-lg transition">
            <div>{topic.icon}</div>
            <h3 className="text-lg font-semibold">{topic.title}</h3>
            <p className="text-sm text-gray-600">{topic.description}</p>
            <button className="mt-2 inline-block px-4 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
              Explore
            </button>
          </div>
        ))}
      </div>

      {/* Resource Types */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Resources Available</h2>
        <div className="flex flex-wrap gap-4">
          {resourceTypes.map((res, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-md border text-sm hover:bg-blue-50"
            >
              {res.icon}
              {res.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learning;
