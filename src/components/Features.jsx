import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: "fas fa-brain",
    title: "Career Quiz",
    desc: "Take smart quizzes to find your strengths.",
    link: "/quiz",
  },
  {
    icon: "fas fa-book-open",
    title: "Learning",
    desc: "Access curated lessons and resources.",
    link: "/learning",
  },
  {
    icon: "fas fa-robot",
    title: "Ask Doubt (AI)",
    desc: "Chat with our AI mentor anytime.",
    link: "/ask-doubt",
  },
  {
    icon: "fas fa-award",
    title: "Scholarships",
    desc: "Find local and national scholarship options.",
    link: "/scholarships",
  },
];

const Features = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feat, index) => (
          <div key={index} className="text-center p-6 shadow-md rounded-lg hover:shadow-lg transition">
            <i className={`${feat.icon} text-blue-600 text-3xl mb-4`}></i>
            <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
            <p className="text-gray-600 mb-4">{feat.desc}</p>
            <Link to={feat.link} className="text-blue-600 hover:underline">Explore →</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
