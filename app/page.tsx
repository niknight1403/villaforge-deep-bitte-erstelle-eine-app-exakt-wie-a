import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-4">
      <header className="fixed top-0 left-0 right-0 h-16 bg-[#1A1A22] flex items-center px-4 border-b border-[#2A2A35]">
        <div className="w-10 h-10 rounded-full bg-[#FF3366] mr-3" />
        <div>
          <h1 className="font-bold">AI Companion</h1>
          <p className="text-xs text-[#A0A0B0]">Online</p>
        </div>
      </header>
      <section className="pt-20 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-[#1A1A22] rounded-xl"
        >
          <p>Welcome to your personalized AI experience. Start chatting below.</p>
        </motion.div>
      </section>
      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-[#0F0F13]">
        <input 
          type="text" 
          placeholder="Type a message..." 
          className="w-full p-3 rounded-lg bg-[#1A1A22] border border-[#2A2A35] focus:outline-none focus:border-[#FF3366]"
        />
      </footer>
    </main>
  );
}