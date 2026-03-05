import React from 'react';
import { motion } from 'motion/react';
import { DecorativeBorder, Garland, MandalaBackground, OrnamentalDivider, CornerLotus } from './Shared';
import { DeitySection } from './DeitySection';

const fadeInUp = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
};

export const Page1 = () => {
  return (
    <div className="relative p-3 md:p-6 min-h-[1200px] flex flex-col items-center text-center shadow-2xl rounded-2xl overflow-hidden m-1 md:m-4 bg-[#FFD700]">
      <MandalaBackground />
      <DecorativeBorder />
      <Garland />

      {/* Corner lotus decorations */}
      <CornerLotus position="top-left" />
      <CornerLotus position="top-right" />
      <CornerLotus position="bottom-left" />
      <CornerLotus position="bottom-right" />

      <div className="relative z-20 w-full mt-12 md:mt-16 px-2">
        {/* Deity Section */}
        <motion.div {...fadeInUp} transition={{ duration: 0.6 }}>
          <DeitySection />
        </motion.div>

        {/* Shlokas — in an elegant card */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="max-w-2xl mx-auto mb-6 relative"
        >
          <div className="bg-gradient-to-b from-red-900/[0.08] to-red-900/[0.02] border border-red-800/15 rounded-2xl px-6 py-6 backdrop-blur-sm shadow-[0_4px_20px_rgba(153,27,27,0.05)]">
            <div className="text-red-900 font-hindi space-y-1.5 italic font-medium">
              <p className="text-base md:text-lg font-bold leading-relaxed drop-shadow-sm text-gradient-shining">"-विघ्नेश्वराय वरदाय सुरप्रियाय, लम्बोदराय सकलाय जगद्धिताय ।</p>
              <p className="text-base md:text-lg font-bold leading-relaxed drop-shadow-sm text-gradient-shining">नागाननाय श्रुतियज्ञविभूषिताय, गौरीसुताय गणनाथ नमोस्तुते ॥"</p>
            </div>
            <div className="flex items-center justify-center gap-2 my-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-800/30 to-transparent"></div>
              <span className="text-yellow-600 text-xs animate-pulse opacity-70">✦</span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-800/30 to-transparent"></div>
            </div>
            <div className="text-red-900 font-hindi space-y-1 italic font-medium text-sm md:text-base opacity-90">
              <p>"लम्बोदराय नमस्तुभ्यम् सततं मोदकप्रिय ।</p>
              <p>निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥"</p>
            </div>
          </div>
        </motion.div>

        <OrnamentalDivider />

        {/* Greeting */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-red-950 font-hindi space-y-4 max-w-3xl mx-auto px-2"
        >
          <div className="mb-6">
            <p className="text-xl md:text-2xl font-bold text-red-800 mb-2">शुभेच्छु बंधुवर,</p>
            <p className="text-base md:text-lg leading-relaxed font-medium">
              अनंत कोटि ब्रह्माण्ड नायक योगेश्वर भगवान श्री कृष्ण की असीम कृपा करुणा से -
            </p>
          </div>

          {/* ——— Bride Section ——— */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="py-4 relative"
          >
            {/* Bride name — large and prominent */}
            <div className="mb-4 relative">
              <p className="text-3xl md:text-[2.8rem] font-heading drop-shadow-md leading-tight mb-3 text-gradient-shining px-4">
                हमारी प्यारी बिटिया रानी<br />आयुष्मती - अपर्णा भारद्वाज
              </p>
              {/* Underline ornament */}
              <div className="flex items-center justify-center gap-3 mt-4">
                <div className="h-px w-10 bg-gradient-to-r from-transparent to-red-800/40"></div>
                <span className="text-yellow-600 text-sm animate-pulse">✦</span>
                <div className="h-px w-10 bg-gradient-to-l from-transparent to-red-800/40"></div>
              </div>
            </div>
            <p className="text-base md:text-lg text-red-900 font-bold opacity-90">सुपौत्री - श्रीमती कुसुमावती देवीशरण द्विवेदी</p>
            <p className="text-base md:text-lg text-red-900 font-bold opacity-90">आत्मजा श्रीमती रीता असीम द्विवेदी</p>
          </motion.div>

          {/* ——— Parinay (Marriage) Divider ——— */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center justify-center py-8"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-red-800/60 to-transparent w-24 md:w-32"></div>
            <div className="mx-4 md:mx-6 relative group">
              <div className="absolute inset-0 bg-yellow-400/30 blur-md rounded-full group-hover:bg-yellow-400/50 transition-colors"></div>
              <span className="relative text-3xl md:text-4xl font-heading text-red-900 px-10 py-3 rounded-full bg-gradient-to-b from-yellow-300/40 to-yellow-500/20 backdrop-blur-md shadow-lg" style={{ border: '2px solid rgba(127,29,29,0.3)' }}>
                परिणय
              </span>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-red-800/60 to-transparent w-24 md:w-32"></div>
          </motion.div>

          {/* ——— Groom Section ——— */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="py-4 relative"
          >
            <div className="mb-4 relative">
              <p className="text-3xl md:text-[2.8rem] font-heading drop-shadow-md leading-tight mb-3 text-gradient-shining px-4">
                आयुष्मान - दीपक पाण्डेय
              </p>
              <div className="flex items-center justify-center gap-3 mt-4">
                <div className="h-px w-10 bg-gradient-to-r from-transparent to-red-800/40"></div>
                <span className="text-yellow-600 text-sm animate-pulse">✦</span>
                <div className="h-px w-10 bg-gradient-to-l from-transparent to-red-800/40"></div>
              </div>
            </div>
            <p className="text-base md:text-lg text-red-900 font-bold opacity-90">सुपौत्र - श्रीमती इंदु लालता प्रसाद पाण्डेय</p>
            <p className="text-base md:text-lg text-red-900 font-bold opacity-90">आत्मज - श्रीमती मंजू अनिल कुमार पाण्डेय</p>
          </motion.div>

          <OrnamentalDivider />

          {/* Address Section */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="p-5 md:p-7 rounded-2xl my-4 bg-red-900/[0.04] border border-red-800/10 backdrop-blur-sm relative"
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFD700] px-4 text-red-900 font-bold text-lg font-hindi">आवास</span>
            <p className="leading-relaxed text-base md:text-lg font-medium text-red-950 mt-2">
              'तिवारी महमदपुर, कमासिन, प्रतापगढ़, उत्तर प्रदेश' के मांगलिक शुभ अवसर पर अपने शुभागमन एवं आशीष से हमें कृतार्थ करें |
            </p>
          </motion.div>

          {/* Family Head */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="h-px w-12 bg-red-800/20"></div>
              <span className="text-yellow-600 text-xs">🪷</span>
              <div className="h-px w-12 bg-red-800/20"></div>
            </div>
            <p className="text-2xl md:text-3xl font-heading text-red-900 font-bold drop-shadow-sm">
              कुलश्रेष्ठ श्री सदाशिव द्विवेदी
            </p>
          </motion.div>
        </motion.div>

        {/* ——— Footer: Family Names Grid ——— */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-14 border-t-2 border-red-800/15 pt-8 px-2"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-xs md:text-sm text-red-950 text-left">
            {[
              { title: 'दर्शनाभिलाषी', icon: '🙏', names: ['श्रीमती रश्मि', 'अजय कु. शुक्ल', 'श्रीमती आभा', 'सतीशचंद्र तिवारी'] },
              { title: 'आभार', icon: '🙏', names: ['श्रीमती विद्यावती', 'इंद्रमणि शुक्ल'] },
              { title: 'स्वागताकांक्षी', icon: '🌺', names: ['डॉ. शिवांगी मिश्रा', 'अनंत भारद्वाज'] },
              { title: 'विनीत', icon: '📍', names: ['डॉ. संध्या द्विवेदी', 'डॉ आशीष द्विवेदी', 'बलीपुर, जगापुर,', 'कुण्डा,', 'प्रतापगढ़ ।', '230204-', 'Ward No:-04', 'नगरपंचायत', 'हीरागंज प्रतापगढ़।'] },
              { title: 'स्नेहाकांक्षी', icon: '❤️', names: ['अरुंधती भारद्वाज', 'आश्रय शुक्ल', 'अस्मिता शुक्ला', 'अभिजात सरारि', 'आराध्या द्विवेदी', 'कृति तिवारी', 'आदित्य शुक्ल', 'अनन्य तिवारी', 'अंशुमन द्विवेदी'] }
            ].map((section, idx) => (
              <div key={idx} className="bg-red-900/[0.03] rounded-xl p-3 border border-red-800/8 hover:border-red-800/15 transition-colors">
                <div className="flex items-center gap-1.5 mb-2.5 border-b border-red-800/15 pb-1.5">
                  <span className="text-xs">{section.icon}</span>
                  <p className="font-bold text-red-900 text-sm">{section.title}</p>
                </div>
                <ul className="space-y-1 font-medium">
                  {section.names.map((name, i) => (
                    <li key={i} className="leading-snug">{name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
