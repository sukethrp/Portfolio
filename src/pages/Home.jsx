import React from 'react';
import { motion } from 'framer-motion';
import Metaverse from '../components/Metaverse';

export default function Home() {
  return (
    <div className="h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Metaverse />
      
      <div className="flex-grow flex items-center justify-center relative z-10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm Suketh
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Data Engineer & Machine Learning Enthusiast
          </motion.p>
        </div>
      </div>
    </div>
  );
}