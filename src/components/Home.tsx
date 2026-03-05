import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Heart, ArrowRight, Share2, Sparkles } from 'lucide-react';
import { SaveTheDateBanner } from './SaveTheDateBanner';

// Bride Avatar — Indian bride with dupatta, bindi, jhumka earrings
const BrideAvatar = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="bride-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FEF3C7" />
        <stop offset="100%" stopColor="#FDE68A" />
      </linearGradient>
      <linearGradient id="dupatta" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#DC2626" />
        <stop offset="100%" stopColor="#991B1B" />
      </linearGradient>
      <linearGradient id="bride-skin" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FDDCB5" />
        <stop offset="100%" stopColor="#F5C99A" />
      </linearGradient>
    </defs>
    {/* Background */}
    <circle cx="100" cy="100" r="100" fill="url(#bride-bg)" />
    {/* Hair */}
    <ellipse cx="100" cy="78" rx="42" ry="48" fill="#1a1a2e" />
    {/* Face */}
    <ellipse cx="100" cy="90" rx="34" ry="38" fill="url(#bride-skin)" />
    {/* Hair parting line */}
    <line x1="100" y1="52" x2="100" y2="72" stroke="#DC2626" strokeWidth="2" />
    {/* Maang tikka chain */}
    <path d="M85 58 Q100 52 115 58" stroke="#F59E0B" strokeWidth="1.5" fill="none" />
    {/* Maang tikka jewel */}
    <circle cx="100" cy="65" r="3.5" fill="#DC2626" stroke="#F59E0B" strokeWidth="1" />
    {/* Bindi */}
    <circle cx="100" cy="82" r="3" fill="#DC2626" />
    {/* Eyes */}
    <ellipse cx="88" cy="88" rx="4" ry="2.5" fill="#1a1a2e" />
    <ellipse cx="112" cy="88" rx="4" ry="2.5" fill="#1a1a2e" />
    <circle cx="89" cy="87.5" r="1" fill="white" />
    <circle cx="113" cy="87.5" r="1" fill="white" />
    {/* Eyeliner wing */}
    <path d="M82 88 L80 86" stroke="#1a1a2e" strokeWidth="1" />
    <path d="M118 88 L120 86" stroke="#1a1a2e" strokeWidth="1" />
    {/* Eyebrows */}
    <path d="M83 83 Q88 80 94 83" stroke="#1a1a2e" strokeWidth="1.5" fill="none" />
    <path d="M106 83 Q112 80 117 83" stroke="#1a1a2e" strokeWidth="1.5" fill="none" />
    {/* Nose */}
    <path d="M100 90 Q97 96 100 98" stroke="#E8B895" strokeWidth="1.2" fill="none" />
    {/* Nose ring */}
    <circle cx="96" cy="97" r="2" fill="none" stroke="#F59E0B" strokeWidth="1" />
    <circle cx="96" cy="99" r="0.8" fill="#F59E0B" />
    {/* Smile */}
    <path d="M92 105 Q100 112 108 105" stroke="#C0736E" strokeWidth="2" fill="#E88B85" strokeLinecap="round" />
    {/* Jhumka earrings */}
    <circle cx="64" cy="95" r="4" fill="#F59E0B" />
    <circle cx="64" cy="100" r="2.5" fill="#DC2626" stroke="#F59E0B" strokeWidth="0.8" />
    <circle cx="64" cy="104" r="1.5" fill="#F59E0B" />
    <circle cx="136" cy="95" r="4" fill="#F59E0B" />
    <circle cx="136" cy="100" r="2.5" fill="#DC2626" stroke="#F59E0B" strokeWidth="0.8" />
    <circle cx="136" cy="104" r="1.5" fill="#F59E0B" />
    {/* Dupatta (draped over head) */}
    <path d="M56 72 Q60 50 100 45 Q140 50 144 72 L150 130 Q100 140 50 130 Z" fill="url(#dupatta)" opacity="0.85" />
    {/* Dupatta border pattern */}
    <path d="M56 72 Q60 50 100 45 Q140 50 144 72" stroke="#F59E0B" strokeWidth="3" fill="none" />
    <path d="M54 78 Q60 56 100 51 Q140 56 146 78" stroke="#F59E0B" strokeWidth="1" fill="none" opacity="0.6" />
    {/* Face opening in dupatta */}
    <path d="M66 75 Q100 60 134 75" stroke="#F59E0B" strokeWidth="2" fill="none" />
    {/* Necklace */}
    <path d="M75 120 Q100 135 125 120" stroke="#F59E0B" strokeWidth="2.5" fill="none" />
    <path d="M78 124 Q100 138 122 124" stroke="#F59E0B" strokeWidth="1.5" fill="none" />
    {/* Necklace center jewel */}
    <circle cx="100" cy="133" r="4" fill="#DC2626" stroke="#F59E0B" strokeWidth="1.5" />
    {/* Necklace side gems */}
    <circle cx="85" cy="128" r="2" fill="#15803D" stroke="#F59E0B" strokeWidth="0.8" />
    <circle cx="115" cy="128" r="2" fill="#15803D" stroke="#F59E0B" strokeWidth="0.8" />
    {/* Dupatta body below */}
    <path d="M50 130 Q40 160 35 200 L0 200 L0 150 Z" fill="url(#dupatta)" opacity="0.7" />
    <path d="M150 130 Q160 160 165 200 L200 200 L200 150 Z" fill="url(#dupatta)" opacity="0.7" />
    {/* Blouse */}
    <path d="M70 125 Q100 145 130 125 L140 200 L60 200 Z" fill="#DC2626" />
  </svg>
);

