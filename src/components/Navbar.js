import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; 
import { FaBookReader } from "react-icons/fa";

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2> <FaBookReader /> PREP TALK</h2> 
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/">Mentorships</Link>
        </li>
        <li>
          <Link to="/learn">Learn</Link>
        </li>
        <li>
          <Link to="/jobs">Jobs</Link>
        </li>
        <li>
          <Link to="/internships">Internships</Link>
        </li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-login">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
