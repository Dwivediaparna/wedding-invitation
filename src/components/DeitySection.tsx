import React, { useState } from 'react';

const DeityImage = ({ src, alt, fallbackText }: { src: string; alt: string; fallbackText: string }) => {
  const [error, setError] = useState(false);
  return (
    <div className="w-full h-full bg-gradient-to-br from-yellow-50 to-yellow-100 flex items-center justify-center overflow-hidden">
      {!error ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" onError={() => setError(true)} />
      ) : (
        <div className="text-center p-2">
          <span className="text-2xl block mb-1">🕉️</span>
          <span className="text-[10px] font-bold text-red-800 leading-tight block">{fallbackText}</span>
        </div>
      )}
    </div>
  );
};

/* Animated Diya */
const Diya = () => (
  <div className="w-6 h-8 md:w-8 md:h-10 flex-shrink-0" style={{ animation: 'float 3s ease-in-out infinite' }}>
    <svg viewBox="0 0 36 48" className="w-full h-full">
      <defs>
        <radialGradient id="fg" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="18" cy="14" r="10" fill="url(#fg)">
        <animate attributeName="r" dur="1.5s" repeatCount="indefinite" values="8;12;8" />
      </circle>
      <path d="M18 4 Q14 12 15 20 Q18 24 21 20 Q22 12 18 4" fill="#FF6B00" opacity="0.9">
        <animate attributeName="d" dur="0.8s" repeatCount="indefinite" values="M18 4 Q14 12 15 20 Q18 24 21 20 Q22 12 18 4;M18 2 Q13 11 14 20 Q18 25 22 20 Q23 11 18 2;M18 4 Q14 12 15 20 Q18 24 21 20 Q22 12 18 4" />
      </path>
      <path d="M18 8 Q16 14 16.5 19 Q18 22 19.5 19 Q20 14 18 8" fill="#FFD700" opacity="0.85" />
      <line x1="18" y1="20" x2="18" y2="28" stroke="#555" strokeWidth="0.8" />
      <ellipse cx="18" cy="30" rx="9" ry="3.5" fill="#b91c1c" />
      <path d="M9 30 L11 40 Q18 43 25 40 L27 30" fill="#991b1b" />
      <ellipse cx="18" cy="40" rx="7" ry="2.5" fill="#7f1d1d" />
    </svg>
  </div>
);

export const DeitySection = () => {
  return (
    <div className="w-full mb-4 relative z-20">
      {/* ── Top banner ── */}
      <div className="flex items-center justify-center gap-3 mb-5">
        <div className="h-[1.5px] w-14 md:w-20 bg-gradient-to-r from-transparent to-red-800/40"></div>
        <span className="text-sm md:text-base text-red-800 font-hindi font-bold tracking-wider opacity-70">॥ श्री ॥</span>
        <div className="h-[1.5px] w-14 md:w-20 bg-gradient-to-l from-transparent to-red-800/40"></div>
      </div>

      {/* ── Horizontal Row: Sitaram (left) — Ganesha (center) — Krishna (right) ── */}
      <div className="flex items-center justify-between w-full px-4 md:px-8">

        {/* LEFT CORNER: Sitaram */}
        <div className="flex flex-col items-center">
          <Diya />
          <div
            className="w-20 h-20 md:w-28 md:h-28 rounded-full shadow-xl overflow-hidden mt-2"
            style={{ padding: '3px', background: 'conic-gradient(from 90deg, #fbbf24, #b91c1c, #fbbf24)' }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-yellow-50">
              <DeityImage src="/sitaram.png" alt="Sitaram" fallbackText="Sita Ram" />
            </div>
          </div>
          <span className="text-red-900 font-bold text-[11px] md:text-sm mt-1.5 font-hindi drop-shadow-sm">सीताराम</span>
        </div>

        {/* CENTER: Ganesha — larger & prominent */}
        <div className="flex flex-col items-center -mt-2">
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute -inset-3 md:-inset-4 rounded-full bg-gradient-to-br from-yellow-400/20 via-red-600/10 to-yellow-400/20 blur-sm animate-pulse-slow"></div>
            <div
              className="w-28 h-28 md:w-40 md:h-40 rounded-full shadow-2xl overflow-hidden relative z-10"
              style={{ padding: '4px', background: 'conic-gradient(from 0deg, #fbbf24, #DC2626, #7f1d1d, #DC2626, #fbbf24)' }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-yellow-50 shadow-inner">
                <DeityImage src="/ganeshji.png" alt="Ganesha" fallbackText="Ganesha" />
              </div>
            </div>
          </div>
          {/* Label badge */}
          <div className="relative mt-2 z-10">
            <div className="absolute inset-0 bg-yellow-400/20 blur-md rounded-full"></div>
            <span
              className="relative font-heading text-red-900 font-bold text-xs md:text-base px-4 md:px-6 py-1 md:py-1.5 rounded-full bg-gradient-to-r from-yellow-200/80 via-yellow-100/90 to-yellow-200/80 shadow-md drop-shadow-sm"
              style={{ border: '1.5px solid rgba(127,29,29,0.2)' }}
            >
              ॥ श्री गणेशाय नमः ॥
            </span>
          </div>
        </div>

        {/* RIGHT CORNER: Radha Krishna */}
        <div className="flex flex-col items-center">
          <Diya />
          <div
            className="w-20 h-20 md:w-28 md:h-28 rounded-full shadow-xl overflow-hidden mt-2"
            style={{ padding: '3px', background: 'conic-gradient(from 270deg, #fbbf24, #b91c1c, #fbbf24)' }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-yellow-50">
              <DeityImage src="/radhakrishna.png" alt="Radha Krishna" fallbackText="Radha Krishna" />
            </div>
          </div>
          <span className="text-red-900 font-bold text-[11px] md:text-sm mt-1.5 font-hindi drop-shadow-sm">राधा कृष्ण</span>
        </div>
      </div>

      {/* ── Bottom wave ── */}
      <div className="flex items-center justify-center mt-5 gap-1">
        <div className="h-[1.5px] w-10 md:w-16 bg-gradient-to-r from-transparent to-red-800/30"></div>
        <svg viewBox="0 0 60 14" className="w-14 h-3.5 md:w-16 md:h-4 text-red-800">
          <path d="M0 7 Q10 0 20 7 Q30 14 40 7 Q50 0 60 7" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
          <circle cx="30" cy="7" r="2.5" fill="#F59E0B" opacity="0.5" />
        </svg>
        <div className="h-[1.5px] w-10 md:w-16 bg-gradient-to-l from-transparent to-red-800/30"></div>
      </div>
    </div>
  );
};
