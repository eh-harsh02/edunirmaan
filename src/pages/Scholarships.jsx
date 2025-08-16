import React from 'react';
import { FaGraduationCap, FaExternalLinkAlt } from 'react-icons/fa';

const Scholarships = () => {
  const scholarships = [
    {
      title: 'EduSupport Merit Scholarship',
      description: 'For students scoring 85%+ in academics or excelling in co-curriculars.',
      eligibility: 'Grades 10–12 | Any stream',
      deadline: 'July 15, 2025',
      link: '#',
    },
    {
      title: 'STEM Talent Grant',
      description: 'Specialized for girls pursuing STEM education from rural areas.',
      eligibility: 'Grade 12 pass-outs | STEM stream',
      deadline: 'August 1, 2025',
      link: '#',
    },
    {
      title: 'Financial Aid for Underprivileged',
      description: 'Covers tuition and study resources for low-income families.',
      eligibility: 'Any class | Income proof required',
      deadline: 'September 10, 2025',
      link: '#',
    },
  ];

  return (
    <div className="px-4 sm:px-6 pt-28 pb-12 max-w-6xl mx-auto text-gray-800">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 leading-tight">Scholarship Opportunities</h1>
        <p className="text-base sm:text-lg text-gray-600 mt-2">
          Discover financial aid and support to help you continue your education.
        </p>
      </div>

      {/* Scholarships List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {scholarships.map((scholar, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-lg p-5 shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center gap-2 mb-3">
              <FaGraduationCap className="text-blue-600 text-xl" />
              <h3 className="text-lg font-semibold">{scholar.title}</h3>
            </div>
            <p className="text-sm text-gray-700 mb-2">{scholar.description}</p>
            <p className="text-sm text-gray-600">
              <strong>Eligibility:</strong> {scholar.eligibility}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              <strong>Deadline:</strong> {scholar.deadline}
            </p>
            <a
              href={scholar.link}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
            >
              Apply Now <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        ))}
      </div>

      {/* Tip Section (Optional) */}
      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500">
          📌 Tip: Always double-check deadlines and eligibility before applying. Scholarships are updated monthly.
        </p>
      </div>
    </div>
  );
};

export default Scholarships;
