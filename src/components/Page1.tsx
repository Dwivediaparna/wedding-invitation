import React from 'react';
import { motion } from 'motion/react';
import { DecorativeBorder, Garland, MandalaBackground, OrnamentalDivider, CornerLotus } from './Shared';
import { DeitySection } from './DeitySection';

const fadeInUp = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
};

// Inline SVG: Lotus flower separator
const LotusSeparator = () => (
  <div className="flex items-center justify-center my-5">
    <svg viewBox="0 0 160 40" className="w-40 md:w-52 h-8">
      <defs>
        <linearGradient id="lotusG" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="30%" stopColor="#991b1b" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#991b1b" stopOpacity="0.6" />
          <stop offset="70%" stopColor="#991b1b" stopOpacity="0.4" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <line x1="0" y1="20" x2="55" y2="20" stroke="url(#lotusG)" strokeWidth="1" />
      <line x1="105" y1="20" x2="160" y2="20" stroke="url(#lotusG)" strokeWidth="1" />
      {/* Center lotus */}
      <path d="M80 10 Q75 16 72 20 Q75 24 80 28 Q85 24 88 20 Q85 16 80 10Z" fill="#DC2626" opacity="0.5" />
      <path d="M70 18 Q74 20 70 22 Q66 20 70 18Z" fill="#DC2626" opacity="0.3" />
      <path d="M90 18 Q86 20 90 22 Q94 20 90 18Z" fill="#DC2626" opacity="0.3" />
      <circle cx="80" cy="20" r="2" fill="#F59E0B" />
      <circle cx="65" cy="20" r="1.2" fill="#F59E0B" opacity="0.4" />
      <circle cx="95" cy="20" r="1.2" fill="#F59E0B" opacity="0.4" />
    </svg>
  </div>
);

// Shloka panel with lotus border
const ShlokaPanel = () => (
  <div className="max-w-2xl mx-auto mb-4 relative">
    <div className="relative bg-gradient-to-b from-red-900/[0.10] via-red-900/[0.04] to-red-900/[0.10] rounded-2xl px-5 py-5 md:px-8 md:py-6 backdrop-blur-sm shadow-[0_4px_30px_rgba(153,27,27,0.06)] overflow-hidden"
      style={{ border: '1.5px solid rgba(153,27,27,0.15)' }}
    >
      {/* Corner ornaments */}
      <div className="absolute top-1 left-1 text-yellow-600/40 text-lg">❦</div>
      <div className="absolute top-1 right-1 text-yellow-600/40 text-lg scale-x-[-1]">❦</div>
      <div className="absolute bottom-1 left-1 text-yellow-600/40 text-lg scale-y-[-1]">❦</div>
      <div className="absolute bottom-1 right-1 text-yellow-600/40 text-lg scale-x-[-1] scale-y-[-1]">❦</div>

      <div className="text-red-900 font-hindi space-y-1.5 italic font-medium">
        <p className="text-base md:text-lg font-bold leading-relaxed drop-shadow-sm text-gradient-shining">"-विघ्नेश्वराय वरदाय सुरप्रियाय, लम्बोदराय सकलाय जगद्धिताय ।</p>
        <p className="text-base md:text-lg font-bold leading-relaxed drop-shadow-sm text-gradient-shining">नागाननाय श्रुतियज्ञविभूषिताय, गौरीसुताय गणनाथ नमोस्तुते ॥"</p>
      </div>
      <div className="flex items-center justify-center gap-2 my-4">
        <div className="w-14 h-px bg-gradient-to-r from-transparent via-red-800/30 to-transparent"></div>
        <span className="text-yellow-600 text-xs animate-pulse opacity-70">✦</span>
        <div className="w-14 h-px bg-gradient-to-r from-transparent via-red-800/30 to-transparent"></div>
      </div>
      <div className="text-red-900 font-hindi space-y-1 italic font-medium text-sm md:text-base opacity-85">
        <p>"लम्बोदराय नमस्तुभ्यम् सततं मोदकप्रिय ।</p>
        <p>निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥"</p>
      </div>
    </div>
  </div>
);

