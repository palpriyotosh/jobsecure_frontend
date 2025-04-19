# JobSecure - Freelancer Portal with Scam Protection

A secure job board platform for freelancers with built-in scam protection features.

## Features

- User authentication with email verification
- Role-based access (Freelancer/Employer)
- Job posting and management
- Scam detection and reporting
- User rating system
- Secure payment simulation

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/jobsecure
JWT_SECRET=your-secret-key-here
```

3. Start MongoDB server

4. Generate fake data (optional):
```bash
node scripts/generateFakeData.js
```

5. Start the server:
```bash
node server.js
```

## API Endpoints

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user
- GET /api/auth/verify/:token - Verify email

### Users
- GET /api/users/profile - Get user profile
- PUT /api/users/profile - Update user profile

### Jobs
- GET /api/jobs - Get all jobs
- POST /api/jobs - Create a new job
- GET /api/jobs/:id - Get job details
- PUT /api/jobs/:id - Update job
- DELETE /api/jobs/:id - Delete job

## Security Features

- Email verification for new accounts
- JWT-based authentication
- Password hashing
- Scam reporting system
- User rating system
- Job verification process 