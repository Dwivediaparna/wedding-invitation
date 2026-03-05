import React from 'react';
import { motion } from 'motion/react';
import { DecorativeBorder, Garland, MandalaBackground, OmIcon, OrnamentalDivider, CornerLotus } from './Shared';

const events = [
  {
    emoji: '🪔',
    title: 'मृत्तिकायान / मण्डपाच्छादन',
    tithi: 'वैशाख, कृष्णपक्ष, अमावस्या',
    date: 'शुक्रवार 17 अप्रैल 2026',
    accent: '#D97706',
  },
  {
    emoji: '✨',
    title: 'हरिद्रालेपनम',
    tithi: 'वैशाख कृष्णपक्ष अमावस्या',
    date: 'शुक्रवार 17 अप्रैल 2026',
    accent: '#F59E0B',
  },
  {
    emoji: '🙏',
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
    <div className="relative p-3 md:p-6 min-h-[1000px] flex flex-col items-center text-center shadow-2xl rounded-2xl overflow-hidden m-1 md:m-4 bg-[#FFD700]">
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
          <h2 className="text-4xl md:text-5xl font-heading px-8 py-2 drop-shadow-sm text-gradient-shining">मांगलिक पल</h2>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-red-800/40 to-transparent blur-[1px]"></div>
        </motion.div>

        <OrnamentalDivider />

        {/* Event Cards with Timeline */}
        <div className="relative w-full max-w-5xl mx-auto mb-12 mt-4">
          {/* Vertical timeline connector (mobile) */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-800/20 to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            {events.map((event, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: 0.25 + idx * 0.12, duration: 0.5 }}
                className="relative"
              >
                {/* Timeline dot (mobile) */}
                <div className="md:hidden absolute left-4 top-6 w-4 h-4 rounded-full bg-white border-2 border-red-800 z-10"></div>

                <div className="md:ml-0 ml-12 bg-yellow-50/50 backdrop-blur-sm rounded-2xl border border-red-800/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                  {/* Top accent bar */}
                  <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, transparent, ${event.accent}, transparent)` }}></div>

                  <div className="p-5 md:p-6">
                    {/* Floating bg accent */}
                    <div className="absolute -right-4 -bottom-4 text-7xl opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500">{event.emoji}</div>

                    <div className="text-3xl md:text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{event.emoji}</div>
                    <h3 className="text-lg md:text-xl font-bold text-red-900 mb-2 leading-snug font-hindi">{event.title}</h3>

                    <div className="flex items-center justify-center gap-1.5 mb-2">
                      <div className="h-px w-6 bg-red-800/20"></div>
                      <span className="text-yellow-600 text-[10px]">✦</span>
                      <div className="h-px w-6 bg-red-800/20"></div>
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
        <div className="space-y-6 max-w-3xl mx-auto w-full flex-grow mt-4">
          {/* Shubh Vivah — highlighted */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden group shadow-[0_8px_30px_rgba(153,27,27,0.12)] border border-red-800/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/[0.08] via-red-900/[0.03] to-red-900/[0.12]"></div>
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(255,215,0,0.15) 0%, transparent 70%)' }}></div>

            <div className="relative p-6 md:p-8">
              <div className="absolute -right-6 -top-6 text-8xl opacity-[0.04] transform rotate-12 group-hover:rotate-0 transition-transform duration-700 drop-shadow-lg">🌺</div>

              <div className="text-4xl mb-2" style={{ animation: 'float 4s ease-in-out infinite' }}>💍</div>
              <h3 className="text-3xl md:text-5xl font-heading mb-3 drop-shadow-md text-gradient-shining">शुभ विवाह</h3>

              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-800/40"></div>
                <span className="text-yellow-600 text-sm animate-pulse">🪷</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-800/40"></div>
              </div>

              <p className="text-lg text-red-950 font-medium">वैशाख शुक्लपक्ष अक्षय तृतीया-</p>
              <p className="text-2xl text-red-800 font-bold mt-1">सोमवार 20 अप्रैल 2026</p>
            </div>
          </motion.div>

          {/* Vidaai */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden group shadow-[0_8px_30px_rgba(153,27,27,0.08)] border border-red-800/15"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/[0.04] via-red-900/[0.08] to-red-900/[0.04]"></div>
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-800/30 to-transparent"></div>

            <div className="relative p-6 md:p-8">
              <div className="absolute -left-6 -bottom-6 text-8xl opacity-[0.04] transform -rotate-12 group-hover:rotate-0 transition-transform duration-700 drop-shadow-lg">🌸</div>

              <div className="text-4xl mb-2">🥹</div>
              <h3 className="text-3xl md:text-4xl font-heading mb-3 drop-shadow-sm text-gradient-shining">विदाई भीगीपलकें</h3>

              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-800/40"></div>
                <span className="text-yellow-600 text-sm animate-pulse">🪷</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-800/40"></div>
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
          className="flex justify-between w-full px-12 mt-10 opacity-40 text-4xl md:text-5xl"
        >
          <span className="transform scale-x-[-1] drop-shadow-md hover:scale-110 transition-transform cursor-pointer">🐘</span>
          <span className="drop-shadow-md hover:scale-110 transition-transform cursor-pointer">🐘</span>
        </motion.div>

        <OrnamentalDivider className="mt-6" />

        {/* Footer */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-4 w-full max-w-4xl mx-auto text-left flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-4"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm">✉️</span>
              <h3 className="text-lg font-bold text-red-900">प्रेषक :</h3>
            </div>
            <p className="text-red-950 text-2xl font-bold font-heading">देवीशरण द्विवेदी</p>
            <p className="text-red-950 text-sm md:text-base mt-1 font-medium">बलीपुर, जगापुर, हीरागंज, प्रतापगढ़. उत्तर प्रदेश Pin: 2030204</p>
            <p className="text-red-900 font-bold text-sm md:text-base mt-2 flex items-center gap-2">
              <span>📞</span> सम्पर्क सूत्रः 7523066481
            </p>
          </div>

          {/* Wedding Badge */}
          <div className="text-center bg-gradient-to-br from-red-800 to-red-900 text-yellow-100 py-5 px-8 md:px-10 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden" style={{ border: '2px solid rgba(245,158,11,0.4)' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" style={{ backgroundSize: '200% 100%', animation: 'shimmer 3s ease-in-out infinite' }}></div>
            <p className="text-xl md:text-2xl font-heading relative z-10">अपर्णा परिणय दीपक</p>
            <div className="flex items-center justify-center gap-2 my-1.5 relative z-10">
              <div className="h-px w-8 bg-yellow-200/30"></div>
              <span className="text-yellow-400 text-xs">✦</span>
              <div className="h-px w-8 bg-yellow-200/30"></div>
            </div>
            <p className="text-sm md:text-base text-yellow-200 relative z-10">अक्षय तृतीया 20 अप्रैल 2026</p>
            <p className="text-xs mt-2 opacity-80 border-t border-yellow-100/15 pt-1.5 relative z-10">प्रतिष्ठा में श्री युत्</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
