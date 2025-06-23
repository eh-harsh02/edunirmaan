import React, { useState } from 'react';
import { FaSearch, FaQuestionCircle, FaBookOpen, FaBug, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const GetHelp = () => {
  const [form, setForm] = useState({ name: '', email: '', category: '', description: '', file: null });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your request has been submitted.');
  };

  return (
    <div className="px-4 sm:px-6 pt-28 pb-10 max-w-7xl mx-auto text-gray-800">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 leading-tight">Get Help</h1>
        <p className="text-base sm:text-lg text-gray-600 mt-2">We’re here to support your learning journey.</p>
      </div>

      {/* Search Bar */}
      <div className="mb-8 flex justify-center">
        <div className="relative w-full max-w-xl">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search your issue, e.g., quiz not working"
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
      </div>

      {/* FAQs Section */}
      <div className="grid gap-6 md:grid-cols-2 mb-12">
        {[
          {
            category: 'General FAQs',
            questions: ['What is EduNirmaan?', 'How to sign up?', 'Is it free?'],
          },
          {
            category: 'Quiz FAQs',
            questions: ['Can I retake a quiz?', 'How is scoring done?', 'Are there time limits?'],
          },
          {
            category: 'Learning FAQs',
            questions: ['How do I access study materials?', 'Video playback isn’t working.'],
          },
          {
            category: 'AskDoubt FAQs',
            questions: ['Who answers questions?', 'When will I get a reply?'],
          },
          {
            category: 'Scholarships FAQs',
            questions: ['How to apply?', 'Who is eligible?', 'Deadlines?'],
          },
        ].map((faq, idx) => (
          <div key={idx} className="bg-white p-5 rounded-lg shadow-md border">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <FaQuestionCircle className="text-blue-500" /> {faq.category}
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              {faq.questions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Popular Queries */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaBookOpen className="text-green-600" /> Popular Queries
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            'How to start learning?',
            'Where to find my quizzes?',
            'How to ask a doubt?',
            'Steps to apply for a scholarship',
            'Technical issues on the site',
          ].map((item, idx) => (
            <button
              key={idx}
              className="bg-blue-100 text-blue-700 px-4 py-2 rounded-md hover:bg-blue-200 transition"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Report an Issue / Submit a Query */}
      <div className="bg-gray-100 p-6 rounded-lg mb-12">
        <h2 className="text-xl font-semibold mb-4">Report an Issue / Submit a Query</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-md border border-gray-300"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-md border border-gray-300"
            onChange={handleChange}
            required
          />
          <select
            name="category"
            className="w-full px-4 py-2 rounded-md border border-gray-300"
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option>Quiz</option>
            <option>Learning</option>
            <option>Scholarships</option>
            <option>Website Issue</option>
          </select>
          <textarea
            name="description"
            placeholder="Describe your issue..."
            className="w-full px-4 py-2 rounded-md border border-gray-300"
            rows="4"
            onChange={handleChange}
            required
          ></textarea>
          <input type="file" name="file" onChange={handleChange} className="w-full" />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Technical Issues Section */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaBug className="text-red-500" /> Technical Issues Help
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            'Login or Signup issues',
            'Quiz not loading',
            'File/document not uploading',
            'Website page errors',
            'Mobile responsiveness issues',
          ].map((issue, idx) => (
            <div
              key={idx}
              className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm text-sm"
            >
              {issue}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Support */}
      <div className="text-center space-y-2">
        <h2 className="text-xl font-semibold mb-2">Contact Support</h2>
        <p>
          <FaEnvelope className="inline mr-2 text-blue-600" />
          Email:{' '}
          <a href="mailto:support@edunirmaan.in" className="text-blue-600 underline">
            support@edunirmaan.in
          </a>
        </p>
        <p>
          <FaWhatsapp className="inline mr-2 text-green-600" />
          WhatsApp:{' '}
          <a href="https://wa.me/91XXXXXXXXXX" className="text-green-600 underline">
            +91 XXXXX-XXXXX
          </a>
        </p>
        <p className="text-gray-500">Operating Hours: 10 AM – 6 PM (Mon–Sat)</p>
      </div>
    </div>
  );
};

export default GetHelp;
