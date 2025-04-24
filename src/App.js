import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/globals.css';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Awards from './pages/Awards';
import Contact from './pages/Contact';

// Import components
import Layout from './components/Layout';
import AIChat from './components/AIChat';

export default function App() {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="projects" element={<Projects />} />
          <Route path="education" element={<Education />} />
          <Route path="awards" element={<Awards />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      
      <AIChat />
    </Router>
  );
}