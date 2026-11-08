import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F13] text-white p-4">
      <header className="fixed top-0 left-0 w-full bg-[#1A1A22] p-4 flex items-center justify-between border-b border-[#2A2A35]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF3366] to-purple-600" />
          <div>
            <h1 className="font-bold">AI Companion</h1>
            <span className="text-xs text-green-400">● Online</span>
          </div>
        </div>
        <button className="text-[#A0A0B0]">•••</button>
      </header>
      
      <div className="pt-24 pb-20 px-2 space-y-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1A1A22] p-4 rounded-2xl max-w-[80%]"
        >
          <p>Hallo! Wie kann ich dir heute den Tag versüßen?</p>
        </motion.div>
      </div>

      <footer className="fixed bottom-0 left-0 w-full p-4 bg-[#0F0F13]">
        <input 
          type="text" 
          placeholder="Schreibe eine Nachricht..." 
          className="w-full bg-[#1A1A22] p-4 rounded-full border border-[#2A2A35] focus:outline-none focus:border-[#FF3366]"
        />
      </footer>
    </main>
  );
}