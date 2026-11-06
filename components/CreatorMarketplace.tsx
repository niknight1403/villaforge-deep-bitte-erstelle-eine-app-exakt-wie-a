import React from 'react';
import { motion } from 'framer-motion';

interface Asset {
  id: string;
  title: string;
  price: number;
  image: string;
}

const mockAssets: Asset[] = [
  { id: '1', title: 'Exclusive Photo Set A', price: 50, image: '/placeholder-1.jpg' },
  { id: '2', title: 'Interactive Scenario B', price: 100, image: '/placeholder-2.jpg' },
];

export default function CreatorMarketplace() {
  return (
    <div className="p-4 bg-[#0F0F13] text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-[#FF3366]">Creator Marketplace</h2>
      <div className="grid grid-cols-1 gap-4">
        {mockAssets.map((asset) => (
          <motion.div 
            key={asset.id} 
            className="p-4 bg-[#1A1A22] rounded-xl border border-[#333]"
            whileHover={{ scale: 1.02 }}
          >
            <div className="h-40 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">Preview</div>
            <h3 className="text-lg font-semibold">{asset.title}</h3>
            <p className="text-[#A0A0B0] mb-4">{asset.price} Credits</p>
            <button className="w-full py-2 bg-[#FF3366] rounded-lg font-bold hover:bg-[#ff1a55] transition">
              Unlock Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}