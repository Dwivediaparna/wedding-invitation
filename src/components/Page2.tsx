import React from 'react';
import { motion } from 'motion/react';
import { DecorativeBorder, Garland, MandalaBackground, OmIcon, OrnamentalDivider, CornerLotus } from './Shared';

/* ─── SVG Icons ─── */
const DiyaIcon = ({ size = 28 }: { size?: number }) => (
  <svg viewBox="0 0 36 48" width={size} height={size * 1.3}>
    <defs>
      <radialGradient id="diyaGlow" cx="50%" cy="35%">
        <stop offset="0%" stopColor="#FFD700" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="18" cy="12" r="9" fill="url(#diyaGlow)" />
    <path d="M18 4 Q14 11 15 18 Q18 22 21 18 Q22 11 18 4" fill="#FF6B00" opacity="0.85" />
    <path d="M18 8 Q16 13 16.5 17 Q18 20 19.5 17 Q20 13 18 8" fill="#FFD700" opacity="0.9" />
    <ellipse cx="18" cy="28" rx="8" ry="3" fill="#991B1B" />
    <path d="M10 28 L12 38 Q18 41 24 38 L26 28" fill="#7F1D1D" />
  </svg>
);

const HaldiIcon = ({ size = 28 }: { size?: number }) => (
  <svg viewBox="0 0 40 40" width={size} height={size}>
    <circle cx="20" cy="20" r="14" fill="#F59E0B" opacity="0.25" />
    <circle cx="20" cy="20" r="8" fill="#F59E0B" opacity="0.5" />
    <circle cx="20" cy="20" r="4" fill="#D97706" opacity="0.7" />
    <path d="M14 14L26 26M14 26L26 14" stroke="#D97706" strokeWidth="1" opacity="0.3" />
  </svg>
);

const PujaIcon = ({ size = 28 }: { size?: number }) => (
  <svg viewBox="0 0 40 40" width={size} height={size}>
    <path d="M20 6L18 14H10L16 19L14 27L20 22L26 27L24 19L30 14H22Z" fill="#DC2626" opacity="0.5" />
    <circle cx="20" cy="16" r="3" fill="#D4A017" opacity="0.6" />
    <path d="M15 32H25L23 38H17Z" fill="#991B1B" opacity="0.4" />
  </svg>
);

const RingIcon = ({ size = 36 }: { size?: number }) => (
  <svg viewBox="0 0 48 48" width={size} height={size}>
    <defs>
      <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D4A017" />
        <stop offset="50%" stopColor="#F5D060" />
        <stop offset="100%" stopColor="#D4A017" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="14" fill="none" stroke="url(#ringGrad)" strokeWidth="4" />
    <circle cx="24" cy="10" r="3" fill="#DC2626" opacity="0.7" />
    <circle cx="24" cy="10" r="1.5" fill="#F5D060" opacity="0.8" />
    <circle cx="24" cy="24" r="8" fill="none" stroke="#D4A017" strokeWidth="1" opacity="0.3" />
  </svg>
);

const VidaaiIcon = ({ size = 36 }: { size?: number }) => (
  <svg viewBox="0 0 48 48" width={size} height={size}>
    <path d="M24 8C18 8 10 16 10 22C10 30 24 42 24 42C24 42 38 30 38 22C38 16 30 8 24 8Z" fill="#DC2626" opacity="0.3" />
    <path d="M24 14C20 14 15 19 15 23C15 28 24 36 24 36C24 36 33 28 33 23C33 19 28 14 24 14Z" fill="#DC2626" opacity="0.2" />
    <circle cx="20" cy="20" r="2" fill="#D4A017" opacity="0.5" />
    <circle cx="28" cy="20" r="2" fill="#D4A017" opacity="0.5" />
    <path d="M18 26 Q24 32 30 26" stroke="#D4A017" strokeWidth="1" fill="none" opacity="0.4" />
  </svg>
);

