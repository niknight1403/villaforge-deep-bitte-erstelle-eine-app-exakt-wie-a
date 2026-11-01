import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F0F13] text-white p-4">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold text-[#FF3366]">MyBabes Clone</h1>
        <div className="w-10 h-10 rounded-full bg-gray-700"></div>
      </header>
      <main className="mt-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-[#1A1A22] rounded-2xl"
        >
          <h2 className="text-xl">Willkommen zurück</h2>
          <p className="text-[#A0A0B0] mt-2">Wähle eine Begleiterin für den Chat.</p>
        </motion.div>
      </main>
    </div>
  );
}