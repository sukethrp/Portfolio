import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const linkStyle = (path) =>
    `hover:text-cyan-400 transition ${
      location.pathname === path ? 'text-cyan-400 font-bold' : ''
    }`;

  return (
    <div className="fixed top-0 left-0 w-full z-20 flex justify-between items-center p-6 backdrop-blur-md bg-black/40">
      <Link to="/" className="text-xl font-bold tracking-wide text-white">
        MetaMorph 🚀
      </Link>

      <div className="space-x-6 text-white">
        <Link to="/about" className={linkStyle('/about')}>
          About
        </Link>
        <Link to="/skills" className={linkStyle('/skills')}>
          Skills
        </Link>
        <Link to="/experiences" className={linkStyle('/experiences')}>
          Experiences
        </Link>
        <Link to="/projects" className={linkStyle('/projects')}>
          Projects
        </Link>
        <Link to="/education" className={linkStyle('/education')}>
          Education
        </Link>
        <Link to="/contact" className={linkStyle('/contact')}>
          Contact
        </Link>
      </div>
    </div>
  );
}