const ElephantIcon = ({ size = 48 }: { size?: number }) => (
  <svg viewBox="0 0 80 60" width={size} height={size * 0.75}>
    <g opacity="0.35">
      {/* Body */}
      <ellipse cx="40" cy="35" rx="22" ry="15" fill="#991B1B" opacity="0.4" />
      {/* Head */}
      <circle cx="22" cy="28" r="12" fill="#991B1B" opacity="0.4" />
      {/* Trunk */}
      <path d="M14 34 Q8 42 12 50 Q14 52 16 50 Q18 44 20 38" fill="#991B1B" opacity="0.35" />
      {/* Ear */}
      <ellipse cx="16" cy="24" rx="6" ry="8" fill="#991B1B" opacity="0.25" />
      {/* Legs */}
      <rect x="28" y="44" width="6" height="12" rx="2" fill="#991B1B" opacity="0.35" />
      <rect x="46" y="44" width="6" height="12" rx="2" fill="#991B1B" opacity="0.35" />
      {/* Howdah */}
      <rect x="32" y="18" width="18" height="10" rx="3" fill="#D4A017" opacity="0.3" />
      <path d="M36 18L41 12L46 18" fill="#D4A017" opacity="0.25" />
      {/* Eye */}
      <circle cx="20" cy="26" r="1.5" fill="#D4A017" opacity="0.5" />
      {/* Tusk */}
      <path d="M18 34 Q16 40 19 42" stroke="#D4A017" strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* Blanket decoration */}
      <path d="M28 30 Q40 38 52 30" stroke="#D4A017" strokeWidth="0.8" fill="none" opacity="0.3" />
    </g>
  </svg>
);

const EnvelopeIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 20 20" width={size} height={size}>
    <rect x="2" y="4" width="16" height="12" rx="2" fill="none" stroke="#991B1B" strokeWidth="1.2" opacity="0.6" />
    <path d="M2 4L10 11L18 4" fill="none" stroke="#D4A017" strokeWidth="1" opacity="0.6" />
    <path d="M2 16L7 10M18 16L13 10" fill="none" stroke="#991B1B" strokeWidth="0.6" opacity="0.3" />
  </svg>
);

const PhoneIcon = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 20 20" width={size} height={size}>
    <path d="M4 3C4 3 5 2 7 2C8 2 8 4 8 5C8 6 7 7 6 7C6 8 7 11 10 13C12 14 13 14 13 13C14 12 15 12 16 12C17 12 18 14 17 16C16 18 14 18 12 17C8 15 4 11 3 7C2 5 3 3 4 3Z" fill="#991B1B" opacity="0.5" />
  </svg>
);

