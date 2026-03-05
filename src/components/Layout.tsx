import React from 'react';
import { Home, Mail, Calendar, MapPin, Heart } from 'lucide-react';
import { motion } from 'motion/react';

const navItems = [
  { icon: Home, label: 'Home', hash: '#home', matchEmpty: true },
  { icon: Mail, label: 'Invitation', hash: '#invitation', matchEmpty: false },
  { icon: Calendar, label: 'Events', hash: '#events', matchEmpty: false },
  { icon: MapPin, label: 'Venue', hash: '#venue', matchEmpty: false },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const currentHash = window.location.hash || '#home';

  return (
    <div className="min-h-screen font-sans text-stone-800 flex flex-col">
      {/* Header — Glassmorphic */}
      <header className="bg-red-900/90 backdrop-blur-xl text-yellow-100 shadow-2xl sticky top-0 z-50 border-b border-yellow-500/20">
        <div className="max-w-5xl mx-auto flex justify-between items-center px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="text-yellow-400 fill-yellow-400" size={20} />
            </motion.div>
            <span className="font-heading text-xl font-bold tracking-wide">Aparna & Deepak</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs md:text-sm text-yellow-200/90 font-medium tracking-wider">20 April 2026</span>
          </div>
        </div>
        {/* Gold shimmer line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent"></div>
      </header>

      {/* Main Content */}
      <main className="flex-grow overflow-y-auto pb-24">
        {children}
      </main>

      {/* Bottom Navigation — Frosted Glass */}
      <nav className="fixed bottom-0 w-full bg-white/80 backdrop-blur-xl border-t border-stone-200/60 shadow-[0_-4px_30px_rgba(0,0,0,0.08)] z-50">
        <div className="max-w-5xl mx-auto flex justify-around items-center px-2 py-1.5 relative">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.matchEmpty
              ? (currentHash === item.hash || currentHash === '' || currentHash === '#')
              : currentHash === item.hash;

            return (
              <button
                key={item.hash}
                onClick={() => {
                  window.location.hash = item.hash.replace('#', '');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`relative flex flex-col items-center py-2 px-4 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? 'text-red-800'
                    : 'text-stone-400 hover:text-red-700'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-red-50 rounded-2xl border border-red-100"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <div className="relative z-10">
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
                </div>
                <span className={`relative z-10 text-[10px] mt-1 transition-all ${
                  isActive ? 'font-bold' : 'font-medium'
                }`}>{item.label}</span>
              </button>
            );
          })}
        </div>
        {/* Safe area padding for notched phones */}
        <div className="h-[env(safe-area-inset-bottom)]"></div>
      </nav>
    </div>
  );
};
