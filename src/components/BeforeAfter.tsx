'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const cases = [
  {
    title: 'Тяжке кістозне акне',
    description:
      'Комбінований протокол ізотретиноїну з ад\u0027юнктивними хімічними пілінгами та LED-фототерапією. Пацієнт досяг повної ремісії після структурованого 24-тижневого курсу лікування.',
    duration: '24 тижні',
    imgBefore: '/acne-before.jpg',
    imgAfter: '/acne-after.jpg',
    featured: true,
  },
  {
    title: 'Мелазма та гіперпігментація',
    description:
      'Таргетна депігментаційна терапія з використанням транексамової кислоти. Видиме покращення на 16-му тижні.',
    duration: '16 тижнів',
    imgBefore: '/melasma-before.jpg',
    imgAfter: '/melasma-after.jpg',
    featured: false,
  },
  {
    title: 'Постзапальне рубцювання',
    description:
      'Мультимодальний підхід: мікронідлінг та PRP-терапія. Прогресивне покращення текстури.',
    duration: '12 сеансів',
    imgBefore: '/scars-before.jpg',
    imgAfter: '/scars-after.jpg',
    featured: false,
  },
];

export default function BeforeAfter() {
  const featuredCase = cases.find(c => c.featured);
  const secondaryCases = cases.filter(c => !c.featured);

  return (
    <section id="results" className="py-24 lg:py-36 bg-white scroll-mt-32 border-y border-clinic-stone">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <span className="uppercase tracking-[0.2em] text-[0.65rem] font-medium text-clinic-sage font-sans mb-4 block">
              Клінічні результати
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-clinic-dark tracking-tight">
              Задокументований прогрес
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-clinic-muted text-xs uppercase tracking-[0.1em] max-w-[200px] text-right hidden md:block"
          >
            Демонстраційні випадки.<br/>Результати індивідуальні.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Featured Case */}
          {featuredCase && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
              className="lg:col-span-7 flex flex-col group relative"
            >
              <div className="flex w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] bg-clinic-bg mb-6 relative overflow-hidden [clip-path:polygon(0_0,100%_0,100%_calc(100%-24px),calc(100%-24px)_100%,0_100%)]">
                <div className="absolute top-0 right-0 w-[24px] h-[24px] bg-clinic-stone/20 [clip-path:polygon(100%_0,100%_100%,0_100%)] z-10" />
                <div className="w-1/2 relative border-r border-white/20">
                  <Image src={featuredCase.imgBefore} alt="До" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-clinic-dark">До</span>
                </div>
                <div className="w-1/2 relative">
                  <Image src={featuredCase.imgAfter} alt="Після" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-clinic-dark">Після</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="max-w-md">
                  <h3 className="font-serif text-2xl text-clinic-dark mb-3">{featuredCase.title}</h3>
                  <p className="text-clinic-muted text-sm leading-[1.7] font-light">
                    {featuredCase.description}
                  </p>
                </div>
                <span className="shrink-0 text-clinic-sage font-serif italic text-lg border-b border-clinic-sage/30 pb-1">
                  {featuredCase.duration}
                </span>
              </div>
            </motion.div>
          )}

          {/* Secondary Cases */}
          <div className="lg:col-span-5 flex flex-col gap-12 pt-4 lg:pt-0">
            {secondaryCases.map((c, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.9, delay: 0.15 + (idx * 0.1), ease: [0.16, 1, 0.3, 1] as const }}
                className="flex flex-col group"
              >
                <div className="flex w-full aspect-[2/1] bg-clinic-bg mb-5 relative overflow-hidden border border-[#171918]/10 [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)]">
                  {/* Chamfer accent */}
                  <div className="absolute top-0 right-0 w-[16px] h-[16px] bg-clinic-stone/30 [clip-path:polygon(100%_0,100%_100%,0_100%)] z-10 pointer-events-none" />
                  <div className="w-1/2 relative border-r border-white/20">
                    <Image src={c.imgBefore} alt="До" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 text-[9px] uppercase tracking-[0.2em] font-medium text-clinic-dark">До</span>
                  </div>
                  <div className="w-1/2 relative">
                    <Image src={c.imgAfter} alt="Після" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 text-[9px] uppercase tracking-[0.2em] font-medium text-clinic-dark">Після</span>
                  </div>
                </div>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-serif text-lg text-clinic-dark">{c.title}</h3>
                  <span className="text-clinic-sage text-xs tracking-wide">{c.duration}</span>
                </div>
                <p className="text-clinic-muted text-xs leading-[1.6] font-light max-w-sm">
                  {c.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
        
        {/* Mobile Disclaimer */}
        <p className="text-clinic-muted text-[0.65rem] uppercase tracking-[0.1em] text-center mt-12 md:hidden">
          Демонстраційні випадки. Результати індивідуальні.
        </p>
      </div>
    </section>
  );
}
