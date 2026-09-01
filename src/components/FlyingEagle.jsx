import React from 'react';

export default function FlyingEagle() {
  return (
    <div className="ph-eagle-stage">
      {/* Tree Branch */}
      <div className="ph-tree-branch">
        <svg viewBox="0 0 240 100" className="branch-svg">
          <defs>
            <linearGradient id="barkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4a2e1b" />
              <stop offset="100%" stopColor="#27160c" />
            </linearGradient>
            <linearGradient id="leafGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2e7d32" />
              <stop offset="100%" stopColor="#1b5e20" />
            </linearGradient>
          </defs>
          <path
            d="M 0 65 C 60 60, 110 50, 160 35 C 200 22, 225 25, 240 30 C 200 48, 140 62, 70 78 C 30 85, 0 88 0 88 Z"
            fill="url(#barkGrad)"
          />
          <path d="M 140 38 C 125 15, 160 10, 168 32 Z" fill="url(#leafGrad)" />
          <path d="M 170 28 C 160 5, 190 5, 185 25 Z" fill="url(#leafGrad)" />
          <path d="M 105 52 C 90 32, 120 28, 122 48 Z" fill="url(#leafGrad)" />
        </svg>
      </div>

      {/* Eagle Body */}
      <div className="ph-eagle-body">
        <svg
          viewBox="0 0 600 380"
          className="ph-eagle-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="featherGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4a2e1b" />
              <stop offset="100%" stopColor="#241308" />
            </linearGradient>
            <linearGradient id="crownGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d8b878" />
              <stop offset="100%" stopColor="#a38242" />
            </linearGradient>
          </defs>

          {/* LEFT WING */}
          <g className="ph-wing left-wing">
            <path
              d="M 270 140 C 180 20, 50 30, 0 80 C 60 140, 180 160, 260 165 Z"
              fill="url(#featherGrad)"
            />
            <path
              d="M 250 145 C 170 45, 65 50, 20 90 C 70 135, 170 150, 240 155 Z"
              fill="#5c3a21"
            />
          </g>

          {/* RIGHT WING */}
          <g className="ph-wing right-wing">
            <path
              d="M 330 140 C 420 20, 550 30, 600 80 C 540 140, 420 160, 340 165 Z"
              fill="url(#featherGrad)"
            />
            <path
              d="M 350 145 C 430 45, 535 50, 580 90 C 530 135, 430 150, 360 155 Z"
              fill="#5c3a21"
            />
          </g>

          {/* Tail Feathers */}
          <g className="ph-tail">
            <path
              d="M 280 190 L 250 310 L 300 325 L 350 310 L 320 190 Z"
              fill="#1f1107"
            />
            <path
              d="M 285 220 L 268 300 L 300 308 L 332 300 L 315 220 Z"
              fill="#ede8db"
            />
          </g>

          {/* Eagle Feet */}
          <g className="ph-eagle-feet">
            <g transform="translate(265, 225)">
              <rect x="0" y="0" width="8" height="22" rx="4" fill="#fbbf24" />
              <path d="M -4 20 Q -2 30 4 28 C 4 24, 0 20, 0 20 Z" fill="#1e293b" />
              <path d="M 2 22 Q 6 32 10 28 C 8 24, 4 20, 2 20 Z" fill="#1e293b" />
            </g>
            <g transform="translate(320, 225)">
              <rect x="0" y="0" width="8" height="22" rx="4" fill="#fbbf24" />
              <path d="M -2 22 Q 2 32 6 28 C 4 24, 0 20, -2 20 Z" fill="#1e293b" />
              <path d="M 4 20 Q 10 30 12 28 C 10 24, 6 20, 4 20 Z" fill="#1e293b" />
            </g>
          </g>

          {/* Torso */}
          <path
            d="M 265 125 C 240 170, 245 215, 280 235 C 300 235, 360 215, 335 125 Z"
            fill="#faf8f5"
          />

          {/* Head Crest */}
          <g className="ph-eagle-head">
            <path
              d="M 255 95 L 230 42 L 258 64 L 272 28 L 288 60 L 300 22 L 312 60 L 328 28 L 342 64 L 370 42 L 345 95 Z"
              fill="url(#crownGrad)"
            />
            <circle cx="300" cy="100" r="33" fill="#f5efe6" />
            <path d="M 288 88 Q 310 80 326 90 Q 308 102 288 88 Z" fill="#140f0b" />
            <circle cx="310" cy="91" r="3.5" fill="#38bdf8" />
            <circle cx="310" cy="91" r="1.5" fill="#000000" />
            <path
              d="M 312 91 C 340 91, 352 108, 338 128 C 326 116, 320 112, 312 107 Z"
              fill="#1c1611"
            />
          </g>
        </svg>
      </div>

      <style>{`
        .ph-eagle-stage {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: 9998;
          overflow: hidden;
        }

        .ph-eagle-body {
          position: absolute;
          width: 220px;
          height: 140px;
          filter: drop-shadow(0px 14px 18px rgba(0, 0, 0, 0.25));
          will-change: transform, top, left;
          animation: flightPath 18s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .ph-tree-branch {
          position: absolute;
          bottom: 20px;
          left: -10px;
          width: 220px;
          height: 90px;
          will-change: opacity, transform;
          animation: branchSync 18s ease-in-out infinite;
        }

        /* DYNAMIC WING FLAP & REST SYNC */
        .left-wing {
          transform-origin: 270px 140px;
          animation: 
            activeFlapLeft 0.6s ease-in-out infinite alternate,
            wingStateLeft 18s ease-in-out infinite;
        }

        .right-wing {
          transform-origin: 330px 140px;
          animation: 
            activeFlapRight 0.6s ease-in-out infinite alternate,
            wingStateRight 18s ease-in-out infinite;
        }

        .ph-eagle-feet {
          transform-origin: 300px 225px;
          animation: feetSync 18s ease-in-out infinite;
        }

        .ph-eagle-head {
          transform-origin: 300px 100px;
          animation: headSync 18s ease-in-out infinite;
        }

        /* Fast, realistic bird flap */
        @keyframes activeFlapLeft {
          0% { transform: rotate(-22deg) scaleY(1.1); }
          100% { transform: rotate(28deg) scaleY(0.7); }
        }

        @keyframes activeFlapRight {
          0% { transform: rotate(22deg) scaleY(1.1); }
          100% { transform: rotate(-28deg) scaleY(0.7); }
        }

        /* Timeline controls when wings flap vs fold on branch */
        @keyframes wingStateLeft {
          0%, 38%, 78%, 100% { opacity: 1; }
          42%, 75% { 
            transform: rotate(52deg) scaleY(0.4) scaleX(0.7) !important; 
          }
        }

        @keyframes wingStateRight {
          0%, 38%, 78%, 100% { opacity: 1; }
          42%, 75% { 
            transform: rotate(-52deg) scaleY(0.4) scaleX(0.7) !important; 
          }
        }

        /* 18s FLIGHT PATH TIMELINE */
        @keyframes flightPath {
          0% {
            top: 8%;
            left: 105vw;
            transform: scale(0.8) rotate(-6deg);
          }
          22% {
            top: 5%;
            left: 55vw;
            transform: scale(1) rotate(2deg);
          }
          38% {
            top: calc(100vh - 220px);
            left: 120px;
            transform: scale(1.05) rotate(-22deg);
          }
          42%, 75% {
            top: calc(100vh - 165px);
            left: 20px;
            transform: scale(0.85) rotate(-3deg);
          }
          78% {
            top: calc(100vh - 280px);
            left: 8vw;
            transform: scale(0.95) rotate(-28deg);
          }
          100% {
            top: -180px;
            left: -200px;
            transform: scale(1.1) rotate(-38deg);
          }
        }

        @keyframes branchSync {
          0%, 38% { opacity: 0; transform: translateY(30px); }
          42%, 76% { opacity: 1; transform: translateY(0px); }
          80%, 100% { opacity: 0; transform: translateY(30px); }
        }

        @keyframes feetSync {
          0%, 38%, 78%, 100% { transform: translateY(6px) scaleY(0.65); }
          42%, 75% { transform: translateY(0px) scaleY(1); }
        }

        @keyframes headSync {
          0%, 42%, 76%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-8deg); }
          62% { transform: rotate(10deg); }
        }
      `}</style>
    </div>
  );
}