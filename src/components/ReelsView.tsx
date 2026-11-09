import React from 'react';
import { motion } from 'framer-motion';

export const ReelsView = () => {
  const reels = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {reels.map((reel) => (
        <motion.div 
          key={reel.id} 
          className="h-64 bg-[#1A1A22] rounded-xl flex items-center justify-center border border-[#333]"
          whileHover={{ scale: 1.02 }}
        >
          <span className="text-[#A0A0B0]">Reel {reel.id} (Video-Sequenz)</span>
        </motion.div>
      ))}
    </div>
  );
};