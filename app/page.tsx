import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-6">
      <header className="flex justify-between items-center border-b border-[#1A1A22] pb-4">
        <h1 className="text-2xl font-bold text-[#FF3366]">Aurora Companion Studio</h1>
        <div className="w-10 h-10 rounded-full bg-[#1A1A22] border border-[#FF3366]" />
      </header>
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Willkommen bei Aurora</h2>
        <p className="text-gray-400 mt-2">Entdecke deine virtuelle Begleiterin.</p>
      </section>
    </main>
  );
}