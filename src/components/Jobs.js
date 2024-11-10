import React, { useState, useEffect } from 'react';

const Jobs = () => {
  const [jobType, setJobType] = useState('All');
  const [location, setLocation] = useState('All');
  const [filteredJobs, setFilteredJobs] = useState([]);

  const jobsData = [
    { id: 1, title: 'Software Engineer', company: 'Google India', location: 'Bangalore', type: 'Full-time' },
    { id: 2, title: 'Frontend Developer', company: 'Microsoft India', location: 'Hyderabad', type: 'Full-time' },
    { id: 3, title: 'Backend Developer', company: 'Amazon India', location: 'Pune', type: 'Full-time' },
    { id: 4, title: 'Data Scientist', company: 'Paytm', location: 'Noida', type: 'Full-time' },
    { id: 5, title: 'DevOps Engineer', company: 'Infosys', location: 'Bangalore', type: 'Full-time' },
    { id: 6, title: 'Full Stack Developer', company: 'Flipkart', location: 'Gurgaon', type: 'Full-time' },
    { id: 7, title: 'AI/ML Engineer', company: 'Tata Consultancy Services (TCS)', location: 'Mumbai', type: 'Full-time' },
    { id: 8, title: 'Cloud Engineer', company: 'Wipro', location: 'Remote', type: 'Remote' },
    { id: 9, title: 'Cybersecurity Specialist', company: 'HCL Technologies', location: 'Chennai', type: 'Full-time' },
    { id: 10, title: 'Database Administrator', company: 'Oracle India', location: 'Bangalore', type: 'Full-time' },
    { id: 11, title: 'Mobile App Developer', company: 'Ola Cabs', location: 'Delhi', type: 'Full-time' },
    { id: 12, title: 'QA Engineer', company: 'Swiggy', location: 'Hyderabad', type: 'Full-time' },
    { id: 13, title: 'Blockchain Developer', company: 'Polygon', location: 'Remote', type: 'Remote' },
    { id: 14, title: 'Big Data Engineer', company: 'Reliance Jio', location: 'Mumbai', type: 'Full-time' },
    { id: 15, title: 'Network Engineer', company: 'Tech Mahindra', location: 'Pune', type: 'Full-time' }
  ];

  useEffect(() => {
    // Filter jobs based on selected type and location
    const filtered = jobsData.filter((job) => {
      return (
        (jobType === 'All' || job.type === jobType) &&
        (location === 'All' || job.location === location)
      );
    });
    setFilteredJobs(filtered);
  }, [jobType, location]);

  return (
    <div>
      <h1>Job Opportunities</h1>

      <div>
        <label>Filter by Job Type:</label>
        <select onChange={(e) => setJobType(e.target.value)}>
          <option value="All">All</option>
          <option value="Full-time">Full-time</option>
          <option value="Remote">Remote</option>
        </select>

        <label>Filter by Location:</label>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="All">All</option>
          <option value="Remote">Remote</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Pune">Pune</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Noida">Noida</option>
          <option value="Delhi">Delhi</option>
          <option value="Gurgaon">Gurgaon</option>
          <option value="Chennai">Chennai</option>
        </select>
      </div>

      <ul>
        {filteredJobs.map((job) => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company} - {job.location} ({job.type})</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jobs;
