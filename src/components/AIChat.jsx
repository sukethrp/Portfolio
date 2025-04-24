import React, { useState, useRef, useEffect } from 'react';

// Project data
const projectsData = [
  {
    name: "alzheimer's classification",
    title: "Classification of Alzheimer's Disease using RF Signals and Machine Learning",
    description: "A machine learning pipeline to classify Alzheimer's Disease with 88% accuracy.",
    technologies: ["Python", "Machine Learning", "Data Cleaning", "Data Transformation", "Tableau"],
    features: [
      "Designed a machine learning pipeline to classify Alzheimer's Disease with 88% accuracy",
      "Utilized Python for data cleaning, transformation, and visualization, achieving 82% data completeness",
      "Created dashboards in Tableau to showcase model predictions and trends in diagnostic accuracy"
    ],
    details: "This project uses radio frequency signals and machine learning to classify Alzheimer's Disease with 88% accuracy. It involves data cleaning, transformation, and visualization using Python, achieving 82% data completeness. The project includes dashboards in Tableau to showcase model predictions and trends in diagnostic accuracy."
  },
  {
    name: "music recommendation",
    title: "Music Recommendation System using Python and Last.FM API",
    description: "A personalized music recommendation system that increased daily active users by 40%.",
    technologies: ["Python", "SQL", "Last.FM API", "Data Processing"],
    features: [
      "Engineered a personalized music recommendation system, increasing daily active users by 40%",
      "Processed 100,000+ tracks using Python and SQL, tailored recommendations with a 92% user satisfaction rate",
      "Built a user-friendly interface to visualize preferences and suggestions, enhancing user engagement"
    ],
    details: "This music recommendation system analyzes user preferences from Last.FM to provide personalized music suggestions. It processed over 100,000 tracks using Python and SQL, achieving a 92% user satisfaction rate. The system includes a user-friendly interface to visualize preferences and suggestions, enhancing user engagement and increasing daily active users by 40%."
  }
];

// Project-specific responses
const projectResponses = {
  alzheimer: {
    "hi": "Hello! I'm the Alzheimer's Classification Project Assistant. I can tell you about the project's methodology, results, and technical details. What would you like to know?",
    "hello": "Hi there! I'm here to answer questions about the Alzheimer's Classification project. How can I help you?",
    "accuracy": "The Alzheimer's Classification model achieved 88% accuracy in distinguishing between healthy individuals and those with Alzheimer's disease.",
    "how does it work": "The system works by analyzing radio frequency signals from patients. It processes these signals through a machine learning pipeline that includes data cleaning, transformation, and visualization.",
    "methodology": "The methodology involves RF signal processing, data cleaning, transformation, and machine learning classification. We achieved 82% data completeness through careful preprocessing.",
    "technologies": "The project uses Python for data processing and machine learning, along with Tableau for visualization and dashboard creation.",
    "challenges": "The main challenges included processing complex RF signals, ensuring data completeness, and optimizing the machine learning pipeline for high accuracy.",
    "results": "The system achieved 88% classification accuracy, successfully distinguishing between healthy individuals and those with Alzheimer's disease using RF signals.",
    "future": "Future improvements could include expanding the dataset, incorporating additional signal types, and developing a real-time monitoring system for early detection.",
    "help": "I can tell you about the project's methodology, results, technologies used, challenges faced, and future improvements. What would you like to know?"
  },
  music: {
    "hi": "Hello! I'm the Music Recommendation System Assistant. I can tell you about how the system works, the algorithms used, and its features. What would you like to know?",
    "hello": "Hi there! I'm here to answer questions about the Music Recommendation System. How can I help you?",
    "how does it work": "The system works by analyzing user preferences from Last.FM. It processes over 100,000 tracks using Python and SQL to create personalized recommendations.",
    "algorithms": "The system uses data processing algorithms to analyze user listening patterns and create personalized recommendations with a 92% user satisfaction rate.",
    "technologies": "The project uses Python, SQL, and the Last.FM API for data processing and recommendation generation.",
    "features": "Key features include processing 100,000+ tracks, achieving 92% user satisfaction, and providing a user-friendly interface for visualizing preferences and suggestions.",
    "accuracy": "The system achieved a 92% user satisfaction rate with its recommendations, significantly improving user engagement.",
    "challenges": "Main challenges included processing large amounts of user data (100,000+ tracks), balancing recommendation diversity with relevance, and creating an intuitive user interface.",
    "future": "Future improvements could include incorporating more audio features, adding real-time recommendation updates, and expanding to other music platforms.",
    "help": "I can tell you about how the system works, the algorithms used, technologies, features, challenges faced, and future improvements. What would you like to know?"
  }
};

