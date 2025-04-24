import React from 'react';
import { motion } from 'framer-motion';

const awards = [
  {
    title: "Research Assistant",
    organization: "Cognitive Radio Sensor Network (CRSN)",
    date: "Summer 2024",
    description: "Engineered a novel CRSN system in MATLAB to upgrade frequency allocation, expanding coverage by 65%. Authored a paper presented at the IEEE Conference, contributing to advancements in low-cost sensor networks.",
    icon: "🔬"
  },
  {
    title: "Machine Learning Data Associate",
    organization: "Amazon",
    date: "Aug 2023 - Aug 2024",
    description: "Spearheaded comprehensive data quality assurance initiatives, achieving a 15% improvement in data consistency and enabled a 30% cut in data handling inaccuracies. Engineered and maintained dynamic Tableau and Power BI dashboards.",
    icon: "📊"
  },
  {
    title: "Data Engineer",
    organization: "Flipkart",
    date: "Jan 2023 - Jun 2023",
    description: "Collaborated with cross-functional teams to identify data inconsistencies and enhance data quality, leading to the development and deployment of a data validation framework using Excel, MySQL, and Python, improved overall data reliability by 25%.",
    icon: "💡"
  },
  {
    title: "Alzheimer's Disease Classification Project",
    organization: "Academic Project",
    date: "2023",
    description: "Designed a machine learning pipeline to classify Alzheimer's Disease with 88% accuracy. Utilized Python for data cleaning, transformation, and visualization, achieving 82% data completeness.",
    icon: "🧠"
  },
  {
    title: "Music Recommendation System",
    organization: "Academic Project",
    date: "2023",
    description: "Engineered a personalized music recommendation system, increasing daily active users by 40%. Processed 100,000+ tracks using Python and SQL, tailored recommendations with a 92% user satisfaction rate.",
    icon: "🎵"
  }
];

export default function Awards() {
  return (
    <div id="awards" className="min-h-screen bg-black text-white px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">🏅 Awards & Recognition</h2>
        <p className="text-xl text-white/70">
          Achievements and accolades
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {awards.map((award, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md"
          >
            <div className="flex items-start mb-4">
              <span className="text-4xl mr-4">{award.icon}</span>
              <div>
                <h3 className="text-xl font-bold text-cyan-400">{award.title}</h3>
                <p className="text-white/80">{award.organization}</p>
                <span className="text-sm text-white/60">{award.date}</span>
              </div>
            </div>
            
            <p className="text-white/70">{award.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 