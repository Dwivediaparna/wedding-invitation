import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// =========================================================================
// ⚠️ REPLACE THIS URL WITH YOUR DEPLOYED GOOGLE APPS SCRIPT WEB APP URL
// Follow the instructions in the guide to get this URL.
// =========================================================================
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxTGDL8j_BvFgoQ2syr28K14CJaBa8VaAoYklglph7hUVWT23yuO6XAqyNK3xuwVx22mg/exec';

export const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    guests: 1,
    attending: 'yes',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (!GOOGLE_SCRIPT_URL) {
        throw new Error('RSVP system is not connected yet. Please add your Google Script URL.');
      }

      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        // 'text/plain' avoids CORS preflight error from Google Apps Script
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Network error. Failed to connect to RSVP server.');
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error('RSVP submit error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-yellow-200 text-center max-w-md mx-auto mt-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/henna.png')] pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-green-500 via-emerald-400 to-green-500"></div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
            className="mb-4"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-50 to-emerald-100 rounded-full flex items-center justify-center shadow-lg border border-green-200">
              <CheckCircle size={40} className="text-green-600" />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-heading text-red-900 mb-3">Thank You! 🎉</h3>
            <p className="text-stone-600 mb-6 leading-relaxed">Your RSVP has been received. We look forward to seeing you at the celebration!</p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', guests: 1, attending: 'yes', message: '' });
              }}
              className="text-red-800 hover:text-red-900 underline underline-offset-4 font-medium hover:underline-offset-2 transition-all"
            >
              Send another response
            </button>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="form"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/90 backdrop-blur-md p-7 md:p-9 rounded-3xl shadow-2xl border border-yellow-200/60 max-w-md mx-auto mt-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/henna.png')] pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-800 via-yellow-500 to-red-800"></div>

          <h3 className="text-2xl font-heading text-red-900 mb-7 text-center">RSVP</h3>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium text-center"
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            {/* Name Field */}
            <div className="group">
              <label className="block text-sm font-semibold text-red-900 mb-1.5 tracking-wide">Your Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:ring-2 focus:ring-red-800/20 focus:border-red-800 outline-none bg-white/60 backdrop-blur-sm transition-all duration-300 text-stone-800 placeholder:text-stone-400"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
                disabled={loading}
              />
            </div>

            {/* Guests Field */}
            <div>
              <label className="block text-sm font-semibold text-red-900 mb-1.5 tracking-wide">Number of Guests</label>
              <input
                type="number"
                min="1"
                max="6"
                className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:ring-2 focus:ring-red-800/20 focus:border-red-800 outline-none bg-white/60 backdrop-blur-sm transition-all duration-300 text-stone-800"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                disabled={loading}
              />
            </div>

            {/* Attending Radio */}
            <div>
              <label className="block text-sm font-semibold text-red-900 mb-2.5 tracking-wide">Will you be attending?</label>
              <div className="flex gap-3">
                {[
                  { value: 'yes', label: 'Yes, joyfully! 🎉', color: 'peer-checked:bg-green-50 peer-checked:border-green-500 peer-checked:text-green-800' },
                  { value: 'no', label: "Sorry, can't 😔", color: 'peer-checked:bg-red-50 peer-checked:border-red-400 peer-checked:text-red-800' },
                ].map((option) => (
                  <label key={option.value} className="flex-1 cursor-pointer">
                    <input
                      type="radio"
                      name="attending"
                      value={option.value}
                      checked={formData.attending === option.value}
                      onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                      className="peer sr-only"
                      disabled={loading}
                    />
                    <div className={`text-center py-3 px-4 rounded-xl border-2 border-stone-200 transition-all duration-300 text-stone-600 hover:border-stone-300 font-medium text-sm ${option.color}`}>
                      {option.label}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-semibold text-red-900 mb-1.5 tracking-wide">Message (Optional)</label>
              <textarea
                className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:ring-2 focus:ring-red-800/20 focus:border-red-800 outline-none bg-white/60 backdrop-blur-sm transition-all duration-300 text-stone-800 placeholder:text-stone-400 min-h-[90px] resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write a message for the couple..."
                disabled={loading}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={loading ? {} : { scale: 1.02 }}
              whileTap={loading ? {} : { scale: 0.98 }}
              disabled={loading}
              className="w-full bg-gradient-to-r from-red-800 via-red-700 to-red-800 text-white py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all font-bold flex items-center justify-center gap-2.5 text-base relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s ease-in-out infinite' }}></div>
              {loading ? (
                <>
                  <Loader2 size={18} className="relative z-10 animate-spin" />
                  <span className="relative z-10">Sending...</span>
                </>
              ) : (
                <>
                  <Send size={18} className="relative z-10" />
                  <span className="relative z-10">Send RSVP</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
