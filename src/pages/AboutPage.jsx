// src/pages/AboutPage.jsx
import { useState } from 'react';
import coderImg from '../assets/coder.jpg'; // Import your image from assets

export default function AboutPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="about-page-wrapper">
      <div className="about-container">
        
        {/* HERO / MISSION SECTION */}
        <section className="about-hero">
          <span className="about-badge">ABOUT THE PLATFORM</span>
          <h1>Connecting Travelers to Davao's Finest Destinations</h1>
          <p>
            Davao Getaways is a modern frontend web portal built to highlight 
            must-visit spots across the Davao Region—from eco-resorts and highland 
            retreats to white-sand island beaches.
          </p>
          <button className="developer-btn" onClick={() => setShowModal(true)}>
            👨‍💻 Meet the Creator
          </button>
        </section>

        {/* STATS SECTION */}
        <section className="stats-grid">
          <div className="stat-card">
            <h3>5+</h3>
            <p>Featured Destinations</p>
          </div>
          <div className="stat-card">
            <h3>100%</h3>
            <p>React & Vite Powered</p>
          </div>
          <div className="stat-card">
            <h3>2026</h3>
            <p>Edition Portal</p>
          </div>
        </section>

        {/* CORE FEATURES SECTION */}
        <section className="features-section">
          <h2>Platform Highlights</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🗺️</span>
              <h3>Curated Travel Guides</h3>
              <p>Hand-picked locations with detailed travel times, landmarks, and route information.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">⚡</span>
              <h3>Fast Navigation</h3>
              <p>Built with React Router for instant page loads and real-time category filtering.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📱</span>
              <h3>Responsive Design</h3>
              <p>Optimized for seamless reading across desktop, tablet, and mobile devices.</p>
            </div>
          </div>
        </section>

      </div>

      {/* DEVELOPER MODAL POPUP */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowModal(false)}>✕</button>
            
            <div className="profile-header">
              <div className="profile-avatar-box">
                {/* Displaying your imported local image */}
                <img src={coderImg} alt="Darwin Albarido" className="profile-img" />
              </div>
              <h2>Darwin Albarido</h2>
              <span className="profile-tag">Web Developer & Creator</span>
            </div>

            <div className="profile-details-list">
              <div className="detail-row">
                <span className="detail-label">🎓 Course / Major:</span>
                <span className="detail-value">BS Information Technology</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">🎂 Age:</span>
                <span className="detail-value">20 Years Old</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">💻 Tech Stack:</span>
                <span className="detail-value">React, JavaScript, HTML5, CSS3, PHP MYSQL</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">📍 Location:</span>
                <span className="detail-value">Davao City, Philippines</span>
              </div>
            </div>

            <p className="profile-bio">
              Passionate about crafting clean, high-performance web applications 
              and frontend interfaces that deliver great user experiences.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}