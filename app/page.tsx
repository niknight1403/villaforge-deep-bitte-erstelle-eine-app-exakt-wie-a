import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-4">
      <header className="flex items-center justify-between py-4 border-b border-[#1A1A22]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FF3366] flex items-center justify-center font-bold">A</div>
          <div>
            <h1 className="font-semibold">Companion</h1>
            <span className="text-xs text-[#A0A0B0]">Online</span>
          </div>
        </div>
      </header>
      <div className="mt-8 text-center text-[#A0A0B0]">
        <p>Willkommen bei deinem KI-Companion. Starte den Chat unten.</p>
      </div>
    </main>
  );
}