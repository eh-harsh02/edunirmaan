import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Fetch user from localStorage or redirect to login
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login"); // redirect if not logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Welcome Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome {user ? user.name : "Learner"} 👋
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            {user ? `Logged in as ${user.email}` : "Your personalized learning dashboard"}
          </p>
          <button
            onClick={handleLogout}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Link to="/quiz" className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition text-center">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Career Quiz</h2>
            <p className="text-gray-600">Discover your strengths & career path with quick quizzes.</p>
          </Link>

          <Link to="/learning" className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition text-center">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Learning</h2>
            <p className="text-gray-600">Access curated study materials and resources to boost skills.</p>
          </Link>

          <Link to="/ask-doubt" className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition text-center">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Ask a Doubt</h2>
            <p className="text-gray-600">Get instant help from our AI mentor for your doubts.</p>
          </Link>

          <Link to="/scholarships" className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition text-center">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Scholarships</h2>
            <p className="text-gray-600">Explore financial aid & scholarship opportunities.</p>
          </Link>

          <Link to="/get-help" className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition text-center">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Get Help</h2>
            <p className="text-gray-600">Reach out for academic or career support anytime.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
