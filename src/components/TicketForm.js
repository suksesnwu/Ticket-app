import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import './TicketForm.css'; // Import the CSS file

const TicketForm = ({ initialTicketData, onSubmit }) => {
  const [ticketData, setTicketData] = useState(
    initialTicketData || {
      title: '',
      description: '',
      priority: 'Low', // Default priority
      category: '', // Add additional fields as needed
    }
  );

  const handleInputChange = (event) => {
    setTicketData({
      ...ticketData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('your_backend_api_url/create-ticket', ticketData);
      if (response.status === 200) {
        console.log('Ticket submitted successfully!');
        // You can perform additional actions here after successful submission
      }
    } catch (error) {
      console.error('Error submitting ticket:', error);
      // Handle errors as needed
    }
  };
  
  

  return (
    <div className="ticket-form-container">
      <h2 className="form-heading">Create a New Ticket</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Ticket Title:
          <input
            type="text"
            name="title"
            value={ticketData.title}
            onChange={handleInputChange}
          />
        </label>
        <label className="form-label">
          Description:
          <textarea
            name="description"
            value={ticketData.description}
            onChange={handleInputChange}
          />
        </label>
        <label className="form-label">
          Priority:
          <select
            name="priority"
            value={ticketData.priority}
            onChange={handleInputChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
        <label className="form-label">
          Category:
          <input
            type="text"
            name="category"
            value={ticketData.category}
            onChange={handleInputChange}
          />
        </label>
        {/* Add more fields as needed */}
        <button className="submit-button" type="submit">
          Submit Ticket
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
