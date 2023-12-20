import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import './UpdateTicketForm.css'; // Import the CSS file


const UpdateTicketForm = ({ ticketId, onUpdate }) => {
    const [ticketUpdates, setTicketUpdates] = useState({
      status: '',
      comments: '',
      resolution: '',
      // Add more fields as needed
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setTicketUpdates({
        ...ticketUpdates,
        [name]: value,
      });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await axios.patch(`your_backend_api_url/update-ticket/${ticketId}`, ticketUpdates);
        if (response.status === 200) {
          console.log('Ticket updated successfully!');
          onUpdate(); // Trigger an update in the parent component or perform other actions
        }
      } catch (error) {
        console.error('Error updating ticket:', error);
        // Handle errors as needed
      }
    };
  
    return (
      <div className="update-ticket-form-container">
        <h2 className="form-heading">Update Ticket</h2>
        <form onSubmit={handleSubmit}>
          <label className="form-label">
            Status:
            <input
              type="text"
              name="status"
              value={ticketUpdates.status}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-label">
            Comments:
            <textarea
              name="comments"
              value={ticketUpdates.comments}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-label">
            Resolution:
            <textarea
              name="resolution"
              value={ticketUpdates.resolution}
              onChange={handleInputChange}
            />
          </label>
          {/* Add more fields for other updates */}
          <button className="submit-button" type="submit">
            Update Ticket
          </button>
        </form>
      </div>
    );
  };
  
export default UpdateTicketForm;
  