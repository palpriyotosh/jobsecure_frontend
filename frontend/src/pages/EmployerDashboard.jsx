import React from 'react';

const EmployerDashboard = () => {
  // Mock data (replace with real data later)
  const employer = {
    name: "Tech Solutions Inc",
    rating: 4.9,
    totalJobs: 15,
    activeJobs: 3
  };

  const postedJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      applications: 12,
      status: "Active",
      budget: "$3000-$5000"
    },
    {
      id: 2,
      title: "UI/UX Designer",
      applications: 8,
      status: "Active",
      budget: "$2000-$3500"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      {/* Employer Profile Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">{employer.name}</h1>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400">★</span>
              <span className="ml-1">{employer.rating}</span>
              <span className="ml-4">{employer.totalJobs} total jobs posted</span>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Post New Job
          </button>
        </div>
      </div>

      {/* Active Jobs Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Your Active Jobs</h2>
        <div className="space-y-4">
          {postedJobs.map(job => (
            <div key={job.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <p className="text-gray-600 mt-1">Budget: {job.budget}</p>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {job.status}
                  </span>
                  <p className="mt-2 text-blue-600 font-medium">
                    {job.applications} applications
                  </p>
                </div>
              </div>
              <div className="mt-4 flex space-x-4">
                <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded hover:bg-blue-200">
                  View Applications
                </button>
                <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded hover:bg-gray-200">
                  Edit Job
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Active Jobs</h3>
          <p className="text-3xl font-bold text-blue-600">{employer.activeJobs}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Total Applications</h3>
          <p className="text-3xl font-bold text-blue-600">20</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Pending Reviews</h3>
          <p className="text-3xl font-bold text-blue-600">5</p>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
