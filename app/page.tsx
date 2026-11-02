import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-4">
      <header className="flex items-center justify-between p-4 border-b border-[#1A1A22]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-600" />
          <div>
            <h1 className="font-bold">Companion</h1>
            <span className="text-xs text-green-500">Online</span>
          </div>
        </div>
      </header>
      <div className="mt-4 p-4 bg-[#1A1A22] rounded-xl">
        <p className="text-sm">Willkommen! Wie kann ich dir heute helfen?</p>
      </div>
      <footer className="fixed bottom-0 left-0 w-full p-4">
        <input 
          type="text" 
          placeholder="Nachricht schreiben..." 
          className="w-full p-3 rounded-full bg-[#1A1A22] border border-[#FF3366] focus:outline-none"
        />
      </footer>
    </main>
  );
}