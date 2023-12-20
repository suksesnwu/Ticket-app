const express = require('express');
const app = express();

// Define routes, middleware, etc.

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

module.exports = app; // Export the app if needed


// Example of initializing WhatsApp API within a Node.js server
const WhatsAppAPI = require('whatsapp-sdk'); // Import WhatsApp SDK

// Initialize WhatsApp client with credentials
const client = new WhatsAppAPI({
    apiKey: 'YOUR_API_KEY',
    businessID: 'YOUR_BUSINESS_ID',
    // Other required parameters
});

// Additional configuration and setup can be done here
// Define a route to handle incoming WhatsApp messages
app.post('/whatsapp', (req, res) => {
    // Extract and handle incoming WhatsApp message data
    const incomingMessage = req.body;
  
    // Process the incoming message - extract content, sender info, etc.
    // Perform necessary actions based on the message content
    // For instance, create or update tickets in your ticketing system
    // You might call appropriate functions or services here
  
    // Send a response if required
    res.status(200).send('Received WhatsApp message successfully');
  });
  