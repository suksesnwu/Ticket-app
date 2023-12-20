import React, { useState } from 'react';
import './TechnicianDashboard.css'; // Import the CSS file

const TechnicianDashboard = () => {
  // State for technician availability
  const [isAvailable, setIsAvailable] = useState(true);

  // Function to toggle availability
  const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Technician Dashboard</h2>
      <p className="availability-status">Technician is {isAvailable ? 'available' : 'not available'}.</p>
      <button className="toggle-button" onClick={toggleAvailability}>
        {isAvailable ? 'Mark as Unavailable' : 'Mark as Available'}
      </button>
    </div>
  );
}

export default TechnicianDashboard;
