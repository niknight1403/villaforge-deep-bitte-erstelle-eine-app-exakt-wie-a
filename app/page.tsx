import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-4">
      <header className="flex items-center justify-between border-b border-[#1A1A22] pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FF3366]" />
          <div>
            <h1 className="font-bold">AI Companion</h1>
            <p className="text-xs text-[#A0A0B0]">Online</p>
          </div>
        </div>
      </header>
      <section className="mt-6">
        <div className="bg-[#1A1A22] p-4 rounded-xl">
          <p className="text-[#A0A0B0]">Hello! How can I help you today?</p>
        </div>
      </section>
    </main>
  );
}