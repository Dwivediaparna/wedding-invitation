import React from 'react';
import { motion } from 'motion/react';
import { DecorativeBorder, Garland, MandalaBackground, OrnamentalDivider, CornerLotus } from './Shared';
import { DeitySection } from './DeitySection';

const fadeInUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

/* ─── SVG Icon Components ─── */
const KalashIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none">
    <path d="M12 2C10.5 2 9 3 9 5L8 8H16L15 5C15 3 13.5 2 12 2Z" fill="#D4A017" opacity="0.8" />
    <rect x="7" y="8" width="10" height="2" rx="0.5" fill="#991B1B" opacity="0.7" />
    <path d="M7 10L8.5 20H15.5L17 10" fill="#991B1B" opacity="0.4" />
    <ellipse cx="12" cy="20" rx="4" ry="1.5" fill="#991B1B" opacity="0.5" />
    <path d="M10 4C10 4 11 1 12 1C13 1 14 4 14 4" stroke="#228B22" strokeWidth="0.8" fill="none" opacity="0.6" />
    <circle cx="12" cy="1.5" r="0.8" fill="#228B22" opacity="0.5" />
  </svg>
);

const SwastikIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size}>
    <g fill="#991B1B" opacity="0.6">
      <rect x="10.5" y="4" width="3" height="16" rx="0.5" />
      <rect x="4" y="10.5" width="16" height="3" rx="0.5" />
      <rect x="13.5" y="4" width="6" height="2.5" rx="0.5" />
      <rect x="4" y="4" width="2.5" height="6" rx="0.5" />
      <rect x="4" y="17.5" width="6" height="2.5" rx="0.5" />
      <rect x="17.5" y="14" width="2.5" height="6" rx="0.5" />
    </g>
  </svg>
);

/* ─── Lotus Flower SVG Divider ─── */
const LotusDivider = () => (
  <div className="flex items-center justify-center my-3">
    <svg viewBox="0 0 200 28" className="w-48 md:w-60 h-7">
      <defs>
        <linearGradient id="ldLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6B1010" stopOpacity="0" />
          <stop offset="50%" stopColor="#6B1010" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#6B1010" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="0" y1="14" x2="72" y2="14" stroke="url(#ldLine)" strokeWidth="0.8" />
      <line x1="128" y1="14" x2="200" y2="14" stroke="url(#ldLine)" strokeWidth="0.8" />
      <path d="M100 5 Q94 10 91 14 Q94 18 100 21 Q106 18 109 14 Q106 10 100 5Z" fill="#991B1B" opacity="0.3" />
      <path d="M100 8 Q96 11 94 14 Q96 17 100 19 Q104 17 106 14 Q104 11 100 8Z" fill="#991B1B" opacity="0.18" />
      <path d="M86 11 Q92 14 86 17" fill="#991B1B" opacity="0.15" />
      <path d="M114 11 Q108 14 114 17" fill="#991B1B" opacity="0.15" />
      <circle cx="100" cy="14" r="2" fill="#D4A017" />
      <circle cx="80" cy="14" r="1" fill="#D4A017" opacity="0.3" />
      <circle cx="120" cy="14" r="1" fill="#D4A017" opacity="0.3" />
    </svg>
  </div>
);

/* ─── Decorative Section Label ─── */
const SectionLabel = ({ text }: { text: string }) => (
  <div className="flex items-center justify-center gap-2 mb-3">
    <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-red-800/25" />
    <span
      className="px-4 py-1 text-red-900 font-bold text-sm font-hindi rounded-full"
      style={{
        background: 'linear-gradient(180deg, rgba(212,160,23,0.15), rgba(212,160,23,0.05))',
        border: '1px solid rgba(107,16,16,0.1)',
      }}
    >
      {text}
    </span>
    <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-red-800/25" />
  </div>
);

