'use client';

import { motion } from 'framer-motion';

const philosophyPoints = [
  {
    num: '01',
    title: 'Доказова медицина',
    desc: 'Ми спираємося виключно на доказові клінічні протоколи та міжнародно визнані настанови у кожному клінічному рішенні.',
  },
  {
    num: '02',
    title: 'Індивідуальний протокол',
    desc: 'Кожен пацієнт — це унікальна клінічна історія. Лікуємо першопричину змін шкіри, а не просто маскуємо зовнішні прояви.',
  },
  {
    num: '03',
    title: 'Довгостроковий результат',
    desc: 'Збереження природної архітектури, бар\u02bcєрних функцій та стійкого клінічного здоров\u02bcя шкіри на роки.',
  },
];

export default function Philosophy() {
  return (
    <section id="about" className="w-full bg-[#171918] text-white py-28 lg:py-36 scroll-mt-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">

        {/* Заголовок та цитата */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="max-w-3xl flex flex-col items-center mb-20"
        >
          <span className="uppercase tracking-[0.25em] text-[0.65rem] font-medium text-[#8E9B8C] font-sans mb-6 block">
            Наша філософія
          </span>

          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.25rem] leading-[1.12] tracking-tight text-white mb-8">
            Точність понад усе.
            <br />
            <span className="text-white/60 italic font-normal">Особиста увага завжди.</span>
          </h2>

          {/* Витончений діагональний роздільник */}
          <div className="w-12 h-[1px] bg-[#8E9B8C]/40 -rotate-45 my-4" />

          <p className="text-white/70 text-[0.95rem] lg:text-[1.05rem] leading-[1.8] font-light max-w-2xl mt-4">
            У клініці DERMAÉ ми поєднуємо доказову дерматологію з підкреслено
            персоналізованим підходом. Ми переконані, що високі медичні
            стандарти вимагають не лише технологічної досконалості, але й
            етичної емпатії.
          </p>
        </motion.div>

        {/* 3 стовпи філософії */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full max-w-5xl text-left border-t border-white/10 pt-16">
          {philosophyPoints.map((point, idx) => (
            <motion.div
              key={point.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] as const }}
              className="flex flex-col p-6 bg-white/[0.02] border border-white/5 hover:border-[#8E9B8C]/30 transition-colors duration-300 relative [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)]"
            >
              {/* Accent corner geometry */}
              <div className="absolute top-0 right-0 w-[10px] h-[10px] bg-[#8E9B8C]/15 [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-[#8E9B8C] font-serif text-2xl italic font-light">{point.num}</span>
                <h3 className="font-sans text-[0.75rem] tracking-[0.14em] uppercase text-white font-medium">
                  {point.title}
                </h3>
              </div>
              <p className="text-white/55 text-[0.85rem] leading-[1.7] font-light">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}