// Couple name block with nested ornaments
const CoupleName = ({
  prefix,
  name,
  parents,
  delay,
}: {
  prefix: string;
  name: string;
  parents: string[];
  delay: number;
}) => (
  <motion.div
    {...fadeInUp}
    transition={{ delay, duration: 0.7 }}
    className="py-3 md:py-5 relative"
  >
    <div className="mb-4 relative">
      <p className="text-lg md:text-xl text-red-800 font-bold font-hindi mb-1 opacity-80">{prefix}</p>
      <p className="text-3xl md:text-[2.8rem] font-heading drop-shadow-lg leading-tight text-gradient-shining px-2">
        {name}
      </p>
      {/* Jeweled underline */}
      <div className="flex items-center justify-center gap-3 mt-4">
        <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-red-800/40"></div>
        <svg viewBox="0 0 20 10" className="w-5 h-2.5">
          <circle cx="10" cy="5" r="4" fill="#DC2626" opacity="0.5" />
          <circle cx="10" cy="5" r="2" fill="#F59E0B" />
        </svg>
        <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-red-800/40"></div>
      </div>
    </div>
    {parents.map((p, i) => (
      <p key={i} className="text-base md:text-lg text-red-900 font-bold opacity-85 leading-relaxed">{p}</p>
    ))}
  </motion.div>
);

