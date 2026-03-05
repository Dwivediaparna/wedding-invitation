import React, { useState } from 'react';

const DeityImage = ({ src, alt, fallbackText }: { src: string, alt: string, fallbackText: string }) => {
  const [error, setError] = useState(false);

  return (
    <div className="w-full h-full bg-gradient-to-br from-yellow-50 to-yellow-100 flex items-center justify-center overflow-hidden">
      {!error ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          onError={() => setError(true)}
        />
      ) : (
        <div className="text-center p-2">
          <span className="text-2xl block mb-1">🕉️</span>
          <span className="text-[10px] font-bold text-red-800 leading-tight block">{fallbackText}</span>
        </div>
      )}
    </div>
  );
};

export const DeitySection = () => {
  return (
    <div className="w-full mb-8 relative z-20">
      <div className="flex justify-center items-center gap-4 md:gap-14 mb-6">
        {/* Sitaram */}
        <div className="flex flex-col items-center group">
          <div
            className="w-24 h-24 md:w-30 md:h-30 rounded-full shadow-xl overflow-hidden bg-yellow-100 relative animate-glow-pulse"
            style={{ padding: '3px', background: 'linear-gradient(135deg, #fbbf24, #b91c1c, #fbbf24)' }}
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <DeityImage
                src="/sitaram.png"
                alt="Sitaram"
                fallbackText="Sita Ram"
              />
            </div>
          </div>
          <span className="text-red-900 font-bold text-sm mt-2.5 font-hindi drop-shadow-sm">सीताराम</span>
        </div>

        {/* Ganesha — Center & Larger */}
        <div className="flex flex-col items-center -mt-6 mx-1">
          <div
            className="w-34 h-34 md:w-44 md:h-44 rounded-full shadow-2xl overflow-hidden relative z-10 group animate-glow-pulse"
            style={{
              padding: '4px',
              background: 'linear-gradient(135deg, #fbbf24, #b91c1c, #7f1d1d, #fbbf24)',
              animationDelay: '0.5s',
            }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-yellow-50">
              <DeityImage
                src="/ganeshji.png"
                alt="Ganesha"
                fallbackText="Ganesha"
              />
            </div>
          </div>
          <span className="text-red-900 font-bold text-base mt-3 font-heading drop-shadow-md bg-yellow-100/90 px-5 py-1.5 rounded-full border border-red-800/20 shadow-sm">श्री गणेशाय नमः</span>
        </div>

        {/* Radha Krishna */}
        <div className="flex flex-col items-center group">
          <div
            className="w-24 h-24 md:w-30 md:h-30 rounded-full shadow-xl overflow-hidden bg-yellow-100 relative animate-glow-pulse"
            style={{ padding: '3px', background: 'linear-gradient(135deg, #fbbf24, #b91c1c, #fbbf24)', animationDelay: '1s' }}
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <DeityImage
                src="/radhakrishna.png"
                alt="Radha Krishna"
                fallbackText="Radha Krishna"
              />
            </div>
          </div>
          <span className="text-red-900 font-bold text-sm mt-2.5 font-hindi drop-shadow-sm">राधा कृष्ण</span>
        </div>
      </div>
    </div>
  );
};
