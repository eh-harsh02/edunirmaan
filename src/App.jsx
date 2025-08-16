import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Quiz from './pages/Quiz';
import Learning from './pages/Learning';
import AskDoubt from './pages/AskDoubt';
import Scholarships from './pages/Scholarships';
import GetHelp from './pages/GetHelp';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<><Hero /><Features /></>} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/ask-doubt" element={<AskDoubt />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/get-help" element={<GetHelp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
