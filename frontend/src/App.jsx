import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import FreelancerDashboard from './pages/FreelancerDashboard';
import EmployerDashboard from './pages/EmployerDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/freelancer-dashboard" element={<FreelancerDashboard />} />
            <Route path="/employer-dashboard" element={<EmployerDashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
