import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AIChat from '../components/AIChat';

const projects = [
  {
    title: "Classification of Alzheimer's Disease using RF Signals and Machine Learning",
    description: "A machine learning model that analyzes radio frequency signals to classify Alzheimer's disease with high accuracy.",
    link: "https://www.ijert.org/classification-of-alzheimers-disease-using-rf-signals-and-machine-learning",
    details: {
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      features: [
        "RF signal processing and feature extraction",
        "Multiple ML model comparison (Random Forest, SVM, Neural Networks)",
        "Cross-validation for robust performance evaluation",
        "Feature importance analysis and visualization",
        "Achieved 92% classification accuracy"
      ],
      demo: true,
      demoType: "alzheimer"
    }
  },
  {
    title: "Music Recommendation System using Python and Last.FM API",
    description: "An intelligent music recommendation engine that suggests personalized tracks based on user preferences.",
    link: "",
    details: {
      technologies: ["Python", "Last.FM API", "Pandas", "Scikit-learn", "Flask", "React"],
      features: [
        "User preference analysis from Last.FM listening history",
        "Collaborative filtering algorithm implementation",
        "Content-based filtering using audio features",
        "Hybrid recommendation approach for improved accuracy",
        "Web interface for easy interaction"
      ],
      demo: true,
      demoType: "music"
    }
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAIChatActive, setIsAIChatActive] = useState(false);
  const [activeDemoType, setActiveDemoType] = useState(null);

  const handleProjectClick = (project, e) => {
    e.preventDefault();
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsAIChatActive(false);
    setActiveDemoType(null);
  };

  const launchDemo = (project) => {
    setActiveDemoType(project.details.demoType);
    setIsAIChatActive(true);
  };

  return (
    <div id="projects" className="min-h-screen bg-black text-white px-8 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center">🚀 My Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md shadow-md hover:shadow-lg transition cursor-pointer"
            onClick={(e) => handleProjectClick(project, e)}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.details.technologies.slice(0, 3).map((tech, techIdx) => (
                <span key={techIdx} className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs">
                  {tech}
                </span>
              ))}
              {project.details.technologies.length > 3 && (
                <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs">
                  +{project.details.technologies.length - 3} more
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-300">{selectedProject.description}</p>
              </div>
              
              {selectedProject.details && (
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.details.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-3">Key Features</h4>
                  <ul className="list-disc list-inside text-gray-300 mb-6">
                    {selectedProject.details.features.map((feature, idx) => (
                      <li key={idx} className="mb-1">{feature}</li>
                    ))}
                  </ul>
                  
                  {selectedProject.details.demo && (
                    <div className="flex gap-4">
                      <button
                        onClick={() => launchDemo(selectedProject)}
                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition"
                      >
                        Ask About This Project
                      </button>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Chatbot Demo */}
      <AnimatePresence>
        {isAIChatActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-xl p-6 max-w-4xl w-full h-[80vh] flex flex-col"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">
                  {activeDemoType === "alzheimer" 
                    ? "Alzheimer's Classification Project Assistant" 
                    : activeDemoType === "music" 
                      ? "Music Recommendation System Assistant" 
                      : "AI Portfolio Chatbot"}
                </h3>
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex-1 overflow-hidden">
                <AIChat isDemoMode={true} activeProject={activeDemoType} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}