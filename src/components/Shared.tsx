import React from 'react';

export const OmIcon = () => (
  <div className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32 mx-auto relative z-20">
    <div className="absolute inset-0 rounded-full border-2 border-red-500/20 animate-glow-pulse" style={{ animationDuration: '3s' }}></div>
    <div className="absolute inset-[-10px] rounded-full border border-red-500/10 animate-glow-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
    <div className="absolute inset-[-20px] rounded-full border border-yellow-500/5 animate-glow-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 opacity-90 blur-md animate-pulse-slow"></div>
    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-[#FFF9E6] to-[#FFE699] shadow-[0_0_40px_rgba(255,215,0,0.6)]" style={{ border: '4px solid #991b1b' }}></div>
    <span className="relative z-10 text-5xl md:text-6xl text-red-900 font-heading drop-shadow-md pb-2" style={{ lineHeight: 1 }}>ॐ</span>
  </div>
);

/* ─── Floating Marigold Petals ─── */
export const FloatingPetals = () => {
  const petals = Array.from({ length: 12 }, (_, i) => ({
    left: `${5 + Math.random() * 90}%`,
    animationDelay: `${Math.random() * 12}s`,
    animationDuration: `${14 + Math.random() * 10}s`,
    opacity: 0.2 + Math.random() * 0.35,
    scale: 0.4 + Math.random() * 0.6,
    type: i % 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {petals.map((petal, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: petal.left,
            top: '-24px',
            opacity: petal.opacity,
            transform: `scale(${petal.scale})`,
            animation: `float-petal ${petal.animationDuration} linear infinite`,
            animationDelay: petal.animationDelay,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24">
            {petal.type === 0 ? (
              /* Marigold petal */
              <ellipse cx="12" cy="12" rx="6" ry="10" fill="#E8A020" opacity="0.85" transform="rotate(15 12 12)" />
            ) : petal.type === 1 ? (
              /* Rose petal */
              <path d="M12 2 Q6 8 6 14 Q6 20 12 22 Q18 20 18 14 Q18 8 12 2Z" fill="#D4443B" opacity="0.7" />
            ) : (
              /* Small flower */
              <circle cx="12" cy="12" r="5" fill="#F0A030" opacity="0.75" />
            )}
          </svg>
        </div>
      ))}
    </div>
  );
};

/* ─── Ornamental SVG Divider ─── */
export const OrnamentalDivider = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-center justify-center w-full my-5 ${className}`}>
    <svg viewBox="0 0 400 36" className="w-72 md:w-96 h-9 text-red-900" fill="currentColor">
      <defs>
        <linearGradient id="divLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="30%" stopColor="currentColor" stopOpacity="0.5" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.7" />
          <stop offset="70%" stopColor="currentColor" stopOpacity="0.5" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Left flowing line */}
      <line x1="20" y1="18" x2="150" y2="18" stroke="url(#divLine)" strokeWidth="1" />
      {/* Left paisley */}
      <path d="M150 18 Q160 6 175 12 Q170 18 160 20 Q155 18 150 18Z" fill="currentColor" opacity="0.25" />
      <path d="M155 18 Q162 10 170 14" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.4" />
      {/* Center ornament — lotus with gem */}
      <g transform="translate(200,18)">
        {/* Outer petals */}
        <ellipse cx="-14" cy="0" rx="8" ry="4" fill="currentColor" opacity="0.15" transform="rotate(-30)" />
        <ellipse cx="14" cy="0" rx="8" ry="4" fill="currentColor" opacity="0.15" transform="rotate(30)" />
        <ellipse cx="-10" cy="-3" rx="7" ry="3.5" fill="currentColor" opacity="0.12" transform="rotate(-50)" />
        <ellipse cx="10" cy="-3" rx="7" ry="3.5" fill="currentColor" opacity="0.12" transform="rotate(50)" />
        {/* Center gem */}
        <circle cx="0" cy="0" r="6" fill="#991B1B" stroke="#D4A017" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="3.5" fill="#D4A017" />
        <circle cx="-1" cy="-1" r="1.2" fill="#FFF9E6" opacity="0.7" />
      </g>
      {/* Right paisley (mirrored) */}
      <path d="M250 18 Q240 6 225 12 Q230 18 240 20 Q245 18 250 18Z" fill="currentColor" opacity="0.25" />
      <path d="M245 18 Q238 10 230 14" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.4" />
      {/* Right flowing line */}
      <line x1="250" y1="18" x2="380" y2="18" stroke="url(#divLine)" strokeWidth="1" />
      {/* Accent dots */}
      <circle cx="170" cy="18" r="1.5" fill="#D4A017" opacity="0.5" />
      <circle cx="230" cy="18" r="1.5" fill="#D4A017" opacity="0.5" />
    </svg>
  </div>
);

/* ─── Corner Lotus ─── */
export const CornerLotus = ({ position = 'top-left' }: { position?: string }) => {
  const posClass = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4 scale-x-[-1]',
    'bottom-left': 'bottom-4 left-4 scale-y-[-1]',
    'bottom-right': 'bottom-4 right-4 scale-x-[-1] scale-y-[-1]',
  }[position] || 'top-4 left-4';

  return (
    <div className={`absolute ${posClass} w-14 h-14 md:w-18 md:h-18 pointer-events-none z-[25] opacity-70`}>
      <svg viewBox="0 0 80 80" className="w-full h-full">
        {/* Lotus corner ornament */}
        <path d="M5 75 Q10 55 8 40 Q6 28 14 18 Q20 10 30 8" stroke="#7f1d1d" strokeWidth="1.8" fill="none" opacity="0.6" />
        <path d="M5 75 Q22 60 30 45 Q35 35 34 25" stroke="#7f1d1d" strokeWidth="1" fill="none" opacity="0.4" />
        {/* Leaf shapes */}
        <path d="M8 50 Q18 40 14 30 Q8 42 8 50" fill="#7f1d1d" opacity="0.18" />
        <path d="M18 60 Q28 48 24 38 Q16 50 18 60" fill="#7f1d1d" opacity="0.14" />
        {/* Golden dots */}
        <circle cx="10" cy="38" r="2.5" fill="#D4A017" opacity="0.55" />
        <circle cx="22" cy="28" r="2" fill="#B91C1C" opacity="0.45" />
        <circle cx="7" cy="52" r="1.8" fill="#D4A017" opacity="0.4" />
      </svg>
    </div>
  );
};

/* ─── Decorative Multi-Layer Border ─── */
export const DecorativeBorder = () => (
  <div className="absolute inset-0 pointer-events-none z-[5]">
    {/* Outer maroon border */}
    <div
      className="absolute inset-2 md:inset-3 rounded-xl"
      style={{
        border: '6px solid #6B1010',
        boxShadow: 'inset 0 0 0 2px #D4A017, inset 0 0 0 4px rgba(107,16,16,0.3)',
        animation: 'border-glow 4s ease-in-out infinite',
      }}
    >
      {/* Inner decorative line */}
      <div
        className="absolute inset-2 rounded-lg"
        style={{
          border: '1px solid rgba(212,160,23,0.35)',
        }}
      />

      {/* Gold shimmer overlay on border */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 25%, rgba(255,215,0,0.15) 50%, transparent 75%)',
          backgroundSize: '400% 100%',
          animation: 'gold-shimmer 6s ease-in-out infinite',
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          border: '6px solid transparent',
        }}
      />

      {/* ── Corner Peacock Ornaments — Top Left ── */}
      <div className="absolute -top-1 -left-1 w-32 h-32 md:w-44 md:h-44 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="corner-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6B1010" />
              <stop offset="100%" stopColor="#8B1A1A" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path d="M0 0 L42 0 Q22 18 0 42 Z" fill="url(#corner-grad)" />
          {/* Peacock feather curves */}
          <path d="M5 5 Q24 5 38 22 T52 58" stroke="#0d7377" strokeWidth="2.2" fill="none" opacity="0.65" />
          <path d="M3 3 Q18 3 30 18 T42 50" stroke="#D4A017" strokeWidth="1" fill="none" opacity="0.45" />
          {/* Peacock eye */}
          <circle cx="38" cy="24" r="5" fill="#1e3a8a" opacity="0.75" />
          <circle cx="38" cy="24" r="3" fill="#3b82f6" opacity="0.65" />
          <circle cx="38" cy="24" r="1.2" fill="#fff" opacity="0.8" />
          {/* Gold dots */}
          <circle cx="12" cy="12" r="2" fill="#D4A017" opacity="0.65" />
          <circle cx="22" cy="8" r="1.2" fill="#D4A017" opacity="0.45" />
          <circle cx="8" cy="22" r="1.2" fill="#D4A017" opacity="0.45" />
        </svg>
      </div>

      {/* Top Right (mirrored) */}
      <div className="absolute -top-1 -right-1 w-32 h-32 md:w-44 md:h-44 pointer-events-none transform scale-x-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M0 0 L42 0 Q22 18 0 42 Z" fill="#6B1010" />
          <path d="M5 5 Q24 5 38 22 T52 58" stroke="#0d7377" strokeWidth="2.2" fill="none" opacity="0.65" />
          <path d="M3 3 Q18 3 30 18 T42 50" stroke="#D4A017" strokeWidth="1" fill="none" opacity="0.45" />
          <circle cx="38" cy="24" r="5" fill="#1e3a8a" opacity="0.75" />
          <circle cx="38" cy="24" r="3" fill="#3b82f6" opacity="0.65" />
          <circle cx="38" cy="24" r="1.2" fill="#fff" opacity="0.8" />
          <circle cx="12" cy="12" r="2" fill="#D4A017" opacity="0.65" />
        </svg>
      </div>

      {/* ── Bottom Elephants — Left ── */}
      <div className="absolute -bottom-1 -left-1 w-24 h-24 md:w-36 md:h-36 pointer-events-none opacity-50">
        <svg viewBox="0 0 100 100" className="w-full h-full text-red-900">
          <path d="M0 100 L42 100 Q22 80 0 58 Z" fill="#6B1010" opacity="0.8" />
          {/* Elephant silhouette */}
          <g transform="translate(8,52) scale(0.55)" opacity="0.5">
            <path d="M15 80 L28 80 L28 60 Q30 42 48 40 L62 40 Q75 40 75 60 L75 80" stroke="#D4A017" strokeWidth="2" fill="none" />
            <rect x="33" y="30" width="22" height="10" rx="3" fill="none" stroke="#D4A017" strokeWidth="1" opacity="0.6" />
            <circle cx="44" cy="35" r="3" fill="#D4A017" opacity="0.3" />
            <path d="M26 60 Q18 66 20 76" stroke="#D4A017" strokeWidth="1.5" fill="none" />
            <path d="M30 70 Q28 78 32 80" stroke="#D4A017" strokeWidth="1.2" fill="none" />
          </g>
        </svg>
      </div>

      {/* Bottom Right Elephant (mirrored) */}
      <div className="absolute -bottom-1 -right-1 w-24 h-24 md:w-36 md:h-36 pointer-events-none transform scale-x-[-1] opacity-50">
        <svg viewBox="0 0 100 100" className="w-full h-full text-red-900">
          <path d="M0 100 L42 100 Q22 80 0 58 Z" fill="#6B1010" opacity="0.8" />
          <g transform="translate(8,52) scale(0.55)" opacity="0.5">
            <path d="M15 80 L28 80 L28 60 Q30 42 48 40 L62 40 Q75 40 75 60 L75 80" stroke="#D4A017" strokeWidth="2" fill="none" />
            <rect x="33" y="30" width="22" height="10" rx="3" fill="none" stroke="#D4A017" strokeWidth="1" opacity="0.6" />
            <circle cx="44" cy="35" r="3" fill="#D4A017" opacity="0.3" />
            <path d="M26 60 Q18 66 20 76" stroke="#D4A017" strokeWidth="1.5" fill="none" />
            <path d="M30 70 Q28 78 32 80" stroke="#D4A017" strokeWidth="1.2" fill="none" />
          </g>
        </svg>
      </div>

      {/* ── Top Center Hanging Ornament ── */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 pointer-events-none z-30">
        <svg viewBox="0 0 60 40" className="w-14 h-9 md:w-18 md:h-11">
          <path d="M0 0 L60 0 L48 10 Q30 20 12 10 Z" fill="#6B1010" />
          <path d="M8 0 L52 0 L44 7 Q30 14 16 7 Z" fill="none" stroke="#D4A017" strokeWidth="0.5" opacity="0.5" />
          <circle cx="30" cy="16" r="4" fill="#D4A017" />
          <circle cx="30" cy="16" r="2.2" fill="#991B1B" />
          <line x1="30" y1="20" x2="30" y2="30" stroke="#D4A017" strokeWidth="0.8" />
          <circle cx="30" cy="32" r="2.5" fill="#D4A017" opacity="0.65" />
          <circle cx="30" cy="32" r="1.2" fill="#991B1B" opacity="0.5" />
        </svg>
      </div>

      {/* ── Side Decorative Lines ── */}
      <div className="absolute top-1/2 left-1 -translate-y-1/2 h-2/3 w-[3px] opacity-15">
        <div className="w-full h-full" style={{
          background: 'repeating-linear-gradient(180deg, #6B1010 0px, #6B1010 4px, transparent 4px, transparent 8px, #D4A017 8px, #D4A017 10px, transparent 10px, transparent 14px)',
        }} />
      </div>
      <div className="absolute top-1/2 right-1 -translate-y-1/2 h-2/3 w-[3px] opacity-15">
        <div className="w-full h-full" style={{
          background: 'repeating-linear-gradient(180deg, #6B1010 0px, #6B1010 4px, transparent 4px, transparent 8px, #D4A017 8px, #D4A017 10px, transparent 10px, transparent 14px)',
        }} />
      </div>
    </div>
  </div>
);

/* ─── Garland (Toran) ─── */
export const Garland = () => (
  <div className="absolute top-0 left-0 w-full z-[15] pointer-events-none">
    <div className="flex justify-between items-start px-5 md:px-8 -mt-1 md:-mt-2">
      {[...Array(9)].map((_, i) => {
        const isEdge = i === 0 || i === 8;
        const isMid = i === 4;
        const stemH = isEdge ? 2 : isMid ? 10 : 5 + Math.abs(4 - i) * 1.2;
        const flowers = ['🏵️', '🌺', '🌼', '🌸', '🏵️', '🌺', '🌼', '🌸', '🏵️'];
        return (
          <div
            key={i}
            className="flex flex-col items-center origin-top"
            style={{
              animation: `swing 4s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          >
            <div className="w-[2px] bg-gradient-to-b from-green-800/50 to-yellow-700/60" style={{ height: `${stemH * 2.2}px` }} />
            <div className="text-sm md:text-xl filter drop-shadow-md">{flowers[i]}</div>
            <div className="w-[1px] h-1 bg-yellow-700/40" />
            <div className="text-[8px] md:text-sm text-yellow-600/70 drop-shadow-sm">🔔</div>
          </div>
        );
      })}
    </div>

    {/* Mango leaf sprays */}
    <div className="absolute top-0 left-0 w-12 h-24 bg-gradient-to-b from-green-800/10 to-transparent rounded-br-full blur-md" />
    <div className="absolute top-0 right-0 w-12 h-24 bg-gradient-to-b from-green-800/10 to-transparent rounded-bl-full blur-md" />
  </div>
);

