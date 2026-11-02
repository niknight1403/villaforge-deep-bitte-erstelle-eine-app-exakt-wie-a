import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F0F13] text-white p-4">
      <header className="flex items-center justify-between p-4 border-b border-[#1A1A22]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FF3366]" />
          <div>
            <h1 className="font-bold">Companion</h1>
            <span className="text-xs text-green-500">Online</span>
          </div>
        </div>
      </header>
      <main className="mt-4">
        <div className="p-4 bg-[#1A1A22] rounded-lg">
          <p className="text-gray-300">Hello! How can I help you today?</p>
        </div>
      </main>
    </div>
  );
}