/* ─── Shloka Section ─── */
const ShlokaPanel = () => (
  <div className="max-w-2xl mx-auto mb-2 relative">
    <div
      className="relative rounded-xl px-4 py-4 md:px-6 md:py-5"
      style={{
        background: 'linear-gradient(180deg, rgba(107,16,16,0.06), rgba(107,16,16,0.015))',
        border: '1px solid rgba(107,16,16,0.1)',
        boxShadow: '0 2px 12px rgba(107,16,16,0.03)',
      }}
    >
      {/* Corner ornaments */}
      <span className="absolute top-1.5 left-2 text-amber-700/20 text-sm select-none">❦</span>
      <span className="absolute top-1.5 right-2 text-amber-700/20 text-sm select-none scale-x-[-1]">❦</span>
      <span className="absolute bottom-1.5 left-2 text-amber-700/20 text-sm select-none scale-y-[-1]">❦</span>
      <span className="absolute bottom-1.5 right-2 text-amber-700/20 text-sm select-none scale-[-1]">❦</span>

      <div className="text-red-900 font-hindi space-y-0.5 italic">
        <p className="text-sm md:text-base font-bold leading-relaxed text-gradient-shining">"-विघ्नेश्वराय वरदाय सुरप्रियाय, लम्बोदराय सकलाय जगद्धिताय ।</p>
        <p className="text-sm md:text-base font-bold leading-relaxed text-gradient-shining">नागाननाय श्रुतियज्ञविभूषिताय, गौरीसुताय गणनाथ नमोस्तुते ॥"</p>
      </div>
      <div className="flex items-center justify-center gap-2 my-2.5">
        <div className="w-10 h-px bg-gradient-to-r from-transparent via-red-800/20 to-transparent" />
        <SwastikIcon size={12} />
        <div className="w-10 h-px bg-gradient-to-r from-transparent via-red-800/20 to-transparent" />
      </div>
      <div className="text-red-900 font-hindi space-y-0.5 italic text-xs md:text-sm opacity-75">
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
  <motion.div {...fadeInUp} transition={{ delay, duration: 0.6 }} className="py-2.5 relative">
    {prefix && (
      <p className="text-base md:text-lg text-red-800 font-bold font-hindi mb-1 opacity-70">{prefix}</p>
    )}
    <p className="text-[1.5rem] md:text-[2.3rem] font-heading drop-shadow-md leading-tight px-1 mb-1.5" style={{
      background: 'linear-gradient(180deg, #5C0A0A 0%, #8B1A1A 50%, #5C0A0A 100%)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
    }}>
      {name}
    </p>
    {/* Decorative underline with kalash */}
    <div className="flex items-center justify-center gap-1.5 mt-1.5 mb-2.5">
      <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-red-800/30" />
      <KalashIcon size={14} />
      <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-red-800/30" />
    </div>
    {parents.map((p, i) => (
      <p key={i} className="text-sm md:text-base text-red-900 font-bold opacity-75 leading-relaxed">{p}</p>
    ))}
  </motion.div>
);

/* ─── Parinay (Wedding) Badge ─── */
const ParinayBadge = () => (
  <motion.div {...fadeInUp} transition={{ delay: 0.5, duration: 0.5 }} className="flex items-center justify-center py-4">
    <div className="h-px bg-gradient-to-r from-transparent via-red-800/40 to-transparent w-14 md:w-20" />
    <div className="mx-3 md:mx-4 relative group">
      <div className="absolute inset-0 bg-yellow-400/20 blur-lg rounded-full" />
      <span
        className="relative text-xl md:text-3xl font-heading text-red-900 px-6 md:px-10 py-2 md:py-2.5 rounded-full backdrop-blur-sm shadow-lg"
        style={{
          background: 'linear-gradient(180deg, rgba(253,224,71,0.3), rgba(212,160,23,0.12))',
          border: '2px solid rgba(107,16,16,0.2)',
          boxShadow: '0 0 15px rgba(212,160,23,0.15), 0 4px 12px rgba(0,0,0,0.05)',
        }}
      >
        परिणय
      </span>
    </div>
    <div className="h-px bg-gradient-to-r from-transparent via-red-800/40 to-transparent w-14 md:w-20" />
  </motion.div>
);

