import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">JobSecure</Link>
          <div className="space-x-6">
            <Link to="/freelancer-dashboard" className="text-gray-600 hover:text-blue-600 font-medium">Find Jobs</Link>
            <Link to="/employer-dashboard" className="text-gray-600 hover:text-blue-600 font-medium">Post a Job</Link>
            <Link to="/login" className="text-gray-600 hover:text-blue-600 font-medium">Login</Link>
            <Link to="/signup" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium transition-colors duration-200">Sign Up</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
