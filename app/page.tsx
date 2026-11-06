import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-4">
      <header className="fixed top-0 left-0 right-0 h-16 bg-[#1A1A22] flex items-center px-4 border-b border-[#333]">
        <div className="w-10 h-10 rounded-full bg-[#FF3366] mr-3" />
        <h1 className="font-bold">MyBabes Clone</h1>
        <div className="ml-auto w-3 h-3 bg-green-500 rounded-full" />
      </header>
      <div className="pt-20">
        <p className="text-[#A0A0B0]">Willkommen in der Chat-Umgebung. Die KI-Integration ist bereit.</p>
      </div>
    </main>
  );
}