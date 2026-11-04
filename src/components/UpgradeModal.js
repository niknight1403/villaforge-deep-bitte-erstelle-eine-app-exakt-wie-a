import React from 'react';

const UpgradeModal = ({ isOpen, onClose }) => {
  return (
    <div className='modal' style={{ display: isOpen ? 'block' : 'none' }}>
      <div className='modal-content'>
        <span className='close-button' onClick={onClose}>&times;</span>
        <h2>Upgrade to Pro</h2>
        <p>Upgrade to Pro for advanced features!</p>
        <button onClick={onClose}>Upgrade Now</button>
      </div>
    </div>
  );
};

export default UpgradeModal;
