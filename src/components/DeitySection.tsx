import React, { useState } from 'react';

const DeityImage = ({ src, alt, fallbackText }: { src: string; alt: string; fallbackText: string }) => {
  const [error, setError] = useState(false);
  return (
    <div className="w-full h-full bg-gradient-to-br from-yellow-50 to-yellow-100 flex items-center justify-center overflow-hidden">
      {!error ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          onError={() => setError(true)}
        />
      ) : (
        <div className="text-center p-2">
          <span className="text-2xl block mb-1">🕉️</span>
          <span className="text-[10px] font-bold text-red-800 leading-tight block">{fallbackText}</span>
        </div>
      )}
    </div>
  );
};

// SVG Royal Arch that sits behind each deity
const RoyalArch = ({ size = 'small' }: { size?: 'large' | 'small' }) => {
  const isLarge = size === 'large';
  return (
    <div className={`absolute ${isLarge ? '-inset-6 md:-inset-10' : '-inset-4 md:-inset-6'} pointer-events-none`}>
      <svg viewBox="0 0 200 220" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id={`archGrad-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7f1d1d" />
            <stop offset="50%" stopColor="#991b1b" />
            <stop offset="100%" stopColor="#7f1d1d" />
          </linearGradient>
          <linearGradient id={`archGold-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>
        {/* Outer arch */}
        <path d="M20 220 L20 80 Q20 10 100 10 Q180 10 180 80 L180 220" fill="none" stroke={`url(#archGrad-${size})`} strokeWidth={isLarge ? '6' : '4'} />
        {/* Inner arch */}
        <path d="M35 220 L35 85 Q35 25 100 25 Q165 25 165 85 L165 220" fill="none" stroke={`url(#archGold-${size})`} strokeWidth={isLarge ? '3' : '2'} />
        {/* Crown / Kalash at top */}
        <path d="M85 12 Q100 -5 115 12" fill="none" stroke="#fbbf24" strokeWidth="2" />
        <circle cx="100" cy="2" r="4" fill="#DC2626" stroke="#fbbf24" strokeWidth="1.5" />
        {/* Decorative dots along arch */}
        <circle cx="55" cy="45" r="2" fill="#fbbf24" opacity="0.5" />
        <circle cx="145" cy="45" r="2" fill="#fbbf24" opacity="0.5" />
        <circle cx="40" cy="70" r="1.5" fill="#fbbf24" opacity="0.4" />
        <circle cx="160" cy="70" r="1.5" fill="#fbbf24" opacity="0.4" />
        {/* Side pillars base */}
        <rect x="15" y="200" width="12" height="20" rx="2" fill={`url(#archGrad-${size})`} opacity="0.6" />
        <rect x="173" y="200" width="12" height="20" rx="2" fill={`url(#archGrad-${size})`} opacity="0.6" />
        {/* Pillar capitals */}
        <rect x="12" y="195" width="18" height="6" rx="2" fill="#fbbf24" opacity="0.4" />
        <rect x="170" y="195" width="18" height="6" rx="2" fill="#fbbf24" opacity="0.4" />
        {/* Hanging bell ornaments */}
        <line x1="60" y1="38" x2="60" y2="52" stroke="#fbbf24" strokeWidth="0.8" opacity="0.5" />
        <circle cx="60" cy="54" r="2.5" fill="#fbbf24" opacity="0.3" />
        <line x1="140" y1="38" x2="140" y2="52" stroke="#fbbf24" strokeWidth="0.8" opacity="0.5" />
        <circle cx="140" cy="54" r="2.5" fill="#fbbf24" opacity="0.3" />
      </svg>
    </div>
  );
};

// Diya / Lamp SVG
const Diya = ({ className = '' }: { className?: string }) => (
  <div className={`w-8 h-10 md:w-10 md:h-12 ${className}`} style={{ animation: 'float 3s ease-in-out infinite' }}>
    <svg viewBox="0 0 40 50" className="w-full h-full">
      {/* Flame */}
      <path d="M20 5 Q15 15 17 22 Q20 28 23 22 Q25 15 20 5" fill="#FF6B00" opacity="0.9">
        <animate attributeName="d" dur="1.5s" repeatCount="indefinite" values="
          M20 5 Q15 15 17 22 Q20 28 23 22 Q25 15 20 5;
          M20 3 Q14 14 16 22 Q20 29 24 22 Q26 14 20 3;
          M20 5 Q15 15 17 22 Q20 28 23 22 Q25 15 20 5" />
      </path>
      <path d="M20 8 Q17 16 18 21 Q20 25 22 21 Q23 16 20 8" fill="#FFD700" opacity="0.8">
        <animate attributeName="d" dur="1.2s" repeatCount="indefinite" values="
          M20 8 Q17 16 18 21 Q20 25 22 21 Q23 16 20 8;
          M20 6 Q16 15 17 21 Q20 26 23 21 Q24 15 20 6;
          M20 8 Q17 16 18 21 Q20 25 22 21 Q23 16 20 8" />
      </path>
      {/* Glow */}
      <circle cx="20" cy="15" r="8" fill="#FFD700" opacity="0.15">
        <animate attributeName="r" dur="2s" repeatCount="indefinite" values="6;10;6" />
        <animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="0.1;0.2;0.1" />
      </circle>
      {/* Lamp base */}
      <ellipse cx="20" cy="30" rx="10" ry="4" fill="#b91c1c" />
      <path d="M10 30 L12 40 Q20 44 28 40 L30 30" fill="#991b1b" />
      <ellipse cx="20" cy="40" rx="8" ry="3" fill="#7f1d1d" />
      {/* Wick */}
      <line x1="20" y1="22" x2="20" y2="30" stroke="#333" strokeWidth="1" />
    </svg>
  </div>
);

export const DeitySection = () => {
  return (
    <div className="w-full mb-6 relative z-20">
      {/* Royal Header Banner */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-red-800/40"></div>
        <span className="text-xs text-red-800/60 font-hindi">॥ श्री ॥</span>
        <div className="h-px flex-1 max-w-16 bg-gradient-to-l from-transparent to-red-800/40"></div>
      </div>

      {/* Deity Shrine Layout */}
      <div className="flex justify-center items-end gap-3 md:gap-8 relative px-4">
        {/* Left Diya */}
        <Diya className="self-center mb-8 md:mb-10" />

        {/* Sitaram — Left */}
        <div className="flex flex-col items-center group relative">
          <RoyalArch size="small" />
          <div
            className="w-20 h-20 md:w-28 md:h-28 rounded-full shadow-xl overflow-hidden relative z-10 animate-glow-pulse"
            style={{ padding: '3px', background: 'linear-gradient(135deg, #fbbf24, #b91c1c, #fbbf24)' }}
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <DeityImage src="/sitaram.png" alt="Sitaram" fallbackText="Sita Ram" />
            </div>
          </div>
          <span className="text-red-900 font-bold text-xs md:text-sm mt-2 font-hindi drop-shadow-sm z-10">सीताराम</span>
        </div>

        {/* Ganesha — Center & Elevated */}
        <div className="flex flex-col items-center relative -mt-6 md:-mt-8">
          <RoyalArch size="large" />
          <div
            className="w-28 h-28 md:w-40 md:h-40 rounded-full shadow-2xl overflow-hidden relative z-10 group animate-glow-pulse"
            style={{
              padding: '4px',
              background: 'linear-gradient(135deg, #fbbf24, #DC2626, #7f1d1d, #fbbf24)',
              animationDelay: '0.5s',
            }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-yellow-50">
              <DeityImage src="/ganeshji.png" alt="Ganesha" fallbackText="Ganesha" />
            </div>
          </div>
          {/* Ganesha Label — premium badge */}
          <div className="relative z-10 mt-2">
            <div className="absolute inset-0 bg-yellow-300/30 blur-md rounded-full"></div>
            <span className="relative text-red-900 font-bold text-sm md:text-base font-heading drop-shadow-md bg-gradient-to-r from-yellow-200/90 via-yellow-100/95 to-yellow-200/90 px-5 py-1.5 rounded-full border border-red-800/20 shadow-md">
              ॥ श्री गणेशाय नमः ॥
            </span>
          </div>
        </div>

        {/* Radha Krishna — Right */}
        <div className="flex flex-col items-center group relative">
          <RoyalArch size="small" />
          <div
            className="w-20 h-20 md:w-28 md:h-28 rounded-full shadow-xl overflow-hidden relative z-10 animate-glow-pulse"
            style={{ padding: '3px', background: 'linear-gradient(135deg, #fbbf24, #b91c1c, #fbbf24)', animationDelay: '1s' }}
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <DeityImage src="/radhakrishna.png" alt="Radha Krishna" fallbackText="Radha Krishna" />
            </div>
          </div>
          <span className="text-red-900 font-bold text-xs md:text-sm mt-2 font-hindi drop-shadow-sm z-10">राधा कृष्ण</span>
        </div>

        {/* Right Diya */}
        <Diya className="self-center mb-8 md:mb-10" />
      </div>

      {/* Decorative base line under deities */}
      <div className="flex items-center justify-center mt-4 gap-2">
        <div className="h-[2px] w-12 md:w-20 bg-gradient-to-r from-transparent to-red-800/30"></div>
        <svg viewBox="0 0 40 12" className="w-10 h-3 text-red-800">
          <path d="M0 6 Q10 0 20 6 Q30 12 40 6" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
          <circle cx="20" cy="6" r="2" fill="#F59E0B" opacity="0.6" />
        </svg>
        <div className="h-[2px] w-12 md:w-20 bg-gradient-to-l from-transparent to-red-800/30"></div>
      </div>
    </div>
  );
};
