import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 text-center mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Empowering Rural Youth Through Education</h1>
        <p className="text-lg text-gray-600 mb-6">
          Take quizzes, access learning resources, ask doubts to our AI mentor, and explore scholarships—your future starts here.
        </p>
        <Link to="/quiz" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Start Career Quiz
        </Link>
      </div>
    </section>
  );
};

export default Hero;
