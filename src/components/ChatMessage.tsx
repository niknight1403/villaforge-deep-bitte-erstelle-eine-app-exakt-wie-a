// ChatMessage.tsx
import React from 'react';

interface ChatMessageProps {
  message: string;
  sender: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, sender }) => {
  return (
    <div className='chat-message'>
      <div className='sender'>{sender}</div>
      <div className='message'>{message}</div>
    </div>
  );
};

export default ChatMessage;
