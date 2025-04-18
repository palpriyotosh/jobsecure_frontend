import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Find Secure Freelance Work
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Connect with verified employers and secure your next opportunity in a safe, 
            scam-free environment.
          </p>
          <div className="flex justify-center space-x-6">
            <Link
              to="/freelancer-dashboard"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Find Work
            </Link>
            <Link
              to="/employer-dashboard"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transform transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Post a Job
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div className="p-6">
              <div className="text-blue-600 text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Verified Employers</h3>
              <p className="text-gray-600">Every employer is thoroughly vetted</p>
            </div>
            <div className="p-6">
              <div className="text-blue-600 text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">Your earnings are protected</p>
            </div>
            <div className="p-6">
              <div className="text-blue-600 text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Quality Work</h3>
              <p className="text-gray-600">Top-tier opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
