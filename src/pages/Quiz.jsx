import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    {
      id: 1,
      question: 'What kind of activities do you enjoy the most?',
      options: ['Solving math problems', 'Helping people', 'Designing things', 'Working with machines'],
    },
    {
      id: 2,
      question: 'Which subject do you like the most?',
      options: ['Mathematics', 'Biology', 'Art', 'Technology'],
    },
    {
      id: 3,
      question: 'What type of work environment appeals to you?',
      options: ['Office setting', 'Outdoor work', 'Creative studio', 'Lab or workshop'],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    setAnswers({ ...answers, [currentIndex]: option });
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const handleRetake = () => {
    setAnswers({});
    setCurrentIndex(0);
    setShowResult(false);
  };

  // Mock career suggestion logic
  const generateCareerSuggestion = () => {
    const answerSet = Object.values(answers);
    if (answerSet.includes('Helping people')) return 'Social Worker';
    if (answerSet.includes('Designing things')) return 'Graphic Designer';
    if (answerSet.includes('Solving math problems')) return 'Data Scientist';
    if (answerSet.includes('Working with machines')) return 'Mechanical Engineer';
    return 'Career Explorer';
  };

  return (
    <div className="px-4 sm:px-6 pt-28 pb-10 max-w-4xl mx-auto text-gray-800">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 leading-tight">Career Quiz</h1>
        <p className="text-base sm:text-lg text-gray-600 mt-2">
          Discover your ideal career path by answering a few short questions.
        </p>
      </div>

      {/* Results Screen */}
      {showResult ? (
        <div className="bg-white rounded-lg shadow-md border p-6 space-y-6 text-center">
          <h2 className="text-2xl font-semibold text-green-700">🎉 Thank you for completing the quiz!</h2>
          <p className="text-lg text-gray-700">
            Based on your answers, a potential career match for you is:
          </p>
          <div className="text-3xl font-bold text-blue-700">
            {generateCareerSuggestion()}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <button
              onClick={handleRetake}
              className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
            >
              Retake Quiz
            </button>
            <a
              href="/learning"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Explore Learning
            </a>
          </div>
        </div>
      ) : (
        // Quiz Questions
        <div className="bg-white rounded-lg shadow-md border p-6 space-y-6">
          <div className="text-sm text-gray-500">
            Question {currentIndex + 1} of {questions.length}
          </div>

          <h2 className="text-xl font-semibold text-gray-800">{questions[currentIndex].question}</h2>

          <div className="grid gap-3">
            {questions[currentIndex].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(option)}
                className={`text-left px-4 py-2 rounded-md border transition ${
                  answers[currentIndex] === option
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-gray-50 hover:bg-blue-50 border-gray-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={prevQuestion}
              disabled={currentIndex === 0}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              Previous
            </button>
            {currentIndex === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
