import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    school: "Northeastern University",
    degree: "Master's in Information Systems",
    period: "Expected Dec 2026",
    description: "Relevant Courses: Application Engineering and Development, Network Structures and Cloud Computing",
    achievements: []
  },
  {
    school: "Sreenidhi Institute of Science and Technology",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "Jul 2019 - Jul 2023",
    description: "Relevant Courses: Data Structures & Algorithms, Operating Systems, Cloud Computing, and Probability and Statistics.",
    achievements: []
  }
];

export default function Education() {
  return (
    <div id="education" className="min-h-screen bg-black text-white px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">🎓 Education</h2>
        <p className="text-xl text-white/70">
          My academic journey
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-8">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-md"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400">{edu.school}</h3>
                <p className="text-xl text-white/80">{edu.degree}</p>
              </div>
              <div className="flex flex-col items-end mt-2 md:mt-0">
                <span className="bg-cyan-500/20 text-cyan-300 px-4 py-1 rounded-full text-sm">
                  {edu.period}
                </span>
              </div>
            </div>
            
            <p className="text-white/70 mb-6">{edu.description}</p>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-white/90">Achievements</h4>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                {edu.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 