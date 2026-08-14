'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const metadata = [
  { label: 'Клінічний досвід', value: '18+ Років' },
  { label: 'Спеціалізація', value: 'Дерматологія & Дерматоскопія' },
  { label: 'Членство', value: 'EADV' },
  { label: 'Науковий внесок', value: '40+ Публікацій' },
];

export default function DoctorProfile() {
  return (
    <section id="doctor" className="bg-clinic-bg border-y border-clinic-stone scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-36">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start">

          {/* Left: Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-full lg:w-[45%] shrink-0"
          >
            <div className="relative aspect-[4/5] w-full mx-auto max-w-md lg:max-w-none overflow-hidden [clip-path:polygon(0_0,calc(100%-32px)_0,100%_32px,100%_100%,0_100%)]">
              {/* 45° chamfer accent */}
              <div className="absolute top-0 right-0 w-[32px] h-[32px] bg-[#8E9B8C]/20 [clip-path:polygon(100%_0,100%_100%,0_100%)] z-10 pointer-events-none" />
              <Image
                src="/doctor-portrait.jpg"
                alt="Доктор Олександр Мілер — Медичний директор"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-full lg:w-[55%] flex flex-col justify-center pt-4 lg:pt-10"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.5rem] text-clinic-dark tracking-tight mb-2">
              Д-р Олександр Мілер
            </h2>
            <p className="text-clinic-sage font-serif italic text-lg tracking-wide mb-10">
              Медичний директор, MD, PhD
            </p>

            {/* Compact Metadata Grid */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-8 mb-12 py-6 border-y border-clinic-stone/60">
              {metadata.map((item) => (
                <div key={item.label}>
                  <span className="block text-[0.6rem] tracking-[0.1em] uppercase text-clinic-muted font-sans mb-1">
                    {item.label}
                  </span>
                  <span className="block text-sm font-medium text-clinic-dark tracking-wide">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-6 text-clinic-dark/80 text-[0.95rem] leading-[1.8] font-light max-w-xl">
              <p>
                Доктор Олександр Мілер — сертифікований дерматолог з понад 18 роками
                клінічного та академічного досвіду. Після завершення резидентури
                в Університетській лікарні Цюриха він отримав ступінь PhD з молекулярної
                дерматології в Мюнхенському університеті Людвіга-Максиміліана.
              </p>
              <p>
                Його клінічна філософія базується на поєднанні суворої діагностичної
                методології з пацієнт-орієнтованим підходом. Доктор Мілер переконаний,
                що кожне захворювання шкіри розповідає свою історію — і роль лікаря
                полягає у тому, щоб прочитати її з точністю, емпатією та науковою доброчесністю.
              </p>
            </div>

            {/* Subtle Diagonal Divider */}
            <div className="w-full flex items-center justify-center my-8">
              <div className="w-16 h-[1px] bg-clinic-stone/60 -rotate-45" />
            </div>
            
            {/* Signature or subtle flourish */}
            <div className="mt-10 font-serif italic text-3xl text-clinic-muted/30 pointer-events-none">
              A. Miller
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
