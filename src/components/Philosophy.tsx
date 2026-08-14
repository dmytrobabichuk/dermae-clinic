'use client';

import { motion } from 'framer-motion';

const philosophyPoints = [
  {
    num: '01',
    title: 'Доказова медицина',
    desc: 'Жодних компромісів із науковими фактами. Ми використовуємо виключно сертифіковані міжнародні протоколи лікування.',
  },
  {
    num: '02',
    title: 'Індивідуальний підхід',
    desc: 'Кожен пацієнт — це унікальна клінічна історія, яка заслуговує на вичерпну увагу та персоналізовану стратегію.',
  },
  {
    num: '03',
    title: 'Довгостроковий результат',
    desc: 'Ми не просто усуваємо симптоми, а знаходимо першопричину для забезпечення стійкого здоров\u0027я вашої шкіри.',
  },
];

export default function Philosophy() {
  return (
    <section id="about" className="bg-clinic-dark text-white py-28 lg:py-36 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
          className="max-w-3xl flex flex-col items-center"
        >
          <span className="uppercase tracking-[0.2em] text-[0.65rem] font-medium text-clinic-sage-light font-sans mb-8">
            Наша філософія
          </span>
          
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight mb-8">
            Точність понад усе.
            <br />
            <span className="text-white/60">Особиста увага завжди.</span>
          </h2>
          
          <p className="text-white/70 text-[0.95rem] lg:text-[1.1rem] leading-[1.8] font-sans max-w-2xl font-light mb-20">
            У клініці DERMAÉ ми поєднуємо доказову дерматологію з підкреслено
            персоналізованим підходом. Ми переконані, що високі медичні
            стандарти вимагають не лише технологічної досконалості, але й
            етичної емпатії.
          </p>
        </motion.div>

        {/* ─── Editorial Metadata Points ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl text-left border-t border-white/10 pt-16">
          {philosophyPoints.map((point, idx) => (
            <motion.div
              key={point.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.9, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] as const }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-clinic-sage-light font-serif text-xl italic">{point.num}</span>
                <span className="text-white/30 font-light">|</span>
                <h3 className="font-sans text-[0.8rem] tracking-[0.1em] uppercase font-medium">{point.title}</h3>
              </div>
              <p className="text-white/50 text-sm leading-[1.7] font-light">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
