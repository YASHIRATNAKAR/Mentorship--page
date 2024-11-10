import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import MentorList from './components/MentorList';
import MentorProfile from './components/MentorProfile';
import FilterSortSection from './components/FilterSortSection';
import Learn from './components/Learn';
import Jobs from './components/Jobs';
import Internships from './components/Internships';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import mentorsData from './components/mentorsData.json';
import './App.css';

function App() {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [filteredMentors, setFilteredMentors] = useState(mentorsData);
  const [filters, setFilters] = useState({
    availabilityFilter: 'all',
    sortOption: 'name',
    skillFilter: 'all',
    topMentorFilter: 'top-rated',
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('user', 'authenticated'); // Store login status
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters); // Update filters state
    applyFilters(newFilters); // Apply the filters to the mentors list
  };

  const applyFilters = (filters) => {
    let filtered = mentorsData;

    // Availability filter
    if (filters.availabilityFilter !== 'all') {
      filtered = filtered.filter((mentor) => mentor.availability === filters.availabilityFilter);
    }

    // Skill filter
    if (filters.skillFilter !== 'all') {
      filtered = filtered.filter((mentor) => mentor.skills.includes(filters.skillFilter));
    }

    // Top Mentor filter
    if (filters.topMentorFilter === 'top-rated') {
      filtered = filtered.filter((mentor) => mentor.rating >= 4); // Assuming top-rated means rating >= 4
    }

    // Sort by option
    switch (filters.sortOption) {
      case 'name':
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'experience':
        filtered = filtered.sort((a, b) => b.experience - a.experience);
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredMentors(filtered); // Update the filtered mentor list
  };

  return (
    <Router>
      <Navbar onLogout={handleLogout} />
      <div className="app-container">
        {isAuthenticated && <FilterSortSection onFilterChange={handleFilterChange} />}
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />}
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <div className="mentor-container">
                  <div className="mentor-list-container">
                    <MentorList mentors={filteredMentors} onMentorSelect={setSelectedMentor} />
                  </div>
                  <div className="mentor-profile-container">
                    {selectedMentor ? (
                      <MentorProfile mentor={selectedMentor} />
                    ) : (
                      <div>Select a mentor to see their profile</div>
                    )}
                  </div>
                </div>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/learn" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Learn /></ProtectedRoute>} />
          <Route path="/jobs" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Jobs /></ProtectedRoute>} />
          <Route path="/internships" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Internships /></ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
