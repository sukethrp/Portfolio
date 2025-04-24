import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link to="/" className="text-xl font-bold tracking-wide text-white">
            MetaMorph 🚀
          </Link>
          <p className="text-white/60 text-sm mt-2">
            © {new Date().getFullYear()} Suketh Reddy. All rights reserved.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a 
            href="https://github.com/sukethrp?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-cyan-400 transition"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/sukethprodutoor/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:produtoor.s@northeastern.edu" 
            className="text-white/70 hover:text-cyan-400 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
} 