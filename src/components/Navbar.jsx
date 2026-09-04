import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo">
          <span className="palm-icon">🌴</span>
          <span className="logo-dark">Davao</span>
          <span className="logo-green">Getaways</span>
        </Link>

        {/* Inline Nav Links */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
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
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          text-decoration: none;
          font-weight: 800;
          font-size: 1.35rem;
          white-space: nowrap;
        }

        .logo-dark { color: #0f172a; }
        .logo-green { color: #059669; }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
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

        /* MOBILE STYLES */
        @media (max-width: 768px) {
          .nav-container {
            padding: 0.65rem 1rem;
          }

          .brand-logo {
            font-size: 1.05rem;
          }

          .nav-links {
            gap: 1rem;
          }

          .nav-links a {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </nav>
  );
}