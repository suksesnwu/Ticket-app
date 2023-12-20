import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import TicketModal from './components/common/TicketModal'; // Import the TicketModal component
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';
//import TicketDetails from './components/TicketDetails';
//import TechnicianDashboard from './components/TechnicianDashboard';
// ... other imports and code

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tickets, setTickets] = useState([]); // Manage tickets state
  const [filteredTickets, setFilteredTickets] = useState([]); // Manage filtered tickets state

  // Function to filter tickets based on status
  const handleFilter = (status) => {
    if (status === 'all') {
      setFilteredTickets(tickets); // Show all tickets
    } else {
      const filtered = tickets.filter(ticket => 
        ticket.status && ticket.status.toLowerCase() === status.toLowerCase()
      );
      setFilteredTickets(filtered); // Filter by status (open/closed)
    }
  };
  

  // Function to create a new ticket
  const handleNewTicket = () => {
    // Open the modal when "Create New Ticket" is clicked
    setIsModalOpen(true);
  };

  const handleTicketSubmission = (newTicketData) => {
    // Logic to handle the submitted ticket data
    // For now, add it to the list of tickets
    setTickets([...tickets, newTicketData]);
    setIsModalOpen(false); // Close the modal after submission
  };

  const handleCloseModal = () => {
    // Close the modal when the close button or backdrop is clicked
    setIsModalOpen(false);
  };

  
  // Dummy ticket data (replace this with your actual data)
  const ticketData = [
    { id: 1, 
      title: 'Set Up Projector', 
      description: 'In the boardroom for finance meeting', 
      priority: 'Low',
      category: "Projector",
      status: 'Open',
      comments: [
        { id: 1, text: 'Comment 1 for Ticket 1' },
        // Add more comments if needed
      ],
      attachments: [
        { id: 1, name: 'Attachment 1 for Ticket 1' },
        // Add more attachments if needed
      ],
     },
    { id: 2, 
      title: 'Troubleshoot Wifi issue', 
      description: 'Problem: No LAN was connected on the computer', 
      priority: 'High',
      category: "WIFI",
      status: 'Closed',
      comments: [
        { id: 1, text: 'Comment 1 for Ticket 2' },
        // Add more comments if needed
      ],
      attachments: [
        { id: 1, name: 'Attachment 1 for Ticket 2' },
        // Add more attachments if needed
      ],
     },
    // ... more tickets
  ];

  // Initialize tickets and filteredTickets state with ticketData
  useState(() => {
    setTickets(ticketData);
    setFilteredTickets(ticketData);
  }, []);

  return (
    <div className="App">
      <Header handleFilter={handleFilter} handleNewTicket={handleNewTicket} />
      {/* Render TicketDetails component with the filtered tickets */}
      {/* {ticketData.map(ticket => (
        <TicketDetails key={ticket.id} ticket={ticket} />
      ))} */}
       <TicketList ticketData={filteredTickets} />
       <TicketModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <TicketForm onSubmit={handleTicketSubmission} /> {/* Render TicketForm within TicketModal */}
      </TicketModal>
    </div>
  );
}

export default App;