/* ─── Top "शुभ विवाह" Header Banner ─── */
const ShubhVivahBanner = () => (
  <motion.div
    {...fadeInUp}
    transition={{ duration: 0.5 }}
    className="flex items-center justify-center gap-2 mt-12 md:mt-16 mb-3"
  >
    <svg viewBox="0 0 60 20" className="w-10 h-5 text-red-900 opacity-40">
      <path d="M0 10 Q15 3 30 10 Q45 17 60 10" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M5 10 Q15 5 30 10 Q45 15 55 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
    </svg>
    <div className="flex items-center gap-2">
      <SwastikIcon size={18} />
      <span
        className="text-lg md:text-xl font-heading px-4 py-0.5 rounded-full"
        style={{
          background: 'linear-gradient(180deg, rgba(107,16,16,0.08), rgba(107,16,16,0.03))',
          border: '1px solid rgba(107,16,16,0.12)',
          color: '#6B1010',
        }}
      >
        शुभ विवाह
      </span>
      <SwastikIcon size={18} />
    </div>
    <svg viewBox="0 0 60 20" className="w-10 h-5 text-red-900 opacity-40 scale-x-[-1]">
      <path d="M0 10 Q15 3 30 10 Q45 17 60 10" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M5 10 Q15 5 30 10 Q45 15 55 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  </motion.div>
);

/* ─── Family Section Card ─── */
const FamilyCard = ({ title, icon, names }: { title: string; icon: React.ReactNode; names: string[] }) => (
  <div
    className="rounded-lg p-2.5 transition-all duration-300 hover:shadow-sm"
    style={{
      background: 'linear-gradient(135deg, rgba(107,16,16,0.03), rgba(212,160,23,0.03))',
      border: '1px solid rgba(107,16,16,0.06)',
    }}
  >
    <div className="flex items-center gap-1.5 mb-1.5 border-b border-red-800/8 pb-1">
      {icon}
      <p className="font-bold text-red-900 text-xs">{title}</p>
    </div>
    <ul className="space-y-0.5 font-medium leading-snug text-[11px] md:text-xs text-red-950">
      {names.map((name, i) => (
        <li key={i}>{name}</li>
      ))}
    </ul>
  </div>
);

/* ─── Small SVG Icons for family sections ─── */
const PrayerIcon = () => (
  <svg viewBox="0 0 16 16" width="12" height="12"><path d="M8 2L6 6L2 8L6 10L8 14L10 10L14 8L10 6Z" fill="#D4A017" opacity="0.7" /></svg>
);
const FlowerIcon = () => (
  <svg viewBox="0 0 16 16" width="12" height="12"><circle cx="8" cy="8" r="3" fill="#DC2626" opacity="0.5" /><circle cx="8" cy="8" r="1.5" fill="#D4A017" opacity="0.7" /></svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 16 16" width="12" height="12"><path d="M8 1C5.5 1 3.5 3 3.5 5.5C3.5 9 8 15 8 15C8 15 12.5 9 12.5 5.5C12.5 3 10.5 1 8 1Z" fill="#991B1B" opacity="0.5" /><circle cx="8" cy="5.5" r="2" fill="#D4A017" opacity="0.6" /></svg>
);
const HeartIcon = () => (
  <svg viewBox="0 0 16 16" width="12" height="12"><path d="M8 14C8 14 1 9 1 5C1 3 2.5 1 4.5 1C6 1 7.5 2.5 8 3.5C8.5 2.5 10 1 11.5 1C13.5 1 15 3 15 5C15 9 8 14 8 14Z" fill="#DC2626" opacity="0.5" /></svg>
);

/* ═══════════════════════════════════
   Page 1 — Main Invitation Card
   ═══════════════════════════════════ */
