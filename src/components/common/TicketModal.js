// TicketModal.js
import React from 'react';

const TicketModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {children} {/* Render children passed to TicketModal */}
      </div>
    </div>
  );
};

export default TicketModal;
