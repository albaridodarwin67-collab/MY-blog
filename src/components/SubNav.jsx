import React from 'react';

export default function SubNav({ categories, activeTab, onTabChange }) {
  return (
    <div className="sub-nav-wrapper">
      <div className="sub-nav">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`sub-nav-item ${activeTab === cat ? "active" : ""}`}
            onClick={() => onTabChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <style>{`
        .sub-nav-wrapper {
          width: 100%;
          background: #ffffff;
          border-bottom: 1px solid #e2e8f0;
        }

        .sub-nav {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 0.75rem 1.25rem;
          overflow-x: auto;
          white-space: nowrap;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none; /* Firefox */
        }

        .sub-nav::-webkit-scrollbar {
          display: none; /* Chrome / Safari */
        }

        .sub-nav-item {
          background: transparent;
          border: none;
          font-weight: 700;
          font-size: 0.9rem;
          color: #64748b;
          cursor: pointer;
          padding-bottom: 0.25rem;
          border-bottom: 2px solid transparent;
          transition: all 0.2s ease;
          flex-shrink: 0;
          text-transform: uppercase;
        }

        .sub-nav-item.active {
          color: #059669;
          border-bottom-color: #059669;
        }

        @media (max-width: 768px) {
          .sub-nav {
            gap: 1rem;
            padding: 0.65rem 1rem;
          }

          .sub-nav-item {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
}