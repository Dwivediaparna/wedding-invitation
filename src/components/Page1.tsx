import React from 'react';
import { motion } from 'motion/react';
import { DecorativeBorder, Garland, MandalaBackground, OrnamentalDivider, CornerLotus } from './Shared';
import { DeitySection } from './DeitySection';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Lotus flower SVG divider ─── */
const LotusDivider = () => (
  <div className="flex items-center justify-center my-4">
    <svg viewBox="0 0 180 28" className="w-44 md:w-56 h-7">
      <defs>
        <linearGradient id="ldLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7f1d1d" stopOpacity="0" />
          <stop offset="50%" stopColor="#7f1d1d" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7f1d1d" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="0" y1="14" x2="65" y2="14" stroke="url(#ldLine)" strokeWidth="1" />
      <line x1="115" y1="14" x2="180" y2="14" stroke="url(#ldLine)" strokeWidth="1" />
      {/* Lotus petals fanned out */}
      <path d="M90 6 Q85 11 82 14 Q85 17 90 20 Q95 17 98 14 Q95 11 90 6Z" fill="#DC2626" opacity="0.45" />
      <path d="M90 8 Q87 12 85 14 Q87 16 90 18 Q93 16 95 14 Q93 12 90 8Z" fill="#DC2626" opacity="0.25" />
      <path d="M78 12 Q83 14 78 16" fill="#b91c1c" opacity="0.2" />
      <path d="M102 12 Q97 14 102 16" fill="#b91c1c" opacity="0.2" />
      <circle cx="90" cy="14" r="2" fill="#F59E0B" />
      {/* Small dots flanking */}
      <circle cx="72" cy="14" r="1" fill="#F59E0B" opacity="0.35" />
      <circle cx="108" cy="14" r="1" fill="#F59E0B" opacity="0.35" />
    </svg>
  </div>
);

/* ─── Shloka Panel ─── */
const ShlokaPanel = () => (
  <div className="max-w-2xl mx-auto mb-3 relative">
    <div
      className="relative rounded-xl px-5 py-5 md:px-7 md:py-6 backdrop-blur-sm overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(127,29,29,0.08), rgba(127,29,29,0.02))',
        border: '1px solid rgba(127,29,29,0.12)',
        boxShadow: '0 4px 20px rgba(127,29,29,0.04)',
      }}
    >
      {/* Tiny corner fleurons */}
      <span className="absolute top-1.5 left-2.5 text-red-800/25 text-sm select-none">❦</span>
      <span className="absolute top-1.5 right-2.5 text-red-800/25 text-sm select-none scale-x-[-1]">❦</span>
      <span className="absolute bottom-1.5 left-2.5 text-red-800/25 text-sm select-none scale-y-[-1]">❦</span>
      <span className="absolute bottom-1.5 right-2.5 text-red-800/25 text-sm select-none scale-[-1]">❦</span>

      <div className="text-red-900 font-hindi space-y-1 italic">
        <p className="text-sm md:text-base font-bold leading-relaxed text-gradient-shining">"-विघ्नेश्वराय वरदाय सुरप्रियाय, लम्बोदराय सकलाय जगद्धिताय ।</p>
        <p className="text-sm md:text-base font-bold leading-relaxed text-gradient-shining">नागाननाय श्रुतियज्ञविभूषिताय, गौरीसुताय गणनाथ नमोस्तुते ॥"</p>
      </div>
      <div className="flex items-center justify-center gap-2 my-3">
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-800/25 to-transparent"></div>
        <span className="text-yellow-600/60 text-[10px]">✦</span>
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-800/25 to-transparent"></div>
      </div>
      <div className="text-red-900 font-hindi space-y-0.5 italic text-xs md:text-sm opacity-80">
        <p>"लम्बोदराय नमस्तुभ्यम् सततं मोदकप्रिय ।</p>
        <p>निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥"</p>
      </div>
    </div>
  </div>
);

/* ─── Couple Name Block ─── */
const CoupleName = ({
  prefix,
  name,
  parents,
  delay,
}: {
  prefix?: string;
  name: string;
  parents: string[];
  delay: number;
}) => (
  <motion.div {...fadeInUp} transition={{ delay, duration: 0.65 }} className="py-3 relative">
    {prefix && (
      <p className="text-lg md:text-xl text-red-800 font-bold font-hindi mb-1 opacity-75">{prefix}</p>
    )}
    <p className="text-[1.7rem] md:text-[2.6rem] font-heading drop-shadow-lg leading-tight text-gradient-shining px-2 mb-2">
      {name}
    </p>
    {/* Jeweled underline */}
    <div className="flex items-center justify-center gap-2 mt-2 mb-3">
      <div className="h-px w-8 md:w-10 bg-gradient-to-r from-transparent to-red-800/35"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-red-700 to-red-900 shadow-sm relative">
        <div className="absolute inset-[3px] rounded-full bg-yellow-400"></div>
      </div>
      <div className="h-px w-8 md:w-10 bg-gradient-to-l from-transparent to-red-800/35"></div>
    </div>
    {parents.map((p, i) => (
      <p key={i} className="text-sm md:text-base text-red-900 font-bold opacity-80 leading-relaxed">{p}</p>
    ))}
  </motion.div>
);

