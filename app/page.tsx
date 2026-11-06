import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-4 font-sans">
      <header className="flex items-center justify-between pb-4 border-b border-[#1A1A22]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FF3366] flex items-center justify-center font-bold">A</div>
          <div>
            <h1 className="font-semibold">AI Companion</h1>
            <span className="text-xs text-[#A0A0B0] flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Online
            </span>
          </div>
        </div>
        <button className="text-[#A0A0B0]">•••</button>
      </header>
      
      <div className="mt-6 space-y-4">
        <div className="bg-[#1A1A22] p-3 rounded-lg max-w-[80%] self-start">
          <p className="text-sm">Hello! How are you feeling today?</p>
        </div>
        <div className="bg-[#FF3366] p-3 rounded-lg max-w-[80%] ml-auto">
          <p className="text-sm">I'm doing great, thanks for asking!</p>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 w-full p-4 bg-[#0F0F13]">
        <input 
          type="text" 
          placeholder="Type a message..." 
          className="w-full p-3 rounded-full bg-[#1A1A22] border border-[#333] focus:outline-none focus:border-[#FF3366]"
        />
      </footer>
    </main>
  );
}