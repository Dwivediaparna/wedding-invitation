import React from 'react';

export const OmIcon = () => (
  <div className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32 mx-auto relative z-20">
    {/* Expanding radiant rings */}
    <div className="absolute inset-0 rounded-full border-2 border-red-500/20 animate-glow-pulse" style={{ animationDuration: '3s' }}></div>
    <div className="absolute inset-[-10px] rounded-full border border-red-500/10 animate-glow-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
    <div className="absolute inset-[-20px] rounded-full border border-yellow-500/5 animate-glow-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>

    {/* Inner glowing core */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 opacity-90 blur-md animate-pulse-slow"></div>
    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-[#FFF9E6] to-[#FFE699] shadow-[0_0_40px_rgba(255,215,0,0.6)]" style={{ border: '4px solid #991b1b' }}></div>

    {/* The Om symbol */}
    <span className="relative z-10 text-5xl md:text-6xl text-red-900 font-heading drop-shadow-md pb-2" style={{ lineHeight: 1 }}>ॐ</span>
  </div>
);

// Floating Marigold Petals Animation
export const FloatingPetals = () => {
  const petals = Array.from({ length: 15 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 10}s`,
    animationDuration: `${12 + Math.random() * 10}s`,
    opacity: 0.3 + Math.random() * 0.5,
    scale: 0.5 + Math.random() * 0.8,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {petals.map((petal, i) => (
        <div
          key={i}
          className="absolute text-yellow-500 drop-shadow-sm filter blur-[0.5px]"
          style={{
            left: petal.left,
            top: '-20px',
            opacity: petal.opacity,
            transform: `scale(${petal.scale})`,
            animation: `float-petal ${petal.animationDuration} linear infinite`,
            animationDelay: petal.animationDelay,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" opacity="0.3" />
            <path d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z" fill="url(#petalGrad)" />
            <defs>
              <linearGradient id="petalGrad" x1="0" y1="4" x2="24" y2="20" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F59E0B" />
                <stop offset="1" stopColor="#DC2626" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
};

// Ornamental SVG divider
export const OrnamentalDivider = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-center justify-center w-full my-6 ${className}`}>
    <svg viewBox="0 0 400 30" className="w-64 md:w-80 h-8 text-red-800" fill="currentColor">
      {/* Left flowing line */}
      <path d="M0 15 Q50 15 80 8 Q95 5 110 15" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M0 15 Q50 15 80 22 Q95 25 110 15" stroke="currentColor" strokeWidth="1" fill="none" />
      {/* Left lotus bud */}
      <ellipse cx="120" cy="15" rx="5" ry="8" fill="currentColor" opacity="0.3" />
      <path d="M115 15 Q120 5 125 15" fill="currentColor" opacity="0.5" />
      {/* Left paisley */}
      <path d="M135 15 Q150 2 165 15 Q150 10 135 15" fill="currentColor" opacity="0.2" />
      {/* Center jewel */}
      <circle cx="200" cy="15" r="6" fill="#DC2626" stroke="#F59E0B" strokeWidth="2" />
      <circle cx="200" cy="15" r="3" fill="#F59E0B" />
      {/* Surrounding dots */}
      <circle cx="185" cy="15" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="215" cy="15" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="190" cy="8" r="1.5" fill="#F59E0B" opacity="0.6" />
      <circle cx="210" cy="8" r="1.5" fill="#F59E0B" opacity="0.6" />
      <circle cx="190" cy="22" r="1.5" fill="#F59E0B" opacity="0.6" />
      <circle cx="210" cy="22" r="1.5" fill="#F59E0B" opacity="0.6" />
      {/* Right paisley */}
      <path d="M265 15 Q250 2 235 15 Q250 10 265 15" fill="currentColor" opacity="0.2" />
      {/* Right lotus bud */}
      <ellipse cx="280" cy="15" rx="5" ry="8" fill="currentColor" opacity="0.3" />
      <path d="M275 15 Q280 5 285 15" fill="currentColor" opacity="0.5" />
      {/* Right flowing line */}
      <path d="M290 15 Q305 5 320 8 Q350 15 400 15" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M290 15 Q305 25 320 22 Q350 15 400 15" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  </div>
);

// Decorative corner lotus SVG
export const CornerLotus = ({ position = 'top-left' }: { position?: string }) => {
  const posClass = {
    'top-left': 'top-3 left-3',
    'top-right': 'top-3 right-3 scale-x-[-1]',
    'bottom-left': 'bottom-3 left-3 scale-y-[-1]',
    'bottom-right': 'bottom-3 right-3 scale-x-[-1] scale-y-[-1]',
  }[position] || 'top-3 left-3';

  return (
    <div className={`absolute ${posClass} w-16 h-16 md:w-20 md:h-20 pointer-events-none z-30 opacity-60`}>
      <svg viewBox="0 0 80 80" className="w-full h-full">
        {/* Lotus petals */}
        <path d="M5 75 Q15 55 10 40 Q8 30 15 20 Q20 12 30 10" stroke="#7f1d1d" strokeWidth="1.5" fill="none" />
        <path d="M5 75 Q25 65 35 50 Q40 42 38 30" stroke="#7f1d1d" strokeWidth="1" fill="none" />
        {/* Leaf shapes */}
        <path d="M10 55 Q20 45 15 35 Q10 45 10 55" fill="#7f1d1d" opacity="0.15" />
        <path d="M20 65 Q30 50 25 40 Q18 52 20 65" fill="#7f1d1d" opacity="0.12" />
        {/* Dots */}
        <circle cx="12" cy="40" r="2" fill="#F59E0B" opacity="0.5" />
        <circle cx="25" cy="30" r="1.5" fill="#DC2626" opacity="0.4" />
        <circle cx="8" cy="55" r="1.5" fill="#F59E0B" opacity="0.4" />
      </svg>
    </div>
  );
};

export const DecorativeBorder = () => (
  <div className="absolute inset-0 pointer-events-none p-2 md:p-3 z-10">
    {/* Main Outer Frame — deep crimson with gold inner */}
    <div className="w-full h-full rounded-2xl relative overflow-hidden" style={{ border: '8px solid #7f1d1d', boxShadow: 'inset 0 0 0 4px #d97706, inset 0 0 0 6px #7f1d1d20' }}>

      {/* Shimmer gold overlay on border */}
      <div className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          border: '4px solid transparent',
          background: 'linear-gradient(90deg, transparent 30%, rgba(255,215,0,0.25) 50%, transparent 70%) border-box',
          backgroundSize: '300% 100%',
          animation: 'shimmer 4s ease-in-out infinite',
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      ></div>

      {/* Corner Peacock Ornaments — Top Left */}
      <div className="absolute top-0 left-0 w-40 h-40 md:w-56 md:h-56 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="corner-fill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7f1d1d" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
          </defs>
          <path d="M0 0 L48 0 Q28 22 0 48 Z" fill="url(#corner-fill)" />
          {/* Peacock feather curves */}
          <path d="M6 6 Q28 6 45 28 T58 68" stroke="#0d9488" strokeWidth="2.5" fill="none" opacity="0.7" />
          <path d="M4 4 Q22 4 36 22 T48 58" stroke="#fbbf24" strokeWidth="1.2" fill="none" opacity="0.5" />
          <path d="M8 8 Q32 8 50 32 T62 72" stroke="#0d9488" strokeWidth="1" fill="none" opacity="0.3" />
          {/* Peacock eye */}
          <circle cx="44" cy="28" r="5" fill="#1e3a8a" opacity="0.8" />
          <circle cx="44" cy="28" r="3" fill="#3b82f6" opacity="0.7" />
          <circle cx="44" cy="28" r="1.2" fill="white" opacity="0.8" />
          {/* Gold accent dots */}
          <circle cx="14" cy="14" r="2" fill="#fbbf24" opacity="0.7" />
          <circle cx="24" cy="10" r="1.2" fill="#fbbf24" opacity="0.5" />
          <circle cx="10" cy="24" r="1.2" fill="#fbbf24" opacity="0.5" />
          <circle cx="30" cy="18" r="1" fill="#fbbf24" opacity="0.4" />
        </svg>
      </div>
      {/* Top Right (mirrored) */}
      <div className="absolute top-0 right-0 w-40 h-40 md:w-56 md:h-56 pointer-events-none transform scale-x-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M0 0 L48 0 Q28 22 0 48 Z" fill="#7f1d1d" />
          <path d="M6 6 Q28 6 45 28 T58 68" stroke="#0d9488" strokeWidth="2.5" fill="none" opacity="0.7" />
          <path d="M4 4 Q22 4 36 22 T48 58" stroke="#fbbf24" strokeWidth="1.2" fill="none" opacity="0.5" />
          <circle cx="44" cy="28" r="5" fill="#1e3a8a" opacity="0.8" />
          <circle cx="44" cy="28" r="3" fill="#3b82f6" opacity="0.7" />
          <circle cx="44" cy="28" r="1.2" fill="white" opacity="0.8" />
          <circle cx="14" cy="14" r="2" fill="#fbbf24" opacity="0.7" />
        </svg>
      </div>

      {/* Bottom Elephants */}
      <div className="absolute bottom-0 left-0 w-28 h-28 md:w-40 md:h-40 pointer-events-none opacity-60">
        <svg viewBox="0 0 100 100" className="w-full h-full text-red-900">
          <path d="M15 95 L30 95 L30 72 Q32 55 48 52 L65 52 Q78 52 78 72 L78 95" stroke="currentColor" strokeWidth="2" fill="none" />
          {/* Howdah decoration */}
          <rect x="35" y="42" width="25" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <circle cx="47" cy="48" r="3" fill="#fbbf24" opacity="0.3" />
          {/* Trunk */}
          <path d="M28 72 Q20 78 22 88" stroke="currentColor" strokeWidth="2" fill="none" />
          {/* Tusk */}
          <path d="M32 82 Q30 90 34 92" stroke="#fbbf24" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-28 h-28 md:w-40 md:h-40 pointer-events-none transform scale-x-[-1] opacity-60">
        <svg viewBox="0 0 100 100" className="w-full h-full text-red-900">
          <path d="M15 95 L30 95 L30 72 Q32 55 48 52 L65 52 Q78 52 78 72 L78 95" stroke="currentColor" strokeWidth="2" fill="none" />
          <rect x="35" y="42" width="25" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <circle cx="47" cy="48" r="3" fill="#fbbf24" opacity="0.3" />
          <path d="M28 72 Q20 78 22 88" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M32 82 Q30 90 34 92" stroke="#fbbf24" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      {/* Side Decorative Strips */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-5 h-3/4 opacity-10 overflow-hidden">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-5 h-3/4 opacity-10 overflow-hidden">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
      </div>

      {/* Top center hanging ornament */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-30">
        <svg viewBox="0 0 60 35" className="w-16 h-10 md:w-20 md:h-12">
          <path d="M0 0 L60 0 L50 8 Q30 18 10 8 Z" fill="#7f1d1d" />
          <circle cx="30" cy="15" r="4" fill="#F59E0B" />
          <circle cx="30" cy="15" r="2" fill="#DC2626" />
          <line x1="30" y1="19" x2="30" y2="28" stroke="#F59E0B" strokeWidth="1" />
          <circle cx="30" cy="30" r="2.5" fill="#F59E0B" opacity="0.7" />
        </svg>
      </div>
    </div>
  </div>
);

export const Garland = () => (
  <div className="absolute top-0 left-0 w-full z-20 pointer-events-none">
    {/* Main hanging garland — with catenary curve */}
    <div className="flex justify-between items-start px-4 md:px-6 -mt-1 md:-mt-3">
      {[...Array(9)].map((_, i) => {
        const isEdge = i === 0 || i === 8;
        const isMid = i === 4;
        const stemH = isEdge ? 3 : isMid ? 12 : 6 + Math.abs(4 - i) * 1.5;
        return (
          <div
            key={i}
            className="flex flex-col items-center origin-top"
            style={{
              animation: `swing 3.5s ease-in-out infinite`,
              animationDelay: `${i * 0.18}s`,
            }}
          >
            <div className="w-0.5 bg-gradient-to-b from-yellow-600 to-yellow-700" style={{ height: `${stemH * 2.5}px` }}></div>
            <div className="text-lg md:text-2xl filter drop-shadow-lg">
              {i % 3 === 0 ? '🏵️' : i % 3 === 1 ? '🌺' : '🌸'}
            </div>
            <div className="w-0.5 h-1 bg-yellow-700"></div>
            <div className="text-xs md:text-lg text-yellow-600 drop-shadow-sm">🔔</div>
          </div>
        );
      })}
    </div>

    {/* Mango leaf sprays */}
    <div className="absolute top-0 left-0 w-16 h-32 bg-gradient-to-b from-green-800/12 to-transparent rounded-br-full blur-lg"></div>
    <div className="absolute top-0 right-0 w-16 h-32 bg-gradient-to-b from-green-800/12 to-transparent rounded-bl-full blur-lg"></div>
  </div>
);

export const MandalaBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {/* Rich Golden Gradient Background with slower shift */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#FDB931] via-[#FFD700] to-[#FDB931] opacity-90"></div>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-50/50 via-transparent to-transparent"></div>

    {/* Paper texture */}
    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/gold-scale.png')] mix-blend-multiply"></div>

    <FloatingPetals />

    {/* Elegant Glowing Sunburst Center */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(255,255,255,0.4)_0%,_rgba(255,215,0,0.1)_40%,_transparent_70%)] opacity-60 mix-blend-overlay animate-pulse-slow"></div>

    {/* Central Majestic Mandala */}
    <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
      <svg viewBox="0 0 500 500" className="w-[160%] h-[160%] md:w-[100%] md:h-[100%] text-red-950 fill-current" style={{ animation: 'spin 300s linear infinite' }}>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#glow)">
          {/* Core star */}
          <path d="M250 25 L275 185 L435 250 L275 315 L250 475 L225 315 L65 250 L225 185 Z" />
          {/* Inner star rotated */}
          <path d="M250 75 L265 200 L390 250 L265 300 L250 425 L235 300 L110 250 L235 200 Z" opacity="0.4" transform="rotate(22.5 250 250)" />
          {/* Beautiful rings */}
          <circle cx="250" cy="250" r="150" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="250" cy="250" r="140" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.7" />
          <circle cx="250" cy="250" r="190" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="250" cy="250" r="215" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.5" />
          {/* Radial sun rays */}
          {[...Array(72)].map((_, i) => (
            <line key={`ray${i}`} x1="250" y1="250" x2="250" y2={i % 2 === 0 ? "40" : "80"} transform={`rotate(${i * 5} 250 250)`} stroke="currentColor" strokeWidth={i % 2 === 0 ? "0.4" : "0.2"} opacity={i % 2 === 0 ? "0.8" : "0.4"} />
          ))}
          {/* Exquisite lotus petals */}
          {[...Array(24)].map((_, i) => (
            <path key={`plt${i}`} d="M250 100 Q265 70 250 40 Q235 70 250 100 Z" transform={`rotate(${i * 15} 250 250)`} fill="none" stroke="currentColor" strokeWidth="0.6" />
          ))}
          {/* Inner petal ring */}
          {[...Array(16)].map((_, i) => (
            <ellipse key={`ipe${i}`} cx="250" cy="115" rx="10" ry="22" transform={`rotate(${i * 22.5} 250 250)`} fill="currentColor" opacity="0.25" />
          ))}
          {/* Double dot rings */}
          {[...Array(36)].map((_, i) => {
            const angle = (i * 10 * Math.PI) / 180;
            const x1 = 250 + 175 * Math.cos(angle);
            const y1 = 250 + 175 * Math.sin(angle);
            const x2 = 250 + 205 * Math.cos(angle);
            const y2 = 250 + 205 * Math.sin(angle);
            return (
              <React.Fragment key={`dot${i}`}>
                <circle cx={x1} cy={y1} r="2.5" fill="currentColor" opacity="0.4" />
                <circle cx={x2} cy={y2} r="1.5" fill="currentColor" opacity="0.3" />
              </React.Fragment>
            );
          })}
        </g>
      </svg>
    </div>

    {/* Corner ornate mandalas */}
    <div className="absolute top-0 left-0 w-96 h-96 -translate-x-1/3 -translate-y-1/3 opacity-[0.05] text-red-900 pointer-events-none">
      <svg viewBox="0 0 100 100" className="w-full h-full fill-current" style={{ animation: 'spin-reverse 240s linear infinite' }}>
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path d="M50 0 L65 35 L100 50 L65 65 L50 100 L35 65 L0 50 L35 35 Z" opacity="0.7" />
        <path d="M50 15 L60 40 L85 50 L60 60 L50 85 L40 60 L15 50 L40 40 Z" opacity="0.5" transform="rotate(45 50 50)" />
      </svg>
    </div>
    <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/3 translate-y-1/3 opacity-[0.05] text-red-900 pointer-events-none">
      <svg viewBox="0 0 100 100" className="w-full h-full fill-current" style={{ animation: 'spin 240s linear infinite' }}>
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path d="M50 0 L65 35 L100 50 L65 65 L50 100 L35 65 L0 50 L35 35 Z" opacity="0.7" />
        <path d="M50 15 L60 40 L85 50 L60 60 L50 85 L40 60 L15 50 L40 40 Z" opacity="0.5" transform="rotate(45 50 50)" />
      </svg>
    </div>
  </div>
);