/* ─── Mandala Background ─── */
export const MandalaBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {/* Warm parchment gradient */}
    <div className="absolute inset-0" style={{
      background: 'linear-gradient(180deg, #F5E1B0 0%, #EDCF8E 15%, #F2D99E 35%, #EDCF8E 55%, #E8C87A 80%, #F0D89E 100%)',
    }} />

    {/* Subtle paper texture */}
    <div className="absolute inset-0 opacity-[0.06]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23996B00' fill-opacity='0.5'%3E%3Cpath d='M20 0L40 20L20 40L0 20z'/%3E%3C/g%3E%3C/svg%3E")`,
    }} />

    {/* Warm center radial glow */}
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(255,248,220,0.5)_0%,_rgba(237,207,142,0.15)_45%,_transparent_70%)] opacity-70" />

    <FloatingPetals />

    {/* Central Mandala — very subtle */}
    <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
      <svg viewBox="0 0 500 500" className="w-[140%] h-[140%] md:w-[90%] md:h-[90%] text-red-950 fill-current" style={{ animation: 'spin 360s linear infinite' }}>
        <g>
          <path d="M250 25 L275 185 L435 250 L275 315 L250 475 L225 315 L65 250 L225 185 Z" />
          <path d="M250 75 L265 200 L390 250 L265 300 L250 425 L235 300 L110 250 L235 200 Z" opacity="0.35" transform="rotate(22.5 250 250)" />
          <circle cx="250" cy="250" r="150" fill="none" stroke="currentColor" strokeWidth="0.7" />
          <circle cx="250" cy="250" r="190" fill="none" stroke="currentColor" strokeWidth="0.4" />
          {[...Array(48)].map((_, i) => (
            <line key={`ray${i}`} x1="250" y1="250" x2="250" y2={i % 2 === 0 ? "50" : "90"} transform={`rotate(${i * 7.5} 250 250)`} stroke="currentColor" strokeWidth={i % 2 === 0 ? "0.3" : "0.15"} opacity={i % 2 === 0 ? "0.7" : "0.35"} />
          ))}
          {[...Array(16)].map((_, i) => (
            <path key={`plt${i}`} d="M250 100 Q265 70 250 40 Q235 70 250 100 Z" transform={`rotate(${i * 22.5} 250 250)`} fill="none" stroke="currentColor" strokeWidth="0.5" />
          ))}
          {[...Array(12)].map((_, i) => (
            <ellipse key={`ipe${i}`} cx="250" cy="120" rx="8" ry="18" transform={`rotate(${i * 30} 250 250)`} fill="currentColor" opacity="0.2" />
          ))}
        </g>
      </svg>
    </div>

    {/* Corner mandalas */}
    <div className="absolute top-0 left-0 w-72 h-72 -translate-x-1/3 -translate-y-1/3 opacity-[0.035] text-red-900 pointer-events-none">
      <svg viewBox="0 0 100 100" className="w-full h-full fill-current" style={{ animation: 'spin-reverse 280s linear infinite' }}>
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M50 0 L65 35 L100 50 L65 65 L50 100 L35 65 L0 50 L35 35 Z" opacity="0.6" />
        <path d="M50 15 L60 40 L85 50 L60 60 L50 85 L40 60 L15 50 L40 40 Z" opacity="0.4" transform="rotate(45 50 50)" />
      </svg>
    </div>
    <div className="absolute bottom-0 right-0 w-72 h-72 translate-x-1/3 translate-y-1/3 opacity-[0.035] text-red-900 pointer-events-none">
      <svg viewBox="0 0 100 100" className="w-full h-full fill-current" style={{ animation: 'spin 280s linear infinite' }}>
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M50 0 L65 35 L100 50 L65 65 L50 100 L35 65 L0 50 L35 35 Z" opacity="0.6" />
        <path d="M50 15 L60 40 L85 50 L60 60 L50 85 L40 60 L15 50 L40 40 Z" opacity="0.4" transform="rotate(45 50 50)" />
      </svg>
    </div>
  </div>
);