// Enhanced responses with project information
const dummyResponses = {
  "hi": "Hey there! I'm Suketh's AI assistant 🤖",
  "hello": "Hello! How can I help you today?",
  "projects": "Suketh has built several impressive projects including a Classification of Alzheimer's Disease using RF Signals and Machine Learning (88% accuracy), and a Music Recommendation System using Python and Last.FM API (92% user satisfaction). Would you like to know more about either of these?",
  "alzheimer": "The Alzheimer's Classification project uses radio frequency signals and machine learning to detect Alzheimer's disease with 88% accuracy. It processes RF signals through a machine learning pipeline that includes data cleaning, transformation, and visualization.",
  "music": "The Music Recommendation System analyzes user preferences from Last.FM to suggest personalized tracks. It processed 100,000+ tracks using Python and SQL, achieving a 92% user satisfaction rate and increasing daily active users by 40%.",
  "resume": "You can view and download the resume on the Resume page 📄",
  "skills": "Suketh's skills include Python, SQL, C++, Java, JavaScript, HTML, CSS, Angular JS, Tableau, Power BI, AWS, Pandas, TypeScript, and Microsoft Office Suite.",
  "experience": "Suketh has experience as a Machine Learning Data Associate at Amazon (Aug 2023 - Aug 2024) and a Data Engineer at Flipkart (Jan 2023 - Jun 2023). He's also worked as a Research Assistant for Cognitive Radio Sensor Network (CRSN) in Summer 2024.",
  "education": "Suketh is pursuing a Master's in Information Systems at Northeastern University (Expected Dec 2026) and holds a Bachelor of Technology in Computer Science and Engineering from Sreenidhi Institute of Science and Technology (Jul 2019 - Jul 2023).",
  "contact": "You can reach out to Suketh at produtoor.s@northeastern.edu or connect with him on LinkedIn at linkedin.com/in/sukethprodutoor.",
  "portfolio": "This MetaMorph portfolio showcases Suketh's projects and skills. It's built with React and features a modern, responsive design.",
  "chatbot": "I'm an AI assistant created to help visitors learn more about Suketh's portfolio. I can answer questions about his projects, skills, and experience.",
  "help": "I can tell you about Suketh's projects, skills, experience, education, and more. Just ask me anything!",
  "bye": "Goodbye! Feel free to come back if you have more questions! 👋",
  "thanks": "You're welcome! Let me know if you need anything else!",
  "thank you": "You're welcome! Let me know if you need anything else!"
};

