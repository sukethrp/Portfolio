import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Amazon",
    role: "Machine Learning Data Associate",
    period: "Aug 2023 - Aug 2024",
    description: "Spearheaded comprehensive data quality assurance initiatives, leveraging Python and SQL to conduct data validation and transformation, achieving a 15% improvement in data consistency and enabled a 30% cut in data handling inaccuracies.",
    achievements: [
      "Engineered and maintained dynamic Tableau and Power BI dashboards, enabling visualization of key performance metrics and driving actionable insights for cross-functional teams",
      "Automated critical workflows by developing robust ETL pipelines, streamlining data processing operations and improving accessibility, resulted in a 35% reduction in processing time",
      "Designed and executed advanced SQL queries to perform detailed data analysis and validation, ensuring compliance with quality standards and providing precise, reliable insights",
      "Diagnosed and resolved data inconsistencies and anomalies, improving dataset integrity by 25%, enhancing machine learning model accuracy by 15% impacting retention of 2M customers",
      "Endorsed adoption of data governance frameworks, documenting data lineage, ownership, and definitions to enhance transparency, compliance, and traceability across teams"
    ],
    technologies: ["Python", "SQL", "Tableau", "Power BI", "ETL Pipelines", "Data Quality Frameworks"]
  },
  {
    company: "Flipkart",
    role: "Data Engineer",
    period: "Jan 2023 - Jun 2023",
    description: "Collaborated with cross-functional teams to identify data inconsistencies and enhance data quality, leading to the development and deployment of a data validation framework using Excel, MySQL, and Python, improved overall data reliability by 25%.",
    achievements: [
      "Performed comprehensive data audits and performance evaluations for new product launches, delivering actionable insights driving a 10% increase in overall business growth",
      "Developed and optimized advanced SQL queries to evaluate product datasets, ensuring data accuracy and completeness to support informed decision-making",
      "Created interactive Tableau dashboards to visualize key performance indicators (KPIs) such as purchase metrics and order statistics, boosting operational efficiency by 20%",
      "Established rigorous data transformation protocols increasing data accuracy by 25%; ensured compliance with governance standards across three business units, resulting in enhanced reporting capabilities and better decision-making processes"
    ],
    technologies: ["Python", "SQL", "Excel", "MySQL", "Tableau", "Data Validation", "ETL Processes"]
  },
  {
    company: "Cognitive Radio Sensor Network (CRSN)",
    role: "Research Assistant",
    period: "Summer 2024",
    description: "Engineered a novel CRSN system in MATLAB to upgrade frequency allocation, expanding coverage by 65%. Authored a paper presented at the IEEE Conference, contributing to advancements in low-cost sensor networks.",
    achievements: [
      "Developed MATLAB-based algorithms for frequency allocation optimization",
      "Conducted extensive simulations to validate system performance",
      "Authored research paper presented at IEEE Conference",
      "Collaborated with research team to implement novel approaches to sensor network design"
    ],
    technologies: ["MATLAB", "Wireless Communication", "Sensor Networks", "Research", "IEEE Publications"]
  }
];

export default function Experiences() {
  return (
    <div id="experiences" className="min-h-screen bg-black text-white px-8 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center">💼 Work Experience</h2>
      
      <div className="max-w-4xl mx-auto space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-md"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400">{exp.company}</h3>
                <p className="text-xl text-white/80">{exp.role}</p>
              </div>
              <span className="bg-cyan-500/20 text-cyan-300 px-4 py-1 rounded-full text-sm mt-2 md:mt-0">
                {exp.period}
              </span>
            </div>
            
            <p className="text-white/70 mb-6">{exp.description}</p>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-white/90">Key Achievements</h4>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-white/90">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 