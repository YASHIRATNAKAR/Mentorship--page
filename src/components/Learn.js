import React, { useState } from 'react';

const Learn = () => {
  const [selectedCategory, setSelectedCategory] = useState('Programming Languages');

  const resources = {
    'Programming Languages': [
      'Learn Python - Python.org',
      'JavaScript Basics - Mozilla Developer Network',
      'Mastering Java - Codecademy',
      'C++ for Beginners - GeeksforGeeks'
    ],
    'Web Development': [
      'HTML & CSS: Building Responsive Websites - freeCodeCamp',
      'JavaScript: The Complete Guide - Udemy',
      'ReactJS Documentation - reactjs.org',
      'Advanced Node.js - Coursera'
    ],
    'Data Science': [
      'Introduction to Machine Learning - Coursera',
      'Data Analysis with Python - DataCamp',
      'Statistics for Data Science - edX',
      'Deep Learning Specialization - Coursera'
    ],
    'Soft Skills': [
      'Effective Communication Skills - Udemy',
      'Time Management Techniques - Coursera',
      'Problem-Solving Strategies - LinkedIn Learning',
      'Critical Thinking for Professionals - Skillshare'
    ]
  };

  return (
    <div>
      <h1>Learn Resources</h1>
      <div>
        <label>Select Category:</label>
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          {Object.keys(resources).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <h2>{selectedCategory}</h2>
      <ul>
        {resources[selectedCategory].map((resource, index) => (
          <li key={index}>{resource}</li>
        ))}
      </ul>
    </div>
  );
};

export default Learn;