// Groom Avatar — Indian groom with turban, kalgi, and sherwani
const GroomAvatar = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="groom-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FEF3C7" />
        <stop offset="100%" stopColor="#FDE68A" />
      </linearGradient>
      <linearGradient id="turban" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#DC2626" />
        <stop offset="100%" stopColor="#7F1D1D" />
      </linearGradient>
      <linearGradient id="sherwani" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FEF3C7" />
        <stop offset="100%" stopColor="#FDE68A" />
      </linearGradient>
      <linearGradient id="groom-skin" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F0C8A0" />
        <stop offset="100%" stopColor="#E8B890" />
      </linearGradient>
    </defs>
    {/* Background */}
    <circle cx="100" cy="100" r="100" fill="url(#groom-bg)" />
    {/* Face */}
    <ellipse cx="100" cy="95" rx="34" ry="38" fill="url(#groom-skin)" />
    {/* Turban */}
    <path d="M55 70 Q55 25 100 20 Q145 25 145 70 Q145 80 130 78 Q100 85 70 78 Q55 80 55 70" fill="url(#turban)" />
    {/* Turban folds */}
    <path d="M65 55 Q100 45 135 55" stroke="#991B1B" strokeWidth="1.5" fill="none" opacity="0.5" />
    <path d="M62 65 Q100 55 138 65" stroke="#991B1B" strokeWidth="1" fill="none" opacity="0.4" />
    <path d="M60 48 Q100 38 140 48" stroke="#F59E0B" strokeWidth="1.5" fill="none" opacity="0.6" />
    {/* Turban drape (sehera side) */}
    <path d="M130 65 Q150 70 155 90 Q158 110 150 125" stroke="#DC2626" strokeWidth="5" fill="none" opacity="0.6" />
    {/* Kalgi (turban ornament) */}
    <path d="M80 30 Q75 15 80 5" stroke="#F59E0B" strokeWidth="2" fill="none" />
    <path d="M80 30 Q70 18 72 5" stroke="#F59E0B" strokeWidth="1.5" fill="none" />
    <path d="M80 30 Q85 18 88 8" stroke="#F59E0B" strokeWidth="1.5" fill="none" />
    <circle cx="80" cy="32" r="5" fill="#F59E0B" />
    <circle cx="80" cy="32" r="3" fill="#DC2626" />
    <circle cx="80" cy="32" r="1.5" fill="white" opacity="0.6" />
    {/* Turban border (patti) */}
    <path d="M60 72 Q100 80 140 72" stroke="#F59E0B" strokeWidth="3" fill="none" />
    {/* Eyes */}
    <ellipse cx="88" cy="92" rx="4" ry="2.5" fill="#1a1a2e" />
    <ellipse cx="112" cy="92" rx="4" ry="2.5" fill="#1a1a2e" />
    <circle cx="89" cy="91.5" r="1" fill="white" />
    <circle cx="113" cy="91.5" r="1" fill="white" />
    {/* Eyebrows */}
    <path d="M82 86 Q88 83 95 86" stroke="#1a1a2e" strokeWidth="2" fill="none" />
    <path d="M105 86 Q112 83 118 86" stroke="#1a1a2e" strokeWidth="2" fill="none" />
    {/* Nose */}
    <path d="M100 94 Q97 100 100 102" stroke="#D4A07A" strokeWidth="1.2" fill="none" />
    {/* Smile */}
    <path d="M92 108 Q100 114 108 108" stroke="#C0736E" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Light mustache */}
    <path d="M88 105 Q94 102 100 104 Q106 102 112 105" stroke="#2D2D3F" strokeWidth="1.5" fill="none" />
    {/* Ears */}
    <ellipse cx="65" cy="95" rx="5" ry="8" fill="#E8B890" />
    <ellipse cx="135" cy="95" rx="5" ry="8" fill="#E8B890" />
    {/* Sherwani collar */}
    <path d="M70 125 L85 145 L100 130 L115 145 L130 125" fill="url(#sherwani)" stroke="#F59E0B" strokeWidth="1.5" />
    {/* Sherwani body */}
    <path d="M65 125 L60 200 L140 200 L135 125" fill="url(#sherwani)" />
    {/* Sherwani center buttons */}
    <line x1="100" y1="130" x2="100" y2="200" stroke="#F59E0B" strokeWidth="1" />
    <circle cx="100" cy="145" r="2" fill="#F59E0B" />
    <circle cx="100" cy="160" r="2" fill="#F59E0B" />
    <circle cx="100" cy="175" r="2" fill="#F59E0B" />
    <circle cx="100" cy="190" r="2" fill="#F59E0B" />
    {/* Sherwani border */}
    <path d="M65 125 L60 200" stroke="#F59E0B" strokeWidth="1.5" />
    <path d="M135 125 L140 200" stroke="#F59E0B" strokeWidth="1.5" />
    {/* Dupatta/stole */}
    <path d="M60 130 Q50 160 45 200" stroke="#DC2626" strokeWidth="8" fill="none" opacity="0.4" />
    <path d="M60 130 Q50 160 45 200" stroke="#F59E0B" strokeWidth="1" fill="none" opacity="0.5" />
    {/* Haar (garland) */}
    <path d="M75 125 Q100 140 125 125" stroke="#F59E0B" strokeWidth="2" fill="none" />
    <circle cx="88" cy="130" r="2.5" fill="#FF6B6B" opacity="0.7" />
    <circle cx="100" cy="134" r="2.5" fill="#FF6B6B" opacity="0.7" />
    <circle cx="112" cy="130" r="2.5" fill="#FF6B6B" opacity="0.7" />
  </svg>
);

