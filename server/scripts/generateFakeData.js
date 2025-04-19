const mongoose = require('mongoose');
const User = require('../models/User');
const Job = require('../models/Job');
const bcrypt = require('bcryptjs');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/jobsecure')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const generateFakeUsers = async () => {
  const users = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      role: 'freelancer',
      isVerified: true,
      rating: 4.5
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      password: 'password123',
      role: 'employer',
      isVerified: true,
      rating: 4.8
    },
    {
      name: 'Mike Johnson',
      email: 'mike@example.com',
      password: 'password123',
      role: 'freelancer',
      isVerified: true,
      rating: 4.2
    },
    {
      name: 'Sarah Williams',
      email: 'sarah@example.com',
      password: 'password123',
      role: 'employer',
      isVerified: true,
      rating: 4.0
    }
  ];

  for (const user of users) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await User.create(user);
  }

  console.log('Fake users created successfully');
};

const generateFakeJobs = async () => {
  const jobs = [
    {
      title: 'Web Developer Needed',
      description: 'Looking for an experienced web developer for a new project',
      budget: 1000,
      deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      skills: ['JavaScript', 'React', 'Node.js'],
      employer: await User.findOne({ role: 'employer' }).select('_id'),
      status: 'open'
    },
    {
      title: 'Mobile App Development',
      description: 'Need a mobile app developer for an iOS application',
      budget: 2000,
      deadline: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000), // 45 days from now
      skills: ['Swift', 'iOS', 'Xcode'],
      employer: await User.findOne({ role: 'employer' }).select('_id'),
      status: 'open'
    }
  ];

  await Job.insertMany(jobs);
  console.log('Fake jobs created successfully');
};

const main = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Job.deleteMany({});

    // Generate fake data
    await generateFakeUsers();
    await generateFakeJobs();

    console.log('All fake data generated successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error generating fake data:', error);
    process.exit(1);
  }
};

main(); 