'use client';

import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Клінічна дерматологія',
    desc: 'Комплексна діагностика та лікування гострих та хронічних захворювань шкіри, включаючи акне, розацеа, екзему та псоріаз.',
  },
  {
    num: '02',
    title: 'Дерматоскопія та скринінг',
    desc: 'Прецизійне цифрове картування родимок та раннє виявлення меланоми за допомогою оптичних технологій високої роздільної здатності.',
  },
  {
    num: '03',
    title: 'Дерматохірургія',
    desc: 'Мікрографічні та ексцизійні методи видалення доброякісних та злоякісних утворень шкіри з мінімальним рубцюванням.',
  },
  {
    num: '04',
    title: 'Естетична медицина',
    desc: 'Доказові антивікові протоколи, включаючи лазерну терапію, ін\u0027єкційні методики та лікування рубців і гіперпігментації.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-36 bg-white scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Header Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-full lg:w-[35%] shrink-0"
          >
            <div className="sticky top-40">
              <span className="uppercase tracking-[0.2em] text-[0.65rem] font-medium text-clinic-sage font-sans mb-6 block">
                Спеціалізація
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-clinic-dark leading-[1.15] tracking-tight mb-6">
                Комплексний підхід до здоров&#39;я шкіри
              </h2>
              <p className="text-clinic-muted text-[0.95rem] leading-[1.8] font-light max-w-sm">
                Кожна дисципліна у нашій клініці спирається на найвищі стандарти
                доказової медицини. Ми не пропонуємо шаблонів — лише точні,
                науково обґрунтовані рішення.
              </p>
            </div>
          </motion.div>

          {/* Asymmetric List Area */}
          <div className="w-full lg:w-[65%] flex flex-col gap-12 lg:gap-16 pt-8 lg:pt-0">
            {services.map((service, idx) => (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.9, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] as const }}
                className={`flex flex-col sm:flex-row items-start gap-6 sm:gap-10 group relative pb-12 lg:pb-16 border-b border-clinic-stone/40 last:border-0 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(23,25,24,0.04)] ${
                  idx % 2 !== 0 ? 'sm:ml-12 lg:ml-24' : ''
                }`}
              >
                {/* Diagonal reveal on hover */}
                <div className="absolute left-0 top-6 w-0 h-[1px] bg-clinic-sage/40 -rotate-45 origin-left group-hover:w-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] opacity-0 group-hover:opacity-100 pointer-events-none hidden sm:block" />
                
                <div className="text-clinic-sage/30 font-serif text-5xl md:text-6xl font-light leading-none group-hover:text-clinic-sage group-hover:-translate-y-1 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  {service.num}
                </div>
                <div className="flex-1 mt-1 sm:mt-2">
                  <h3 className="font-serif text-xl md:text-2xl text-clinic-dark mb-4 group-hover:translate-x-2 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    {service.title}
                  </h3>
                  <p className="text-clinic-muted text-sm leading-[1.8] font-light max-w-md">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