// Floating particle component
const FloatingParticles = () => {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 5,
    emoji: ['✨', '🌸', '⭐', '🪷'][i % 4],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bottom-0 text-sm md:text-base"
          style={{
            left: p.left,
            animation: `particle-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
            fontSize: `${p.size * 3}px`,
          }}
        >
          {p.emoji}
        </div>
      ))}
    </div>
  );
};

// Animated countdown component
const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6, type: 'spring' }}
      className="flex gap-3 md:gap-5"
    >
      {[
        { value: timeLeft.days, label: 'Days' },
        { value: timeLeft.hours, label: 'Hours' },
        { value: timeLeft.minutes, label: 'Mins' },
        { value: timeLeft.seconds, label: 'Secs' },
      ].map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 + i * 0.1 }}
          className="flex flex-col items-center"
        >
          <div className="bg-white/10 backdrop-blur-md border border-yellow-200/30 rounded-2xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-xl ring-1 ring-yellow-500/20">
            <span className="text-3xl md:text-4xl font-bold font-mono text-yellow-50 drop-shadow-md tabular-nums">
              {String(item.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-[10px] md:text-xs uppercase tracking-widest text-yellow-200/80 mt-2 font-medium">{item.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

function calculateTimeLeft(targetDate: Date) {
  const now = new Date();
  const diff = Math.max(0, targetDate.getTime() - now.getTime());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export const Home = () => {
  const weddingDate = new Date('2026-04-20T00:00:00');

  return (
    <div className="min-h-full bg-stone-50 pb-24">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden rounded-b-[3rem] shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-red-900 to-red-800">
          <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/henna.png')]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-transparent to-red-950/30"></div>

          {/* Decorative orbs */}
          <div className="absolute top-8 left-8 w-40 h-40 rounded-full bg-yellow-500/10 blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-8 w-56 h-56 rounded-full bg-yellow-500/10 blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-yellow-400/5 blur-3xl"></div>
        </div>

        <FloatingParticles />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-yellow-100 p-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
              className="mb-5"
            >
              <Sparkles className="text-yellow-400" size={36} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-heading text-xl md:text-2xl mb-3 text-yellow-200/90 tracking-wider"
            >
              The Wedding Celebration of
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-heading text-5xl md:text-7xl mb-6 text-yellow-50 leading-tight drop-shadow-2xl"
            >
              Aparna <br className="md:hidden" />
              <span className="text-3xl md:text-4xl align-middle mx-2 text-yellow-400 font-serif italic">&</span>
              <br className="md:hidden" />
              Deepak
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex items-center gap-4 text-sm md:text-base tracking-[0.2em] uppercase opacity-90 mb-10 border-y border-yellow-200/20 py-3 px-8 bg-white/5 backdrop-blur-sm rounded-full"
            >
              <span className="font-medium">20th April 2026</span>
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></span>
              <span className="font-medium">Pratapgarh, UP</span>
            </motion.div>
          </motion.div>

          <CountdownTimer targetDate={weddingDate} />
        </div>
      </div>

      {/* Couple Details Cards */}
      <div className="max-w-4xl mx-auto px-4 -mt-16 relative z-20">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-stone-100 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/flower-trail.png')]"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">

            {/* Bride */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col items-center text-center flex-1 group"
            >
              <div className="w-40 h-40 rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 mb-5 shadow-xl transform group-hover:scale-105 transition-all duration-500 group-hover:shadow-2xl">
                <div className="w-full h-full rounded-full bg-red-50 border-4 border-white overflow-hidden relative flex items-center justify-center">
                  <BrideAvatar />
                </div>
              </div>
              <h3 className="font-heading text-3xl text-red-900 mb-1">Aparna Bhardwaj</h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-red-300 to-transparent my-2"></div>
              <p className="text-stone-400 text-sm uppercase tracking-wider mb-1 font-medium">Daughter of</p>
              <p className="font-medium text-stone-700 text-lg">Smt. Rita & Asim Dwivedi</p>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="flex flex-col items-center justify-center gap-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-50 to-red-100 rounded-full flex items-center justify-center text-red-600 shadow-inner border border-red-100">
                <Heart size={30} fill="#dc2626" className="animate-pulse" />
              </div>
              <span className="font-heading text-2xl text-red-300">&</span>
            </motion.div>

            {/* Groom */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col items-center text-center flex-1 group"
            >
              <div className="w-40 h-40 rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 mb-5 shadow-xl transform group-hover:scale-105 transition-all duration-500 group-hover:shadow-2xl">
                <div className="w-full h-full rounded-full bg-red-50 border-4 border-white overflow-hidden relative flex items-center justify-center">
                  <GroomAvatar />
                </div>
              </div>
              <h3 className="font-heading text-3xl text-red-900 mb-1">Deepak Pandey</h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-red-300 to-transparent my-2"></div>
              <p className="text-stone-400 text-sm uppercase tracking-wider mb-1 font-medium">Son of</p>
              <p className="font-medium text-stone-700 text-lg">Smt. Manju & Anil Kumar Pandey</p>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <div className="max-w-4xl mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.location.hash = 'invitation'}
          className="group bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white p-5 rounded-2xl shadow-lg flex items-center justify-between hover:shadow-2xl transition-all duration-300 border border-red-700/50 relative overflow-hidden"
        >
          {/* Shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s ease-in-out infinite' }}></div>
          <div className="flex items-center gap-5 relative z-10">
            <div className="bg-white/10 p-3.5 rounded-xl backdrop-blur-sm group-hover:bg-white/20 transition-colors">
              <Share2 className="text-yellow-200" size={28} />
            </div>
            <div className="text-left">
              <span className="block font-heading text-xl mb-0.5">Wedding Invitation</span>
              <span className="text-sm text-red-200 font-light">View the digital card</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors relative z-10">
            <ArrowRight className="opacity-80 group-hover:translate-x-1 transition-transform" size={20} />
          </div>
        </motion.button>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.location.hash = 'venue'}
          className="group bg-white text-stone-800 p-5 rounded-2xl shadow-lg border border-stone-200 flex items-center justify-between hover:border-red-200 hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center gap-5">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-3.5 rounded-xl group-hover:from-orange-100 group-hover:to-orange-200 transition-colors">
              <MapPin className="text-orange-600" size={28} />
            </div>
            <div className="text-left">
              <span className="block font-heading text-xl mb-0.5">Get Directions</span>
              <span className="text-sm text-stone-500 font-light">Tiwari Mahamadpur</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-stone-200 transition-colors">
            <ArrowRight className="opacity-50 group-hover:translate-x-1 transition-transform" size={20} />
          </div>
        </motion.button>
      </div>

      <SaveTheDateBanner />
    </div>
  );
};