export const Page1 = () => {
  return (
    <div
      className="relative p-3 md:p-5 min-h-[1200px] flex flex-col items-center text-center shadow-2xl rounded-xl overflow-hidden m-1 md:m-4"
      style={{
        background: 'linear-gradient(180deg, #F5E1B0 0%, #EDCF8E 12%, #F2D99E 35%, #EDCF8E 55%, #E8C87A 78%, #F0D89E 100%)',
        boxShadow: '0 8px 40px rgba(107,16,16,0.12), 0 2px 10px rgba(0,0,0,0.08)',
      }}
    >
      <MandalaBackground />
      <DecorativeBorder />
      <Garland />

      <CornerLotus position="top-left" />
      <CornerLotus position="top-right" />
      <CornerLotus position="bottom-left" />
      <CornerLotus position="bottom-right" />

      <div className="relative z-20 w-full px-3">
        {/* ═══ SHUBH VIVAH HEADER ═══ */}
        <ShubhVivahBanner />

        {/* ═══ DEITY SHRINE ═══ */}
        <motion.div {...fadeInUp} transition={{ delay: 0.1, duration: 0.6 }}>
          <DeitySection />
        </motion.div>

        {/* ═══ SHLOKAS ═══ */}
        <motion.div {...fadeInUp} transition={{ delay: 0.2, duration: 0.6 }}>
          <ShlokaPanel />
        </motion.div>

        <OrnamentalDivider />

        {/* ═══ INVITATION BODY ═══ */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-red-950 font-hindi max-w-3xl mx-auto px-1"
        >
          {/* Greeting */}
          <div className="mb-2">
            <p className="text-lg md:text-xl font-bold text-red-800 mb-1">शुभेच्छु बंधुवर,</p>
            <p className="text-sm md:text-base leading-relaxed font-medium opacity-85">
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
            className="my-4"
          >
            <SectionLabel text="आवास" />
            <div
              className="p-4 md:p-5 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(107,16,16,0.05), rgba(107,16,16,0.015))',
                border: '1px solid rgba(107,16,16,0.08)',
                boxShadow: '0 2px 8px rgba(107,16,16,0.02)',
              }}
            >
              <p className="leading-relaxed text-sm md:text-base font-medium text-red-950">
                'तिवारी महमदपुर, कमासिन, प्रतापगढ़, उत्तर प्रदेश' के मांगलिक शुभ अवसर पर अपने शुभागमन एवं आशीष से हमें कृतार्थ करें |
              </p>
            </div>
          </motion.div>

          {/* ═══ FAMILY HEAD ═══ */}
          <motion.div {...fadeInUp} transition={{ delay: 0.75, duration: 0.6 }} className="mt-4 mb-2">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="h-px w-8 bg-red-800/12" />
              <KalashIcon size={16} />
              <div className="h-px w-8 bg-red-800/12" />
            </div>
            <p className="text-xl md:text-2xl font-heading drop-shadow-md" style={{
              background: 'linear-gradient(180deg, #5C0A0A, #8B1A1A, #5C0A0A)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}>
              कुलश्रेष्ठ श्री सदाशिव द्विवेदी
            </p>
          </motion.div>
        </motion.div>

        {/* ═══ FOOTER: FAMILY NAMES ═══ */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-8 px-1"
        >
          <OrnamentalDivider />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-2.5 mt-3">
            <FamilyCard title="दर्शनाभिलाषी" icon={<PrayerIcon />} names={['श्रीमती रश्मिअजय कु. शुक्ल', 'श्रीमती आभासतीशचंद्र तिवारी']} />
            <FamilyCard title="आभार" icon={<PrayerIcon />} names={['श्रीमती विद्यावतीइंद्रमणि शुक्ल']} />
            <FamilyCard title="स्वागताकांक्षी" icon={<FlowerIcon />} names={['डॉ. शिवांगी मिश्रा', 'अनंत भारद्वाज']} />
            <FamilyCard title="विनीत" icon={<PinIcon />} names={['डॉ. संध्या द्विवेदी', 'डॉ आशीष द्विवेदी', 'बलीपुर, जगापुर,', 'कुण्डा,', 'प्रतापगढ़ ।', '230204-', 'Ward No:-04', 'नगरपंचायत', 'हीरागंज प्रतापगढ़।']} />
            <FamilyCard title="स्नेहाकांक्षी" icon={<HeartIcon />} names={['अरुंधती भारद्वाज', 'आश्रय शुक्ल', 'अस्मिता शुक्ला', 'अभिजात सरारि', 'आराध्या द्विवेदी', 'कृति तिवारी', 'आदित्य शुक्ल', 'अनन्य तिवारी', 'अंशुमन द्विवेदी']} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
