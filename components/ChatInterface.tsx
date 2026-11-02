import React from 'react';

const ChatInterface: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-[#0F0F13] text-white">
      <header className="flex items-center justify-between p-4 bg-[#1A1A22] border-b border-gray-800">
        <button className="p-2">←</button>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gray-600" />
          <span className="font-bold">Companion</span>
          <div className="w-2 h-2 rounded-full bg-green-500" />
        </div>
        <button className="p-2">⋮</button>
      </header>
      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="bg-[#1A1A22] p-3 rounded-lg max-w-[80%]">Hallo! Wie kann ich dir heute helfen?</div>
      </main>
      <footer className="p-4 bg-[#1A1A22]">
        <input 
          className="w-full p-3 rounded-full bg-[#0F0F13] border border-gray-700 focus:outline-none focus:border-[#FF3366]"
          placeholder="Schreibe eine Nachricht..."
        />
      </footer>
    </div>
  );
};

export default ChatInterface;