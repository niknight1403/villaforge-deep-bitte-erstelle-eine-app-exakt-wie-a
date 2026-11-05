import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-6">
      <header className="flex items-center justify-between pb-6 border-b border-[#1A1A22]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF3366] to-purple-600" />
          <div>
            <h1 className="font-bold">MyBabes AI</h1>
            <p className="text-xs text-[#A0A0B0]">Online</p>
          </div>
        </div>
      </header>
      <section className="mt-8">
        <div className="p-4 bg-[#1A1A22] rounded-2xl">
          <h2 className="text-xl font-semibold">Welcome to your AI Companion</h2>
          <p className="text-[#A0A0B0] mt-2">Start chatting with your personalized AI model.</p>
        </div>
      </section>
    </main>
  );
}