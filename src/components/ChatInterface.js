// ChatInterface.js
import React from 'react';

const ChatInterface = () => {
  return (
    <div>
      <h1>Chat Interface</h1>
      <input type="text" placeholder="Type a message..." />
      <button>Send</button>
      <ul>
        <li>Message 1</li>
        <li>Message 2</li>
      </ul>
    </div>
  );
};

export default ChatInterface;