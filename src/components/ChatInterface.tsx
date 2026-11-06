import React from 'react';

export default function ChatInterface() {
  return (
    <div className="flex flex-col h-screen bg-[#0F0F13] text-white">
      <header className="p-4 border-b border-[#1A1A22] flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-600" />
        <div>
          <h1 className="font-bold">Companion</h1>
          <span className="text-xs text-[#FF3366]">Online</span>
        </div>
      </header>
      <main className="flex-1 p-4 overflow-y-auto">
        <div className="bg-[#1A1A22] p-3 rounded-lg max-w-[80%]">
          Hello! How can I help you today?
        </div>
      </main>
      <footer className="p-4">
        <input 
          className="w-full p-3 rounded-full bg-[#1A1A22] border border-[#FF3366] focus:outline-none" 
          placeholder="Type a message..."
        />
      </footer>
    </div>
  );
}