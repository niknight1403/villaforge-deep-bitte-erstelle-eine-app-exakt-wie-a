import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const VideoGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [model, setModel] = useState('model-a');
  const [duration, setDuration] = useState(5);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  return (
    <div className="p-6 bg-[#1A1A22] rounded-xl text-white">
      <h2 className="text-xl font-bold mb-4">Video Generator</h2>
      <div className="space-y-4">
        <input 
          className="w-full p-3 bg-[#0F0F13] border border-[#FF3366] rounded-lg" 
          placeholder="Beschreibe dein Video..." 
          value={prompt} 
          onChange={(e) => setPrompt(e.target.value)} 
        />
        <select className="w-full p-3 bg-[#0F0F13] rounded-lg" value={model} onChange={(e) => setModel(e.target.value)}>
          <option value="model-a">Cinematic Flow (Modell A)</option>
          <option value="model-b">Dynamic Action (Modell B)</option>
        </select>
        <button 
          onClick={handleGenerate}
          className="w-full py-3 bg-[#FF3366] rounded-lg font-bold hover:opacity-90"
        >
          {isGenerating ? 'Generiere...' : 'Video erstellen'}
        </button>
      </div>
      <div className="mt-6 h-48 bg-[#0F0F13] rounded-lg flex items-center justify-center text-[#A0A0B0]">
        Vorschau-Bereich (Nicht konfiguriert)
      </div>
    </div>
  );
};