import React from 'react';

const MentorList = ({ mentors, onMentorSelect }) => {
  return (
    <div className="mentor-list">
      {mentors.length > 0 ? (
        mentors.map((mentor) => (
          <div key={mentor.id} className="mentor-item" onClick={() => onMentorSelect(mentor)}>
            <h3>{mentor.name}</h3>
            <p>{mentor.skills.join(', ')}</p>
          </div>
        ))
      ) : (
        <div>No mentors found based on your filters.</div>
      )}
    </div>
  );
};

export default MentorList;
