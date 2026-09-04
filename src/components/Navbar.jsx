import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo">
          <span className="palm-icon">🌴</span>
          <span className="logo-dark">Davao</span>
          <span className="logo-green">Getaways</span>
        </Link>

        {/* Mobile Hamburger Button */}
        <button 
          className="hamburger" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </button>

        {/* Nav Links */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        </div>
      </div>

      <style>{`
        .navbar {
          background: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          position: sticky;
          top: 0;
          z-index: 9999;
          width: 100%;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0.85rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          text-decoration: none;
          font-weight: 800;
          font-size: 1.35rem;
        }

        .logo-dark { color: #0f172a; }
        .logo-green { color: #059669; }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-links a {
          text-decoration: none;
          color: #334155;
          font-weight: 600;
          font-size: 1rem;
          transition: color 0.2s ease;
        }

        .nav-links a:hover {
          color: #059669;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .bar {
          width: 24px;
          height: 3px;
          background-color: #0f172a;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        /* MOBILE STYLES */
        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #ffffff;
            flex-direction: column;
            align-items: flex-start;
            padding: 1rem 1.5rem;
            gap: 1.25rem;
            border-bottom: 1px solid #e2e8f0;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            display: none;
          }

          .nav-links.active {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
}