import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SubNav from './components/SubNav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogFeedPage from './pages/BlogFeedPage';
import BlogDetailPage from './pages/BlogDetailPage';
import AboutPage from './pages/AboutPage';
import Chatbot from './components/Chatbot';
import FlyingEagle from './components/FlyingEagle';
import coderImg from './assets/coder.jpg';
import './App.css';

export default function App() {
  const [isCreatorModalOpen, setIsCreatorModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <Navbar />
        <SubNav />

        <main className="main-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogFeedPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        <Footer />

        {/* FLOATING 3D EAGLE */}
        <FlyingEagle />

        {/* FLOATING KEYWORD CHATBOT */}
        <Chatbot onOpenDeveloperModal={() => setIsCreatorModalOpen(true)} />

        {/* CREATOR PROFILE MODAL */}
        {isCreatorModalOpen && (
          <div className="creator-modal-overlay" onClick={() => setIsCreatorModalOpen(false)}>
            <div className="creator-modal-card" onClick={(e) => e.stopPropagation()}>
              <button 
                className="creator-modal-close" 
                onClick={() => setIsCreatorModalOpen(false)}
              >
                ✕
              </button>

              <div className="creator-avatar-container">
                <img 
                  src={coderImg}
                  alt="Darwin Albarido" 
                  className="creator-avatar-img" 
                />
              </div>

              <h2 className="creator-name">Darwin Albarido</h2>
              <p className="creator-badge">WEB DEVELOPER & CREATOR</p>

              <div className="creator-info-box">
                <div className="creator-info-row">
                  <span className="creator-info-label">🎓 Course / Major:</span>
                  <span className="creator-info-value">BS Information Technology</span>
                </div>
                <div className="creator-info-row">
                  <span className="creator-info-label">🎂 Age:</span>
                  <span className="creator-info-value">20 Years Old</span>
                </div>
                <div className="creator-info-row">
                  <span className="creator-info-label">💻 Tech Stack:</span>
                  <span className="creator-info-value">React, JavaScript, HTML5, CSS3, PHP MYSQL</span>
                </div>
                <div className="creator-info-row">
                  <span className="creator-info-label">📍 Location:</span>
                  <span className="creator-info-value">Davao City, Philippines</span>
                </div>
              </div>

              <p className="creator-bio">
                Passionate about crafting clean, high-performance web applications and frontend interfaces that deliver great user experiences.
              </p>
            </div>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}