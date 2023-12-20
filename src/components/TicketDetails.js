import React, { useState, useEffect } from 'react';
import './TicketDetails.css'; // Import the CSS file

const TicketDetails = ({ ticketId }) => {
  const [ticket, setTicket] = useState(null); // State to manage the selected ticket

  useEffect(() => {
    // Simulating fetching ticket details based on ticketId (Assuming API call)
    const fetchTicketDetails = async () => {
      try {
        // Replace 'fetch' with your actual API call to get ticket details
        const response = await fetch(`your_backend_api_url/tickets/${ticketId}`);
        if (response.ok) {
          const data = await response.json();
          setTicket(data); // Set fetched ticket details to state
        } else {
          throw new Error('Failed to fetch ticket details');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTicketDetails(); // Call the fetchTicketDetails function when component mounts
  }, [ticketId]); // Fetch ticket details whenever ticketId changes

  const handleUpdateTicketStatus = (newStatus) => {
    if (ticket) {
      setTicket({ ...ticket, status: newStatus }); // Update the ticket status locally
      // Additional logic can be added here to save the updated status to the backend
      console.log(`Ticket ${ticket.id} status updated to ${newStatus}`);
    }
  };

  const { status, description, comments, attachments } = ticket;
  const [ticketStatus, setTicketStatus] = useState(status); // State to manage ticket status

    const handleCloseTicket = () => {
        setTicketStatus('Closed'); // Update the ticket status to 'Closed'
        console.log('Ticket closed');
    };

    const handleReopenTicket = () => {
        setTicketStatus('Open'); // Update the ticket status to 'Open'
        // Additional logic can be added here to save the updated status to the backend
        console.log('Ticket reopened');
    };

    const handleDeleteTicket = () => {
      // Implement logic to remove the ticket from the backend (assuming deletion functionality)
      if (ticket) {
        // Delete ticket logic (API call or other backend interaction)
        console.log(`Ticket ${ticket.id} deleted`);
      }
    };

    return (
      <div className="ticket-details-container">
        <h2 className="ticket-details-title">Ticket Details</h2>
        {ticket ? (
          <>
            <p className="ticket-status">Status: {ticket.status}</p>
            <p className="ticket-description">Description: {ticket.description}</p>
            {/* Display comments and attachments */}
            <div className="comments-section">
              <h3 className="comments-heading">Comments:</h3>
              {ticket.comments.map((comment) => (
                <div className="comment" key={comment.id}>
                  <p className="comment-text">{comment.text}</p>
                  {/* Display other comment details */}
                </div>
              ))}
            </div>
            <div className="attachments-section">
              <h3 className="attachments-heading">Attachments:</h3>
              {ticket.attachments.map((attachment) => (
                <div className="attachment" key={attachment.id}>
                  {/* Display attachment details */}
                </div>
              ))}
            </div>
            {ticket.status === 'Closed' ? (
              <div className="ticket-actions">
                <button className="options-button" onClick={() => handleUpdateTicketStatus('Open')}>
                  Reopen Ticket
                </button>
                <button className="options-button" onClick={handleDeleteTicket}>
                  Delete Ticket
                </button>
              </div>
            ) : (
              <button className="close-ticket-button" onClick={() => handleUpdateTicketStatus('Closed')}>
                Close Ticket
              </button>
            )}
          </>
        ) : (
          <p>Loading ticket details...</p>
        )}
      </div>
    );
  };
  
  export default TicketDetails;