export const Page1 = () => {
  return (
    <div className="relative p-3 md:p-6 min-h-[1200px] flex flex-col items-center text-center shadow-2xl rounded-2xl overflow-hidden m-1 md:m-4 bg-[#FFD700]">
      <MandalaBackground />
      <DecorativeBorder />
      <Garland />

      <CornerLotus position="top-left" />
      <CornerLotus position="top-right" />
      <CornerLotus position="bottom-left" />
      <CornerLotus position="bottom-right" />

      <div className="relative z-20 w-full mt-12 md:mt-16 px-2">
        {/* ═══ Deity Shrine ═══ */}
        <motion.div {...fadeInUp} transition={{ duration: 0.6 }}>
          <DeitySection />
        </motion.div>

        {/* ═══ Shlokas ═══ */}
        <motion.div {...fadeInUp} transition={{ delay: 0.15, duration: 0.6 }}>
          <ShlokaPanel />
        </motion.div>

        <OrnamentalDivider />

        {/* ═══ Main Invitation Body ═══ */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-red-950 font-hindi space-y-2 max-w-3xl mx-auto px-2"
        >
          {/* Greeting */}
          <div className="mb-4">
            <p className="text-xl md:text-2xl font-bold text-red-800 mb-2">शुभेच्छु बंधुवर,</p>
            <p className="text-base md:text-lg leading-relaxed font-medium">
              अनंत कोटि ब्रह्माण्ड नायक योगेश्वर भगवान श्री कृष्ण की असीम कृपा करुणा से -
            </p>
          </div>

          {/* Bride */}
          <CoupleName
            prefix="हमारी प्यारी बिटिया रानी"
            name="आयुष्मती - अपर्णा भारद्वाज"
            parents={[
              'सुपौत्री - श्रीमती कुसुमावती देवीशरण द्विवेदी',
              'आत्मजा श्रीमती रीता असीम द्विवेदी',
            ]}
            delay={0.4}
          />

          {/* ═══ Parinay Badge ═══ */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center justify-center py-6"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-red-800/60 to-transparent w-20 md:w-28"></div>
            <div className="mx-4 md:mx-6 relative group">
              <div className="absolute inset-0 bg-yellow-400/30 blur-lg rounded-full group-hover:bg-yellow-400/50 transition-colors"></div>
              <span className="relative text-3xl md:text-4xl font-heading text-red-900 px-12 py-3 rounded-full bg-gradient-to-b from-yellow-300/50 to-yellow-500/25 backdrop-blur-md shadow-xl" style={{ border: '2px solid rgba(127,29,29,0.3)' }}>
                परिणय
              </span>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-red-800/60 to-transparent w-20 md:w-28"></div>
          </motion.div>

          {/* Groom */}
          <CoupleName
            prefix=""
            name="आयुष्मान - दीपक पाण्डेय"
            parents={[
              'सुपौत्र - श्रीमती इंदु लालता प्रसाद पाण्डेय',
              'आत्मज - श्रीमती मंजू अनिल कुमार पाण्डेय',
            ]}
            delay={0.6}
          />

          <LotusSeparator />

          {/* ═══ Address Section ═══ */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="p-5 md:p-7 rounded-2xl my-4 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(127,29,29,0.06), rgba(127,29,29,0.02))', border: '1px solid rgba(127,29,29,0.12)' }}
          >
            {/* Floating label */}
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFD700] px-5 text-red-900 font-bold text-lg font-hindi rounded-full" style={{ border: '1px solid rgba(127,29,29,0.15)' }}>आवास</span>
            <p className="leading-relaxed text-base md:text-lg font-medium text-red-950 mt-3">
              'तिवारी महमदपुर, कमासिन, प्रतापगढ़, उत्तर प्रदेश' के मांगलिक शुभ अवसर पर अपने शुभागमन एवं आशीष से हमें कृतार्थ करें |
            </p>
          </motion.div>

          {/* ═══ Family Head ═══ */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-6 mb-2"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-12 bg-red-800/20"></div>
              <span className="text-yellow-600 text-sm">🪷</span>
              <div className="h-px w-12 bg-red-800/20"></div>
            </div>
            <p className="text-2xl md:text-3xl font-heading drop-shadow-md text-gradient-shining">
              कुलश्रेष्ठ श्री सदाशिव द्विवेदी
            </p>
          </motion.div>
        </motion.div>

        {/* ═══ Footer: Family Names Grid ═══ */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12 pt-6 px-2 relative"
        >
          <OrnamentalDivider />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 text-xs md:text-sm text-red-950 text-left mt-4">
            {[
              { title: 'दर्शनाभिलाषी', icon: '🙏', names: ['श्रीमती रश्मि', 'अजय कु. शुक्ल', 'श्रीमती आभा', 'सतीशचंद्र तिवारी'] },
              { title: 'आभार', icon: '🙏', names: ['श्रीमती विद्यावती', 'इंद्रमणि शुक्ल'] },
              { title: 'स्वागताकांक्षी', icon: '🌺', names: ['डॉ. शिवांगी मिश्रा', 'अनंत भारद्वाज'] },
              { title: 'विनीत', icon: '📍', names: ['डॉ. संध्या द्विवेदी', 'डॉ आशीष द्विवेदी', 'बलीपुर, जगापुर,', 'कुण्डा,', 'प्रतापगढ़ ।', '230204-', 'Ward No:-04', 'नगरपंचायत', 'हीरागंज प्रतापगढ़।'] },
              { title: 'स्नेहाकांक्षी', icon: '❤️', names: ['अरुंधती भारद्वाज', 'आश्रय शुक्ल', 'अस्मिता शुक्ला', 'अभिजात सरारि', 'आराध्या द्विवेदी', 'कृति तिवारी', 'आदित्य शुक्ल', 'अनन्य तिवारी', 'अंशुमन द्विवेदी'] }
            ].map((section, idx) => (
              <div key={idx} className="rounded-xl p-3 hover:shadow-md transition-all duration-300" style={{ background: 'rgba(127,29,29,0.03)', border: '1px solid rgba(127,29,29,0.08)' }}>
                <div className="flex items-center gap-1.5 mb-2 border-b border-red-800/15 pb-1.5">
                  <span className="text-xs">{section.icon}</span>
                  <p className="font-bold text-red-900 text-sm">{section.title}</p>
                </div>
                <ul className="space-y-0.5 font-medium">
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
