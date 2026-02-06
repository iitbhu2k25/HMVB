'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Droplets, Waves, Map } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative w-full overflow-hidden">
      {/* Dynamic Background Layer */}
      <div className="absolute inset-0 bg-[#0a192f] bg-gradient-to-br from-[#0a192f] via-[#0a192f] to-[#0a192f]">
        {/* Subtle Overlay Pattern (Optional: Add a faint map or grid pattern) */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        
        {/* Animated Light Effect */}
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/2 -left-1/4 w-[100%] h-[200%] bg-blue-400/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-[1800px] mx-auto px-6 py-4 md:py-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Center: Main Project Title */}
          <div className="text-center flex-1 max-w-8xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight drop-shadow-2xl">
                Hydrological Modelling of Varuna River Basin 
              </h1>
            </motion.div>
          </div>

        </div>
      </div>
    </header>
  );
}