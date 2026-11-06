import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-4">
      <header className="flex items-center justify-between border-b border-[#1A1A22] pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FF3366]" />
          <h1 className="font-bold">Companion</h1>
          <span className="w-2 h-2 rounded-full bg-green-500" />
        </div>
      </header>
      <div className="mt-8 text-center text-[#A0A0B0]">
        <p>Chat interface loading...</p>
      </div>
    </main>
  );
}