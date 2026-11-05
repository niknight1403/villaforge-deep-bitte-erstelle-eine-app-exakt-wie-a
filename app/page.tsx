import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-4">
      <header className="flex items-center justify-between p-4 border-b border-[#1A1A22]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1A1A22] border border-[#FF3366] flex items-center justify-center">
            <span className="text-[#FF3366]">AI</span>
          </div>
          <div>
            <h1 className="font-bold">Companion</h1>
            <p className="text-xs text-[#A0A0B0]">Online</p>
          </div>
        </div>
      </header>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold">Willkommen bei MyBabes AI</h2>
        <p className="text-[#A0A0B0] mt-2">Dein KI-Begleiter wartet auf dich.</p>
      </div>
    </main>
  );
}