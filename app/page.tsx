import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white flex flex-col">
      <header className="p-4 border-b border-[#1A1A22] flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#FF3366]" />
        <div>
          <h1 className="font-bold">Companion</h1>
          <span className="text-xs text-[#A0A0B0]">Online</span>
        </div>
      </header>
      <div className="flex-1 p-4">
        <div className="bg-[#1A1A22] p-3 rounded-lg max-w-[80%]">
          Hello! How are you doing today?
        </div>
      </div>
      <footer className="p-4 border-t border-[#1A1A22]">
        <input className="w-full bg-[#1A1A22] p-3 rounded-lg text-white" placeholder="Type a message..." />
      </footer>
    </main>
  );
}