export default function AIChat({ isDemoMode = false, activeProject = null }) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: getInitialMessage(isDemoMode, activeProject) }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(isDemoMode);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Get initial message based on active project
  function getInitialMessage(isDemo, project) {
    if (isDemo && project) {
      if (project === "alzheimer") {
        return "Hi! I'm the Alzheimer's Classification Project Assistant. Ask me anything about the project, its methodology, or results!";
      } else if (project === "music") {
        return "Hi! I'm the Music Recommendation System Assistant. Ask me anything about how the system works or its features!";
      }
    }
    return isDemo 
      ? "Hi! I'm Suketh's AI Portfolio Assistant. Ask me anything about his projects, skills, or experience!" 
      : "Hi! I'm your portfolio assistant. Ask me anything!";
  }

  const simulateTyping = (response) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'bot', text: response }]);
      setIsTyping(false);
    }, 1000);
  };

  // Function to find project-specific information
  const findProjectInfo = (userMessage) => {
    const userMessageLower = userMessage.toLowerCase();
    
    // Check for project names
    for (const project of projectsData) {
      if (userMessageLower.includes(project.name)) {
        return {
          found: true,
          response: `${project.title}: ${project.description}\n\nKey features:\n${project.features.map(f => `- ${f}`).join('\n')}\n\nTechnologies: ${project.technologies.join(', ')}`
        };
      }
    }
    
    // Check for technology mentions
    const allTechnologies = projectsData.flatMap(p => p.technologies);
    for (const tech of allTechnologies) {
      if (userMessageLower.includes(tech.toLowerCase())) {
        const projectsWithTech = projectsData.filter(p => 
          p.technologies.some(t => t.toLowerCase() === tech.toLowerCase())
        );
        
        if (projectsWithTech.length > 0) {
          return {
            found: true,
            response: `Suketh has used ${tech} in the following projects:\n\n${projectsWithTech.map(p => 
              `- ${p.title}: ${p.description}`
            ).join('\n')}`
          };
        }
      }
    }
    
    return { found: false, response: null };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userMessage = input.trim();
    if (!userMessage) return;

    setMessages((prev) => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');

    // Find the best matching response
    let response = "I'm not sure how to answer that 🤔";
    const userMessageLower = userMessage.toLowerCase();
    
    // Check for project-specific responses if in project demo mode
    if (activeProject && projectResponses[activeProject]) {
      // Check for exact matches in project-specific responses
      if (projectResponses[activeProject][userMessageLower]) {
        response = projectResponses[activeProject][userMessageLower];
      } 
      // Check for partial matches in project-specific responses
      else {
        for (const key in projectResponses[activeProject]) {
          if (userMessageLower.includes(key)) {
            response = projectResponses[activeProject][key];
            break;
          }
        }
      }
    }
    
    // If no project-specific response found, check for general project info
    if (response === "I'm not sure how to answer that 🤔") {
      const projectInfo = findProjectInfo(userMessage);
      if (projectInfo.found) {
        response = projectInfo.response;
      } 
      // Check for exact matches in general responses
      else if (dummyResponses[userMessageLower]) {
        response = dummyResponses[userMessageLower];
      } 
      // Check for partial matches in general responses
      else {
        for (const key in dummyResponses) {
          if (userMessageLower.includes(key)) {
            response = dummyResponses[key];
            break;
          }
        }
      }
    }

    // Simulate typing delay
    simulateTyping(response);
  };

  return (
    <>
      {!isDemoMode && (
        <div 
          className="fixed bottom-4 right-4 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-transform hover:scale-110"
          onClick={() => setIsExpanded(true)}
        >
          <span className="text-white text-xl">🤖</span>
        </div>
      )}
      
      {isExpanded && (
        <div className={`${isDemoMode ? 'w-full h-full flex flex-col' : 'fixed bottom-4 right-4 w-72'} bg-white/10 text-white p-4 rounded-xl shadow-lg backdrop-blur-md z-50`}>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-cyan-400">
              {activeProject 
                ? activeProject === "alzheimer" 
                  ? "Alzheimer's Project Assistant" 
                  : "Music Recommender Assistant"
                : "Portfolio Assistant"}
            </h3>
            {!isDemoMode && (
              <button 
                onClick={() => setIsExpanded(false)}
                className="text-white/70 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
          
          <div className={`${isDemoMode ? 'flex-1' : 'max-h-60'} overflow-y-auto mb-2 text-sm space-y-2`}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block px-3 py-1 rounded-lg ${msg.sender === 'user' ? 'bg-cyan-500' : 'bg-white/20'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
            {isTyping && (
              <div className="text-left">
                <span className="inline-block px-3 py-1 rounded-lg bg-white/20">
                  <span className="inline-block w-2 h-2 bg-white/60 rounded-full mr-1 animate-bounce"></span>
                  <span className="inline-block w-2 h-2 bg-white/60 rounded-full mr-1 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="inline-block w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 p-2 rounded bg-white/20 text-white border border-white/10 focus:outline-none"
            />
            <button type="submit" className="bg-cyan-500 px-3 rounded hover:bg-cyan-600">➤</button>
          </form>
        </div>
      )}
    </>
  );
}