import React from 'react';

const FreelancerDashboard = () => {
  // Mock data (replace with real data later)
  const freelancer = {
    name: "John Doe",
    photo: "https://via.placeholder.com/150",
    rating: 4.8,
    completedJobs: 24,
    feedback: [
      { id: 1, client: "Tech Corp", comment: "Excellent work!", rating: 5 },
      { id: 2, client: "Design Studio", comment: "Very professional", rating: 4.5 }
    ]
  };

  const suggestedJobs = [
    {
      id: 1,
      title: "React Developer Needed",
      company: "Tech Solutions Inc",
      budget: "$2000-$3000",
      description: "Looking for an experienced React developer..."
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Agency",
      budget: "$1500-$2500",
      description: "Need help with a responsive website..."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      {/* Freelancer Profile Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-center space-x-4">
          <img 
            src={freelancer.photo} 
            alt={freelancer.name} 
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold">{freelancer.name}</h1>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400">★</span>
              <span className="ml-1">{freelancer.rating}</span>
              <span className="ml-4">{freelancer.completedJobs} jobs completed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Suggested Jobs Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Suggested Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {suggestedJobs.map(job => (
            <div key={job.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-gray-600 mt-2">{job.company}</p>
              <p className="text-green-600 font-semibold mt-2">{job.budget}</p>
              <p className="text-gray-700 mt-2 line-clamp-2">{job.description}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Feedback Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Recent Feedback</h2>
        <div className="space-y-4">
          {freelancer.feedback.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">{item.client}</h3>
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1">{item.rating}</span>
                </div>
              </div>
              <p className="text-gray-700">{item.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreelancerDashboard;
