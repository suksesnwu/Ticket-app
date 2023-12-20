import React from 'react';
import './Header.css'; // Import the CSS file


const Header = ({ handleFilter, handleNewTicket }) => {
  return (
    <div className="header">
      <button onClick={() => handleFilter('open')}>Open Tickets</button>
      <button onClick={() => handleFilter('closed')}>Closed Tickets</button>
      <button onClick={() => handleFilter('all')}>All Tickets</button>
      <button onClick={handleNewTicket}>Create New Ticket</button>
    </div>
  );
};

export default Header;
