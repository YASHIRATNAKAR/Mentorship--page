import React, { useState, useEffect } from 'react';

const Internships = () => {
  const [internshipType, setInternshipType] = useState('All');
  const [location, setLocation] = useState('All');
  const [filteredInternships, setFilteredInternships] = useState([]);

  const internshipsData = [
    { id: 1, title: 'Frontend Developer Intern', company: 'Paytm', location: 'Remote', type: 'Full-time' },
    { id: 2, title: 'Backend Developer Intern', company: 'Flipkart', location: 'Bangalore', type: 'Part-time' },
    { id: 3, title: 'Full Stack Developer Intern', company: 'Zomato', location: 'Hyderabad', type: 'Full-time' },
    { id: 4, title: 'Data Analyst Intern', company: 'Swiggy', location: 'Remote', type: 'Remote' },
    { id: 5, title: 'DevOps Engineer Intern', company: 'Tata Consultancy Services (TCS)', location: 'Delhi', type: 'Full-time' },
    { id: 6, title: 'Machine Learning Intern', company: 'Wipro', location: 'Remote', type: 'Full-time' },
    { id: 7, title: 'Software Engineering Intern', company: 'Infosys', location: 'Bangalore', type: 'Full-time' },
    { id: 8, title: 'Data Science Intern', company: 'Amazon', location: 'Pune', type: 'Full-time' },
    { id: 9, title: 'Cloud Engineering Intern', company: 'Microsoft', location: 'Hyderabad', type: 'Full-time' },
    { id: 10, title: 'Cybersecurity Intern', company: 'HCL Technologies', location: 'Remote', type: 'Part-time' },
    { id: 11, title: 'Mobile App Developer Intern', company: 'Ola Cabs', location: 'Delhi', type: 'Full-time' },
    { id: 12, title: 'QA Engineer Intern', company: 'Tech Mahindra', location: 'Mumbai', type: 'Part-time' },
    { id: 13, title: 'Blockchain Developer Intern', company: 'Polygon', location: 'Chennai', type: 'Full-time' },
    { id: 14, title: 'AI Research Intern', company: 'Reliance Jio', location: 'Noida', type: 'Full-time' },
    { id: 15, title: 'Database Admin Intern', company: 'Oracle India', location: 'Remote', type: 'Remote' }
  ];

  useEffect(() => {
    // Filter internships based on selected type and location
    const filtered = internshipsData.filter((internship) => {
      return (
        (internshipType === 'All' || internship.type === internshipType) &&
        (location === 'All' || internship.location === location)
      );
    });
    setFilteredInternships(filtered);
  }, [internshipType, location]);

  return (
    <div>
      <h1>Internship Opportunities</h1>

      <div>
        <label>Filter by Internship Type:</label>
        <select onChange={(e) => setInternshipType(e.target.value)}>
          <option value="All">All</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Remote">Remote</option>
        </select>

        <label>Filter by Location:</label>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="All">All</option>
          <option value="Remote">Remote</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Delhi">Delhi</option>
          <option value="Pune">Pune</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Chennai">Chennai</option>
          <option value="Noida">Noida</option>
        </select>
      </div>

      <ul>
        {filteredInternships.map((internship) => (
          <li key={internship.id}>
            <h3>{internship.title}</h3>
            <p>{internship.company} - {internship.location} ({internship.type})</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Internships;
