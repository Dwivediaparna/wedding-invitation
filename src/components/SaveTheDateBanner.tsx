import React, { useState } from 'react';
import { X, CalendarDays, CalendarPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const SaveTheDateBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAddToCalendar = () => {
    const title = encodeURIComponent('Aparna & Deepak Wedding');
    const details = encodeURIComponent('Wedding celebration of Aparna & Deepak at Tiwari Mahamadpur, Pratapgarh, UP');
    const location = encodeURIComponent('Tiwari Mahamadpur, Kamasin, Pratapgarh, Uttar Pradesh');
    const startDate = '20260420T060000Z';
    const endDate = '20260420T180000Z';
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startDate}/${endDate}`;
    window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-20 left-4 right-4 md:left-auto md:right-8 md:bottom-24 md:w-80 z-40"
        >
          <div className="bg-white/95 backdrop-blur-xl border border-red-100/60 shadow-2xl rounded-2xl p-4 relative overflow-hidden ring-1 ring-black/5">
            {/* Gold top accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400"></div>

            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-red-50 to-transparent rounded-full -mr-12 -mt-12 z-0"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-yellow-50 to-transparent rounded-full -ml-10 -mb-10 z-0"></div>

            <div className="flex items-center gap-4 relative z-10">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-3 rounded-xl text-red-800 shadow-sm border border-red-100 shrink-0">
                <CalendarDays size={24} />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="font-heading text-lg text-red-900 leading-tight mb-0.5">Save the Date</h4>
                <p className="text-stone-800 font-bold">20th April 2026</p>
                <p className="text-xs text-stone-500 mt-0.5 font-medium">Monday • Pratapgarh, UP</p>
              </div>

              <button
                onClick={() => setIsVisible(false)}
                className="text-stone-300 hover:text-red-800 hover:bg-red-50 rounded-full p-1.5 transition-all z-10 shrink-0 absolute top-3 right-3"
                aria-label="Dismiss"
              >
                <X size={16} />
              </button>
            </div>

            <button
              onClick={handleAddToCalendar}
              className="mt-3 w-full flex items-center justify-center gap-2 text-sm font-semibold text-red-800 bg-red-50 hover:bg-red-100 py-2.5 rounded-xl transition-colors border border-red-100 relative z-10"
            >
              <CalendarPlus size={16} />
              <span>Add to Calendar</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
