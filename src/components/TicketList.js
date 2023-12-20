import React, { useState, useEffect } from 'react';
import './TicketList.css'; // Import the CSS file

const TicketList = ({ ticketData }) => {
  const [tickets, setTickets] = useState(ticketData); // State to manage tickets

  // Use useEffect to update tickets when ticketData prop changes
  useEffect(() => {
    setTickets(ticketData);
  }, [ticketData]);

  // Simulating ticket data fetching from the backend using useEffect
  useEffect(() => {
    // Fetch ticket data from the backend (assuming an API call)
    const fetchTickets = async () => {
      try {
        // Replace 'fetch' with your actual API call to get ticket data
        const response = await fetch('your_backend_api_url/tickets');
        if (response.ok) {
          const data = await response.json();
          setTickets(data); // Set fetched ticket data to state
        } else {
          throw new Error('Failed to fetch tickets');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTickets(); // Call the fetchTickets function when component mounts
  }, []); // Empty dependency array ensures this effect runs only once

  // Sorting Function
  const handleSortByTitle = () => {
    const sortedTickets = [...tickets].sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    setTickets(sortedTickets);
  };

  // Filtering Function
  const handleFilterByPriority = (selectedPriority) => {
    const filteredTickets = ticketData.filter(ticket => ticket.priority === selectedPriority);
    setTickets(filteredTickets);
  };

  // Searching Function
  const handleSearch = (searchTerm) => {
    const filteredTickets = ticketData.filter(ticket =>
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTickets(filteredTickets);
  };

  return (
    <div className="ticket-list-container">
      <h2 className="list-heading">Ticket List</h2>

      {/* Sort by Title Button */}
      <button onClick={handleSortByTitle}>Sort by Title</button>

      {/* Filter by Priority Dropdown */}
      <select onChange={(e) => handleFilterByPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      {/* Search Input */}
      <input type="text" placeholder="Search" onChange={(e) => handleSearch(e.target.value)} />

      {/* Display Tickets */}
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>
            <strong>{ticket.title}</strong> - {ticket.description}<br />
            Status: {ticket.status}, Priority: {ticket.priority}, Category: {ticket.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;
