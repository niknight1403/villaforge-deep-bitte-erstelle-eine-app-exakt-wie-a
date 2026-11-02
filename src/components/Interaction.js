import React, { useState } from 'react';

const Interaction = ({ message, onSend }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <div className='flex items-end gap-2 p-2 bg-gray-800 rounded-b-lg w-full'>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Type a message...'
        className='flex-1 bg-gray-700 text-white rounded-l-lg px-4 py-2 focus:outline-none'
      />
      <button
        onClick={handleSend}
        className='bg-gray-700 text-white rounded-r-lg px-4 py-2'
      >
        Send
      </button>
    </div>
  );
};

export default Interaction;