import React, { useState } from 'react';
import { FaQuestionCircle, FaPaperPlane } from 'react-icons/fa';

const AskDoubt = () => {
  const [form, setForm] = useState({ name: '', email: '', doubt: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', doubt: '' });
  };

  const mockDoubts = [
    {
      user: 'Riya S.',
      doubt: 'How to understand trigonometric identities easily?',
      answer: 'Use visual triangle methods and memorize key identities.',
    },
    {
      user: 'Aman K.',
      doubt: 'What’s the best way to prepare for scholarship exams?',
      answer: 'Focus on previous year papers and time-based quizzes.',
    },
  ];

  return (
    <div className="px-4 sm:px-6 pt-28 pb-12 max-w-4xl mx-auto text-gray-800">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 leading-tight">Ask a Doubt</h1>
        <p className="text-base sm:text-lg text-gray-600 mt-2">
          Have a question? Ask freely — we’ll help you clear it!
        </p>
      </div>

      {/* Doubt Form */}
      <div className="bg-white rounded-lg shadow-md border p-6 mb-12">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaQuestionCircle className="text-blue-500" /> Submit Your Doubt
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300"
          />
          <textarea
            name="doubt"
            value={form.doubt}
            onChange={handleChange}
            placeholder="Write your doubt here..."
            rows="4"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2"
          >
            <FaPaperPlane /> Submit
          </button>
          {submitted && (
            <p className="text-green-600 text-sm mt-2">Your doubt has been submitted!</p>
          )}
        </form>
      </div>

      {/* Previously Asked Doubts */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Previously Answered Doubts</h2>
        <div className="space-y-4">
          {mockDoubts.map((item, idx) => (
            <div
              key={idx}
              className="border p-4 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition"
            >
              <p className="text-sm text-gray-700">
                <strong>{item.user}:</strong> {item.doubt}
              </p>
              <p className="text-sm text-green-700 mt-2">
                <strong>Answer:</strong> {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AskDoubt;
