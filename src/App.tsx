/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Share2, Download, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { toPng } from 'html-to-image';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Page1 } from './components/Page1';
import { Page2 } from './components/Page2';
import { MapComponent } from './components/MapComponent';
import { RSVPForm } from './components/RSVPForm';

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
};

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#home');
  const [isCapturing, setIsCapturing] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const captureCardAsImage = useCallback(async (): Promise<Blob | null> => {
    if (!cardRef.current) return null;

    try {
      const dataUrl = await toPng(cardRef.current, {
        quality: 0.95,
        pixelRatio: 2,
        backgroundColor: '#FFD700',
        filter: (node) => {
          // Skip any nodes with data-html2canvas-ignore
          if (node instanceof HTMLElement && node.dataset.html2canvasIgnore) {
            return false;
          }
          return true;
        },
      });

      const res = await fetch(dataUrl);
      return await res.blob();
    } catch (err) {
      console.error('Failed to capture card:', err);
      return null;
    }
  }, []);

  const handleShare = async () => {
    setIsCapturing(true);

    try {
      const blob = await captureCardAsImage();
      const shareData: ShareData = {
        title: 'Wedding Invitation: Aparna & Deepak',
        text: 'You are cordially invited to the wedding of Aparna & Deepak on 20th April 2026. Please join us in celebrating this joyous occasion!',
        url: window.location.origin + window.location.pathname + '#invitation',
      };

      // Try sharing with image file on supported browsers
      if (blob && navigator.canShare) {
        const file = new File([blob], 'wedding-invitation-aparna-deepak.png', { type: 'image/png' });
        const shareWithFile = { ...shareData, files: [file] };

        if (navigator.canShare(shareWithFile)) {
          await navigator.share(shareWithFile);
          setIsCapturing(false);
          return;
        }
      }

      // Fallback: share without image
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (blob) {
        // Desktop fallback: download the image
        downloadImage(blob);
      } else {
        // Last resort: copy link
        await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
        alert('Invitation link copied to clipboard!');
      }
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        console.error('Share error:', err);
      }
    } finally {
      setIsCapturing(false);
    }
  };

  const handleDownloadImage = async () => {
    setIsCapturing(true);
    try {
      const blob = await captureCardAsImage();
      if (blob) {
        downloadImage(blob);
      }
    } catch (err) {
      console.error('Download error:', err);
    } finally {
      setIsCapturing(false);
    }
  };

  const renderContent = () => {
    switch (currentHash) {
      case '#home':
        return (
          <motion.div key="home" {...pageTransition}>
            <Home />
          </motion.div>
        );
      case '#invitation':
        return (
          <motion.div key="invitation" {...pageTransition}>
            <div className="p-4 space-y-8 pb-24">
              {/* Main invitation card — captured as image */}
              <div ref={cardRef}>
                <Page1 />
              </div>

              <Page2 />

              <RSVPForm />

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <motion.button
                  onClick={handleShare}
                  disabled={isCapturing}
                  whileHover={isCapturing ? {} : { scale: 1.05 }}
                  whileTap={isCapturing ? {} : { scale: 0.95 }}
                  className="flex items-center gap-2.5 bg-gradient-to-r from-red-800 to-red-900 text-white px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all font-semibold relative overflow-hidden group disabled:opacity-70"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s ease-in-out infinite' }}></div>
                  {isCapturing ? (
                    <Loader2 size={20} className="relative z-10 animate-spin" />
                  ) : (
                    <Share2 size={20} className="relative z-10" />
                  )}
                  <span className="relative z-10">{isCapturing ? 'Preparing...' : 'Share with Card'}</span>
                </motion.button>

                <motion.button
                  onClick={handleDownloadImage}
                  disabled={isCapturing}
                  whileHover={isCapturing ? {} : { scale: 1.05 }}
                  whileTap={isCapturing ? {} : { scale: 0.95 }}
                  className="flex items-center gap-2.5 bg-white text-red-800 border-2 border-red-200 px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:border-red-300 transition-all font-semibold disabled:opacity-70"
                >
                  {isCapturing ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <Download size={20} />
                  )}
                  <span>{isCapturing ? 'Preparing...' : 'Download Card'}</span>
                </motion.button>
              </div>

              {/* Floating Action Button for Share */}
              <motion.button
                onClick={handleShare}
                disabled={isCapturing}
                whileHover={isCapturing ? {} : { scale: 1.1 }}
                whileTap={isCapturing ? {} : { scale: 0.9 }}
                className="fixed bottom-20 right-5 bg-gradient-to-br from-red-800 to-red-900 text-white p-4 rounded-full shadow-2xl z-40 md:hidden border border-red-700/50 disabled:opacity-70"
                aria-label="Share Invitation"
              >
                {isCapturing ? <Loader2 size={22} className="animate-spin" /> : <Share2 size={22} />}
              </motion.button>
            </div>
          </motion.div>
        );
      case '#events':
        return (
          <motion.div key="events" {...pageTransition}>
            <div className="p-4">
              <Page2 />
            </div>
          </motion.div>
        );
      case '#venue':
        return (
          <motion.div key="venue" {...pageTransition}>
            <div className="p-4 md:p-8 text-center min-h-screen flex flex-col items-center justify-center">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-yellow-200/60 max-w-2xl w-full relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/henna.png')] pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-800 via-yellow-500 to-red-800"></div>

                <h2 className="text-3xl md:text-4xl font-heading text-red-900 mb-6 drop-shadow-sm">Wedding Venue</h2>

                <div className="relative w-full h-64 bg-amber-50 rounded-xl border-2 border-dashed border-red-800/20 flex flex-col items-center justify-center overflow-hidden group mb-6 z-0">
                  <MapComponent />
                </div>

                <div className="space-y-2 mb-8">
                  <p className="text-xl font-bold text-red-950">देवीशरण द्विवेदी</p>
                  <p className="text-lg text-stone-600">बलीपुर, जगापुर, हीरागंज, प्रतापगढ़. उत्तर प्रदेश</p>
                  <p className="text-sm text-stone-500">Pin: 2030204</p>
                </div>

                <motion.a
                  href="https://www.google.com/maps/search/?api=1&query=25.772722,81.604191"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-red-800 to-red-900 text-white px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all font-bold group relative z-10 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s ease-in-out infinite' }}></div>
                  <span className="relative z-10">Open in Google Maps</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform relative z-10">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        );
      default:
        return (
          <motion.div key="default" {...pageTransition}>
            <Home />
          </motion.div>
        );
    }
  };

  return (
    <Layout>
      <AnimatePresence mode="wait">
        {renderContent()}
      </AnimatePresence>
    </Layout>
  );
}

function downloadImage(blob: Blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'wedding-invitation-aparna-deepak.png';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
