import React from 'react';

export default function Resume() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8">📄 My Resume</h2>

      <p className="max-w-2xl text-center text-lg text-gray-300 mb-6">
        Here's a snapshot of my journey in software engineering, machine learning, and building
        immersive digital experiences. Want the full story? Grab the resume!
      </p>

      <a
        href="/resume.pdf"
        download
        className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-cyan-400 hover:text-white transition-all"
      >
        Download Resume
      </a>
    </div>
  );
}