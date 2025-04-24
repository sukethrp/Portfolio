import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div id="about" className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">👋 About Me</h2>
          <p className="text-xl text-white/70">
            A data engineer and machine learning specialist
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-md"
        >
          <p className="text-white/80 mb-6 leading-relaxed">
            Hello! I'm Suketh Reddy Produtoor, a data engineer and machine learning specialist with experience at leading tech companies like Amazon and Flipkart. Currently pursuing my Master's in Information Systems at Northeastern University, I bring expertise in data processing, ETL pipelines, and data visualization.
          </p>
          
          <p className="text-white/80 mb-6 leading-relaxed">
            My academic journey began at Sreenidhi Institute of Science and Technology, where I developed a strong foundation in computer science. I've worked on various projects including Alzheimer's disease classification using RF signals and machine learning, and a music recommendation system using Python and Last.FM API.
          </p>
          
          <p className="text-white/80 leading-relaxed">
            I'm passionate about creating efficient data pipelines and intelligent systems that solve real-world problems. My experience spans across data engineering, machine learning, and data visualization. When I'm not working with data, I enjoy exploring new technologies and contributing to the tech community.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 