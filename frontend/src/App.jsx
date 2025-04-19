import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Header from './components/layout/Header';
import Home from './pages/Home';
import FreelancerDashboard from './pages/FreelancerDashboard';
import EmployerDashboard from './pages/EmployerDashboard';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
      <div className="min-h-screen bg-gray-50">
          <Header />
          <div className="container mx-auto px-4">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/freelancer-dashboard" element={<FreelancerDashboard />} />
                <Route path="/employer-dashboard" element={<EmployerDashboard />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 