const events = [
  {
    icon: <DiyaIcon size={32} />,
    title: 'मृत्तिकायान / मण्डपाच्छादन',
    tithi: 'वैशाख, कृष्णपक्ष, अमावस्या',
    date: 'शुक्रवार 17 अप्रैल 2026',
    accent: '#D97706',
  },
  {
    icon: <HaldiIcon size={32} />,
    title: 'हरिद्रालेपनम',
    tithi: 'वैशाख कृष्णपक्ष अमावस्या',
    date: 'शुक्रवार 17 अप्रैल 2026',
    accent: '#F59E0B',
  },
  {
    icon: <PujaIcon size={32} />,
    title: 'मातृपूजन / देवपूजन',
    tithi: 'वैशाख शुक्लपक्ष द्वितीया',
    date: 'रविवार 19 अप्रैल 2026',
    accent: '#DC2626',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
};

export const Page2 = () => {
  return (
    <div
      className="relative p-3 md:p-6 min-h-[1000px] flex flex-col items-center text-center shadow-2xl rounded-xl overflow-hidden m-1 md:m-4"
      style={{
        background: 'linear-gradient(180deg, #F5E1B0 0%, #EDCF8E 12%, #F2D99E 35%, #EDCF8E 55%, #E8C87A 78%, #F0D89E 100%)',
        boxShadow: '0 8px 40px rgba(107,16,16,0.12), 0 2px 10px rgba(0,0,0,0.08)',
      }}
    >
      <MandalaBackground />
      <DecorativeBorder />
      <Garland />
      <CornerLotus position="top-left" />
      <CornerLotus position="top-right" />
      <CornerLotus position="bottom-left" />
      <CornerLotus position="bottom-right" />

      <div className="relative z-20 w-full h-full flex flex-col mt-14 px-2">
        {/* Om */}
        <motion.div {...fadeInUp} transition={{ duration: 0.5 }}>
          <div className="flex justify-center items-center w-full mb-8">
            <OmIcon />
          </div>
        </motion.div>

        {/* Section Title */}
        <motion.div {...fadeInUp} transition={{ delay: 0.1, duration: 0.5 }} className="relative inline-block mx-auto mb-4">
          <h2 className="text-3xl md:text-5xl font-heading px-6 py-2 drop-shadow-sm text-gradient-shining">मांगलिक पल</h2>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-red-800/40 to-transparent blur-[1px]" />
        </motion.div>

        <OrnamentalDivider />

        {/* Event Cards with Timeline */}
        <div className="relative w-full max-w-5xl mx-auto mb-10 mt-4">
          {/* Vertical timeline connector (mobile) */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-800/20 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {events.map((event, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: 0.25 + idx * 0.12, duration: 0.5 }}
                className="relative"
              >
                {/* Timeline dot (mobile) */}
                <div className="md:hidden absolute left-4 top-6 w-4 h-4 rounded-full bg-white border-2 border-red-800 z-10" />

                <div
                  className="md:ml-0 ml-12 backdrop-blur-sm rounded-xl border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255,249,230,0.6), rgba(245,225,176,0.4))',
                    borderColor: 'rgba(107,16,16,0.08)',
                  }}
                >
                  {/* Top accent bar */}
                  <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, transparent, ${event.accent}, transparent)` }} />

                  <div className="p-5 md:p-6">
                    {/* Floating bg accent */}
                    <div className="absolute -right-4 -bottom-4 opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-500 scale-150">
                      {event.icon}
                    </div>

                    <div className="mb-3 flex justify-center transform group-hover:scale-105 transition-transform duration-300">
                      {event.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-red-900 mb-2 leading-snug font-hindi">{event.title}</h3>

                    <div className="flex items-center justify-center gap-1.5 mb-2">
                      <div className="h-px w-6 bg-red-800/15" />
                      <svg viewBox="0 0 12 12" width="8" height="8"><path d="M6 1L5 5L1 6L5 7L6 11L7 7L11 6L7 5Z" fill="#D4A017" opacity="0.6" /></svg>
                      <div className="h-px w-6 bg-red-800/15" />
                    </div>

                    <p className="text-red-950 font-medium text-sm">{event.tithi}</p>
                    <p className="text-red-800 font-bold text-base md:text-lg mt-1">{event.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <OrnamentalDivider />

        {/* Main Events — Wedding & Vidaai */}
        <div className="space-y-5 max-w-3xl mx-auto w-full flex-grow mt-4">
          {/* Shubh Vivah — highlighted */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="relative rounded-xl overflow-hidden group border"
            style={{
              background: 'linear-gradient(135deg, rgba(107,16,16,0.06), rgba(107,16,16,0.02), rgba(107,16,16,0.08))',
              borderColor: 'rgba(107,16,16,0.12)',
              boxShadow: '0 6px 24px rgba(107,16,16,0.08)',
            }}
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(255,215,0,0.1) 0%, transparent 70%)' }} />

            <div className="relative p-6 md:p-8">
              <div className="absolute -right-6 -top-6 opacity-[0.05] transform rotate-12 group-hover:rotate-0 transition-transform duration-700">
                <RingIcon size={80} />
              </div>

              <div className="mb-3 flex justify-center" style={{ animation: 'float 4s ease-in-out infinite' }}>
                <RingIcon size={40} />
              </div>
              <h3 className="text-3xl md:text-4xl font-heading mb-3 drop-shadow-md text-gradient-shining">शुभ विवाह</h3>

              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-800/30" />
                <svg viewBox="0 0 16 16" width="14" height="14"><path d="M8 2C6 2 4 4 4 7C4 12 8 15 8 15C8 15 12 12 12 7C12 4 10 2 8 2Z" fill="#D4A017" opacity="0.5" /><circle cx="8" cy="6" r="2" fill="#991B1B" opacity="0.5" /></svg>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-800/30" />
              </div>

              <p className="text-lg text-red-950 font-medium">वैशाख शुक्लपक्ष अक्षय तृतीया-</p>
              <p className="text-2xl text-red-800 font-bold mt-1">सोमवार 20 अप्रैल 2026</p>
            </div>
          </motion.div>

          {/* Vidaai */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="relative rounded-xl overflow-hidden group border"
            style={{
              background: 'linear-gradient(135deg, rgba(107,16,16,0.04), rgba(107,16,16,0.06), rgba(107,16,16,0.03))',
              borderColor: 'rgba(107,16,16,0.1)',
              boxShadow: '0 4px 18px rgba(107,16,16,0.06)',
            }}
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-800/25 to-transparent" />

            <div className="relative p-6 md:p-8">
              <div className="absolute -left-6 -bottom-6 opacity-[0.05] transform -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                <VidaaiIcon size={80} />
              </div>

              <div className="mb-3 flex justify-center">
                <VidaaiIcon size={40} />
              </div>
              <h3 className="text-2xl md:text-3xl font-heading mb-3 drop-shadow-sm text-gradient-shining leading-relaxed">
                विदाई भीगीपलकें
              </h3>

              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-800/30" />
                <svg viewBox="0 0 16 16" width="14" height="14"><path d="M8 2C6 2 4 4 4 7C4 12 8 15 8 15C8 15 12 12 12 7C12 4 10 2 8 2Z" fill="#D4A017" opacity="0.5" /><circle cx="8" cy="6" r="2" fill="#991B1B" opacity="0.5" /></svg>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-800/30" />
              </div>

              <p className="text-lg text-red-950 font-medium">वैशाख शुक्लपक्ष चतुर्थी । पञ्चमी</p>
              <p className="text-2xl text-red-800 font-bold mt-1">मंगलवार 21 अप्रैल 2026</p>
            </div>
          </motion.div>
        </div>

        {/* Elephants */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex justify-between w-full px-10 mt-8"
        >
          <div className="transform scale-x-[-1] hover:scale-110 transition-transform cursor-pointer">
            <ElephantIcon size={52} />
          </div>
          <div className="hover:scale-110 transition-transform cursor-pointer">
            <ElephantIcon size={52} />
          </div>
        </motion.div>

        <OrnamentalDivider className="mt-4" />

        {/* Footer */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-4 w-full max-w-4xl mx-auto text-left flex flex-col md:flex-row justify-between items-start md:items-center gap-5 px-4"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <EnvelopeIcon size={16} />
              <h3 className="text-lg font-bold text-red-900">प्रेषक :</h3>
            </div>
            <p className="text-red-950 text-2xl font-bold font-heading">देवीशरण द्विवेदी</p>
            <p className="text-red-950 text-sm md:text-base mt-1 font-medium">बलीपुर, जगापुर, हीरागंज, प्रतापगढ़. उत्तर प्रदेश Pin: 2030204</p>
            <p className="text-red-900 font-bold text-sm md:text-base mt-2 flex items-center gap-2">
              <PhoneIcon size={14} /> सम्पर्क सूत्रः 7523066481
            </p>
          </div>

          {/* Wedding Badge */}
          <div
            className="text-center py-5 px-8 md:px-10 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #6B1010, #991B1B, #6B1010)',
              border: '2px solid rgba(212,160,23,0.35)',
              color: '#FFF9E6',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" style={{ backgroundSize: '200% 100%', animation: 'shimmer 3s ease-in-out infinite' }} />
            <p className="text-xl md:text-2xl font-heading relative z-10">अपर्णा परिणय दीपक</p>
            <div className="flex items-center justify-center gap-2 my-1.5 relative z-10">
              <div className="h-px w-8 bg-yellow-200/30" />
              <svg viewBox="0 0 12 12" width="10" height="10"><path d="M6 1L5 5L1 6L5 7L6 11L7 7L11 6L7 5Z" fill="#D4A017" opacity="0.7" /></svg>
              <div className="h-px w-8 bg-yellow-200/30" />
            </div>
            <p className="text-sm md:text-base text-yellow-200 relative z-10">अक्षय तृतीया 20 अप्रैल 2026</p>
            <p className="text-xs mt-2 opacity-80 border-t border-yellow-100/15 pt-1.5 relative z-10">प्रतिष्ठा में श्री युत्</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
