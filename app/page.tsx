import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-4">
      <header className="fixed top-0 left-0 right-0 h-16 bg-[#1A1A22] flex items-center px-4 border-b border-[#2A2A35]">
        <div className="w-10 h-10 rounded-full bg-gray-600 mr-3" />
        <div className="flex flex-col">
          <span className="font-bold">AI Companion</span>
          <span className="text-xs text-green-500">Online</span>
        </div>
      </header>
      <div className="pt-20 pb-24">
        <div className="bg-[#1A1A22] p-4 rounded-xl mb-4">
          <p className="text-[#A0A0B0]">Hello! How can I help you today?</p>
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-[#0F0F13]">
        <input 
          type="text" 
          className="w-full bg-[#1A1A22] p-3 rounded-full border border-[#2A2A35] focus:outline-none focus:border-[#FF3366]"
          placeholder="Type a message..."
        />
      </footer>
    </main>
  );
}