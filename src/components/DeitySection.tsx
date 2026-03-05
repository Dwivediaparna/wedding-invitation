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

/* ─── Animated Diya with warm glow ─── */
const Diya = ({ side = 'left' }: { side?: string }) => (
  <div className="w-7 h-9 md:w-9 md:h-11 flex-shrink-0 relative">
    {/* Warm glow behind diya */}
    <div
      className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(255,180,50,0.35) 0%, transparent 70%)',
        animation: 'diya-flicker 2s ease-in-out infinite',
        animationDelay: side === 'left' ? '0s' : '0.7s',
      }}
    />
    <svg viewBox="0 0 36 48" className="w-full h-full relative z-10">
      <defs>
        <radialGradient id={`fg-${side}`} cx="50%" cy="35%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Flame glow */}
      <circle cx="18" cy="12" r="9" fill={`url(#fg-${side})`}>
        <animate attributeName="r" dur="1.8s" repeatCount="indefinite" values="7;11;7" />
        <animate attributeName="opacity" dur="1.8s" repeatCount="indefinite" values="0.7;1;0.7" />
      </circle>
      {/* Outer flame */}
      <path d="M18 3 Q13 11 14 19 Q18 24 22 19 Q23 11 18 3" fill="#FF6B00" opacity="0.85">
        <animate attributeName="d" dur="0.9s" repeatCount="indefinite" values="M18 3 Q13 11 14 19 Q18 24 22 19 Q23 11 18 3;M18 1 Q12 10 13 19 Q18 25 23 19 Q24 10 18 1;M18 3 Q13 11 14 19 Q18 24 22 19 Q23 11 18 3" />
      </path>
      {/* Inner flame */}
      <path d="M18 7 Q15.5 13 16 18 Q18 21 20 18 Q20.5 13 18 7" fill="#FFD700" opacity="0.9" />
      {/* Wick */}
      <line x1="18" y1="19" x2="18" y2="27" stroke="#555" strokeWidth="0.7" />
      {/* Lamp body */}
      <ellipse cx="18" cy="29" rx="8.5" ry="3.2" fill="#991B1B" />
      <path d="M9.5 29 L11.5 39 Q18 42.5 24.5 39 L26.5 29" fill="#7F1D1D" />
      <ellipse cx="18" cy="39" rx="6.5" ry="2.2" fill="#6B1010" />
      {/* Gold rim on lamp */}
      <ellipse cx="18" cy="29" rx="8.5" ry="3.2" fill="none" stroke="#D4A017" strokeWidth="0.6" opacity="0.5" />
    </svg>
  </div>
);

/* ─── Ornate Frame for deity images ─── */
const DeityFrame = ({
  src, alt, fallbackText, size = 'normal', label,
}: {
  src: string; alt: string; fallbackText: string;
  size?: 'normal' | 'large';
  label?: string;
}) => {
  const isLarge = size === 'large';
  const outerSize = isLarge ? 'w-28 h-28 md:w-40 md:h-40' : 'w-18 h-18 md:w-26 md:h-26';

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* Golden glow behind frame */}
        {isLarge && (
          <div className="absolute -inset-3 md:-inset-4 rounded-full bg-gradient-to-br from-yellow-400/20 via-amber-500/10 to-yellow-400/20 blur-sm animate-pulse-slow" />
        )}
        <div
          className={`${outerSize} rounded-full shadow-xl overflow-hidden relative z-10`}
          style={{
            padding: isLarge ? '4px' : '3px',
            background: isLarge
              ? 'conic-gradient(from 0deg, #D4A017, #991B1B, #6B1010, #991B1B, #D4A017)'
              : 'conic-gradient(from 90deg, #D4A017, #991B1B, #D4A017)',
            boxShadow: isLarge
              ? '0 0 20px rgba(212,160,23,0.3), 0 4px 15px rgba(0,0,0,0.2)'
              : '0 0 10px rgba(212,160,23,0.2), 0 2px 8px rgba(0,0,0,0.15)',
          }}
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-yellow-50 shadow-inner">
            <DeityImage src={src} alt={alt} fallbackText={fallbackText} />
          </div>
        </div>
      </div>
      {/* Label */}
      {label && (
        <div className="relative mt-2 z-10">
          {isLarge && <div className="absolute inset-0 bg-yellow-400/15 blur-md rounded-full" />}
          <span
            className={`relative font-hindi text-red-900 font-bold drop-shadow-sm ${isLarge
              ? 'text-xs md:text-sm px-4 md:px-5 py-1 md:py-1.5 rounded-full bg-gradient-to-r from-yellow-200/70 via-yellow-100/80 to-yellow-200/70 shadow-md font-heading'
              : 'text-[10px] md:text-xs mt-0.5'
              }`}
            style={isLarge ? { border: '1px solid rgba(107,16,16,0.15)' } : {}}
          >
            {label}
          </span>
        </div>
      )}
    </div>
  );
};

export const DeitySection = () => {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="w-full mb-3 relative z-20">
      {/* ── Top banner ── */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-[1.5px] w-12 md:w-18 bg-gradient-to-r from-transparent to-red-800/40" />
        <span className="text-sm md:text-base text-red-900 font-hindi font-bold tracking-wider opacity-65">॥ श्री ॥</span>
        <div className="h-[1.5px] w-12 md:w-18 bg-gradient-to-l from-transparent to-red-800/40" />
      </div>

      {/* ── Deity Row: Sitaram — Ganesha — Radha Krishna ── */}
      <div className="flex items-center justify-between w-full px-3 md:px-6">
        {/* LEFT: Sitaram + Diya */}
        <div className="flex flex-col items-center gap-1.5">
          <Diya side="left" />
          <DeityFrame src={`${base}sitaram.png`} alt="Sitaram" fallbackText="Sita Ram" label="सीताराम" />
        </div>

        {/* CENTER: Ganesha — prominent */}
        <div className="flex flex-col items-center -mt-1">
          <DeityFrame
            src={`${base}ganeshji.png`}
            alt="Ganesha"
            fallbackText="Ganesha"
            size="large"
            label="॥ श्री गणेशाय नमः ॥"
          />
        </div>

        {/* RIGHT: Radha Krishna + Diya */}
        <div className="flex flex-col items-center gap-1.5">
          <Diya side="right" />
          <DeityFrame src={`${base}radhakrishna.png`} alt="Radha Krishna" fallbackText="Radha Krishna" label="राधा कृष्ण" />
        </div>
      </div>

      {/* ── Bottom wave ── */}
      <div className="flex items-center justify-center mt-4 gap-1">
        <div className="h-[1px] w-10 md:w-14 bg-gradient-to-r from-transparent to-red-800/25" />
        <svg viewBox="0 0 60 14" className="w-12 h-3 md:w-16 md:h-4 text-red-800">
          <path d="M0 7 Q10 0 20 7 Q30 14 40 7 Q50 0 60 7" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <circle cx="30" cy="7" r="2" fill="#D4A017" opacity="0.45" />
        </svg>
        <div className="h-[1px] w-10 md:w-14 bg-gradient-to-l from-transparent to-red-800/25" />
      </div>
    </div>
  );
};
