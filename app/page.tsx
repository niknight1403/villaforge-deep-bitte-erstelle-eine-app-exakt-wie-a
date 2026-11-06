import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-4">
      <header className="flex items-center justify-between py-4 border-b border-[#1A1A22]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FF3366] flex items-center justify-center">A</div>
          <div>
            <h1 className="font-bold">AI Companion</h1>
            <span className="text-xs text-green-500">● Online</span>
          </div>
        </div>
      </header>
      <div className="mt-6 p-4 bg-[#1A1A22] rounded-xl">
        <p className="text-[#A0A0B0]">Willkommen! Wie kann ich dir heute helfen?</p>
      </div>
    </main>
  );
}