/* ─── Parinay Badge ─── */
const ParinayBadge = () => (
  <motion.div {...fadeInUp} transition={{ delay: 0.5, duration: 0.5 }} className="flex items-center justify-center py-5">
    <div className="h-px bg-gradient-to-r from-transparent via-red-800/50 to-transparent w-16 md:w-24"></div>
    <div className="mx-3 md:mx-5 relative group">
      <div className="absolute inset-0 bg-yellow-400/25 blur-lg rounded-full group-hover:bg-yellow-400/40 transition-colors duration-500"></div>
      <span
        className="relative text-2xl md:text-4xl font-heading text-red-900 px-8 md:px-12 py-2 md:py-3 rounded-full backdrop-blur-md shadow-lg"
        style={{
          background: 'linear-gradient(180deg, rgba(253,224,71,0.35), rgba(245,158,11,0.15))',
          border: '2px solid rgba(127,29,29,0.25)',
        }}
      >
        परिणय
      </span>
    </div>
    <div className="h-px bg-gradient-to-r from-transparent via-red-800/50 to-transparent w-16 md:w-24"></div>
  </motion.div>
);

/* ═══════════════════════════════════
   Page 1 — Main Invitation Card
   ═══════════════════════════════════ */
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

      <div className="relative z-20 w-full mt-14 md:mt-18 px-3">
        {/* ═══ DEITY SHRINE ═══ */}
        <motion.div {...fadeInUp} transition={{ duration: 0.6 }}>
          <DeitySection />
        </motion.div>

        {/* ═══ SHLOKAS ═══ */}
        <motion.div {...fadeInUp} transition={{ delay: 0.15, duration: 0.6 }}>
          <ShlokaPanel />
        </motion.div>

        <OrnamentalDivider />

        {/* ═══ INVITATION BODY ═══ */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-red-950 font-hindi max-w-3xl mx-auto px-1"
        >
          {/* Greeting */}
          <div className="mb-3">
            <p className="text-lg md:text-xl font-bold text-red-800 mb-1.5">शुभेच्छु बंधुवर,</p>
            <p className="text-sm md:text-base leading-relaxed font-medium opacity-90">
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
            delay={0.35}
          />

          <ParinayBadge />

          {/* Groom */}
          <CoupleName
            name="आयुष्मान - दीपक पाण्डेय"
            parents={[
              'सुपौत्र - श्रीमती इंदु लालता प्रसाद पाण्डेय',
              'आत्मज - श्रीमती मंजू अनिल कुमार पाण्डेय',
            ]}
            delay={0.55}
          />

          <LotusDivider />

          {/* ═══ ADDRESS ═══ */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="p-4 md:p-6 rounded-xl my-3 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(127,29,29,0.06), rgba(127,29,29,0.02))',
              border: '1px solid rgba(127,29,29,0.10)',
            }}
          >
            <span
              className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#FFD700] px-4 py-0.5 text-red-900 font-bold text-sm font-hindi rounded-full"
              style={{ border: '1px solid rgba(127,29,29,0.12)' }}
            >
              आवास
            </span>
            <p className="leading-relaxed text-sm md:text-base font-medium text-red-950 mt-2">
              'तिवारी महमदपुर, कमासिन, प्रतापगढ़, उत्तर प्रदेश' के मांगलिक शुभ अवसर पर अपने शुभागमन एवं आशीष से हमें कृतार्थ करें |
            </p>
          </motion.div>

          {/* ═══ FAMILY HEAD ═══ */}
          <motion.div {...fadeInUp} transition={{ delay: 0.75, duration: 0.6 }} className="mt-5 mb-2">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="h-px w-10 bg-red-800/15"></div>
              <span className="text-yellow-600/70 text-xs">🪷</span>
              <div className="h-px w-10 bg-red-800/15"></div>
            </div>
            <p className="text-xl md:text-2xl font-heading drop-shadow-md text-gradient-shining">
              कुलश्रेष्ठ श्री सदाशिव द्विवेदी
            </p>
          </motion.div>
        </motion.div>

        {/* ═══ FOOTER: FAMILY NAMES ═══ */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-10 px-1"
        >
          <OrnamentalDivider />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 md:gap-3 text-[11px] md:text-xs text-red-950 text-left mt-3">
            {[
              { title: 'दर्शनाभिलाषी', icon: '🙏', names: ['श्रीमती रश्मि', 'अजय कु. शुक्ल', 'श्रीमती आभा', 'सतीशचंद्र तिवारी'] },
              { title: 'आभार', icon: '🙏', names: ['श्रीमती विद्यावती', 'इंद्रमणि शुक्ल'] },
              { title: 'स्वागताकांक्षी', icon: '🌺', names: ['डॉ. शिवांगी मिश्रा', 'अनंत भारद्वाज'] },
              { title: 'विनीत', icon: '📍', names: ['डॉ. संध्या द्विवेदी', 'डॉ आशीष द्विवेदी', 'बलीपुर, जगापुर,', 'कुण्डा,', 'प्रतापगढ़ ।', '230204-', 'Ward No:-04', 'नगरपंचायत', 'हीरागंज प्रतापगढ़।'] },
              { title: 'स्नेहाकांक्षी', icon: '❤️', names: ['अरुंधती भारद्वाज', 'आश्रय शुक्ल', 'अस्मिता शुक्ला', 'अभिजात सरारि', 'आराध्या द्विवेदी', 'कृति तिवारी', 'आदित्य शुक्ल', 'अनन्य तिवारी', 'अंशुमन द्विवेदी'] }
            ].map((section, idx) => (
              <div
                key={idx}
                className="rounded-lg p-2.5 hover:shadow-sm transition-shadow duration-300"
                style={{ background: 'rgba(127,29,29,0.03)', border: '1px solid rgba(127,29,29,0.07)' }}
              >
                <div className="flex items-center gap-1 mb-1.5 border-b border-red-800/10 pb-1">
                  <span className="text-[10px]">{section.icon}</span>
                  <p className="font-bold text-red-900 text-xs">{section.title}</p>
                </div>
                <ul className="space-y-0.5 font-medium leading-snug">
                  {section.names.map((name, i) => (
                    <li key={i}>{name}</li>
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
