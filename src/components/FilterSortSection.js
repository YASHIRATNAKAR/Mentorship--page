// src/components/FilterSortSection.js
import React, { useState, useEffect } from 'react';
import './FilterSortSection.css';

const FilterSortSection = ({ onFilterChange }) => {
  const [availabilityFilter, setAvailabilityFilter] = useState('all');
  const [sortOption, setSortOption] = useState('name');
  const [skillFilter, setSkillFilter] = useState('all');
  const [topMentorFilter, setTopMentorFilter] = useState('top-rated');

  // Handle filter changes and call the parent component function
  useEffect(() => {
    onFilterChange({
      availabilityFilter,
      sortOption,
      skillFilter,
      topMentorFilter,
    });
  }, [availabilityFilter, sortOption, skillFilter, topMentorFilter, onFilterChange]);

  return (
    <div className="filter-sort-section">
      <h2>Options</h2>
      <div className="filter-sort-container">
        <div className="filter">
          <label htmlFor="filter">Filters:</label>
          <select id="filter" onChange={(e) => setAvailabilityFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>

        <div className="sort">
          <label htmlFor="sort">Sort By:</label>
          <select id="sort" onChange={(e) => setSortOption(e.target.value)}>
            <option value="name">Name</option>
            <option value="experience">Experience</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        <div className="skills">
          <label htmlFor="skills">Skills:</label>
          <select id="skills" onChange={(e) => setSkillFilter(e.target.value)}>
            <option value="all">All Skills</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="c++">C++</option>
            <option value="react">React</option>
          </select>
        </div>

        <div className="top-mentors">
          <label htmlFor="top-mentors">Top Mentors:</label>
          <select id="top-mentors" onChange={(e) => setTopMentorFilter(e.target.value)}>
            <option value="top-rated">Top Rated</option>
            <option value="most-experienced">Most Experienced</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSortSection;
