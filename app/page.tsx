import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-6">
      <header className="flex items-center justify-between pb-6 border-b border-[#1A1A22]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FF3366]" />
          <div>
            <h1 className="font-bold">MyBabes Clone</h1>
            <p className="text-xs text-[#A0A0B0]">Online</p>
          </div>
        </div>
      </header>
      <div className="mt-8">
        <p className="text-[#A0A0B0]">Willkommen in der interaktiven Companion-Umgebung.</p>
      </div>
    </main>
  );
}