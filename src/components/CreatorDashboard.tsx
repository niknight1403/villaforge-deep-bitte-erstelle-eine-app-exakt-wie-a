import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Persona {
  id: string;
  name: string;
  description: string;
  price: number;
}

export const CreatorDashboard = () => {
  const [personas, setPersonas] = useState<Persona[]>([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleCreate = () => {
    if (!name || !description) return;
    const newPersona = { id: Date.now().toString(), name, description, price: 9.99 };
    setPersonas([...personas, newPersona]);
    setName('');
    setDescription('');
  };

  return (
    <div className="p-6 bg-[#0F0F13] text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Creator Dashboard</h1>
      <div className="bg-[#1A1A22] p-6 rounded-xl mb-8">
        <h2 className="text-lg mb-4">Create New Persona</h2>
        <input 
          className="w-full p-3 mb-3 bg-[#0F0F13] border border-[#FF3366] rounded" 
          placeholder="Persona Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <textarea 
          className="w-full p-3 mb-3 bg-[#0F0F13] border border-[#FF3366] rounded" 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        <button 
          onClick={handleCreate} 
          className="bg-[#FF3366] px-6 py-2 rounded font-bold"
        >
          Submit for Review
        </button>
      </div>
      <div>
        <h2 className="text-lg mb-4">Your Personas</h2>
        {personas.map(p => (
          <motion.div key={p.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[#1A1A22] p-4 mb-3 rounded">
            <h3 className="font-bold">{p.name}</h3>
            <p className="text-[#A0A0B0]">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};