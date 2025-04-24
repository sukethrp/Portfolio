import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Python", "SQL", "C++", "Java", "JavaScript", "HTML", "CSS", "Angular JS"]
  },
  {
    category: "Tools & Libraries",
    skills: ["Tableau", "Power BI", "AWS", "Pandas", "TypeScript", "Microsoft Office Suite"]
  },
  {
    category: "Data Management",
    skills: ["Databricks", "Data Quality Frameworks", "ETL Processes", "Data Cleaning", "Data Transformation"]
  },
  {
    category: "Visualization & Analysis",
    skills: ["Tableau", "Power BI", "Regression Analysis", "Clustering", "Classification"]
  },
  {
    category: "Certifications",
    skills: ["AWS Data Analytics Virtual Internship", "AWS Cloud Virtual Internship"]
  }
];

export default function Skills() {
  return (
    <div id="skills" className="min-h-screen bg-black text-white px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">🛠️ Skills</h2>
        <p className="text-xl text-white/70">
          Technologies and tools I work with
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * idx }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md"
          >
            <h3 className="text-xl font-bold mb-4 text-cyan-400">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 