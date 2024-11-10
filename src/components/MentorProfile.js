import React from 'react';
import './MentorProfile.css'; // Optional: for styling the profile

const MentorProfile = ({ mentor }) => {
  if (!mentor) {
    return <div>No mentor selected.</div>;
  }

  const { name, domain, experience, rating, availability, skills = [], bio } = mentor;

  return (
    <div className="mentor-profile">
      <h2>{name}</h2>
      <p><strong>Domain:</strong> {domain}</p>
      <p><strong>Experience:</strong> {experience} years</p>
      <p><strong>Rating:</strong> {rating}/5</p>
      <p><strong>Availability:</strong> {availability ? "Available" : "Unavailable"}</p>
      {/* <p><strong>Skills:</strong> {skills.length > 0 ? skills.join(', ') : 'No skills listed'}</p> */}
      {/* <p><strong>Bio:</strong> {bio}</p> */}
    </div>
  );
};

export default MentorProfile;
