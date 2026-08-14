'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const imageWrapVariants = {
    hidden: { clipPath: 'inset(100% 0 0 0)' },
    visible: {
      clipPath: 'inset(0% 0 0 0)',
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const imageScaleVariants = {
    hidden: { scale: 1.05 },
    visible: {
      scale: 1,
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="hero" className="w-full bg-clinic-bg pt-12 pb-24 lg:pt-24 lg:pb-36 scroll-mt-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-8">
        
        {/* ─── Left: Editorial Text ─── */}
        <motion.div
          className="w-full lg:w-[50%] flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block text-clinic-sage text-[0.65rem] tracking-[0.2em] uppercase font-sans font-medium mb-10 border-b border-clinic-sage/30 pb-2">
              Приватна дерматологічна клініка
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl lg:text-[4rem] text-clinic-dark leading-[1.05] tracking-tight"
          >
            Експертна
            <br />
            дерматологія.
          </motion.h1>
          
          <motion.h2
            variants={itemVariants}
            className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-clinic-sage leading-[1.1] tracking-tight mt-2 italic"
          >
            Доказова медицина.
          </motion.h2>

          <motion.div variants={itemVariants} className="w-12 h-[1px] bg-clinic-dark/20 mt-10 mb-8" />

          <motion.p
            variants={itemVariants}
            className="text-clinic-muted text-[0.95rem] lg:text-[1.05rem] leading-[1.8] max-w-[420px] font-light"
          >
            У клініці DERMAÉ кожна консультація починається з ретельної клінічної
            оцінки. Доктор Олександр Мілер поєднує понад 18 років діагностичного
            досвіду з передовими технологіями для розробки точних, індивідуальних протоколів.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 bg-clinic-dark text-white rounded-none px-8 py-4 text-[0.75rem] tracking-[0.1em] uppercase font-medium hover:bg-clinic-sage transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-sage focus-visible:ring-offset-2"
            >
              Записатись на прийом
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-1.5 text-clinic-dark text-[0.75rem] tracking-[0.05em] uppercase font-medium hover:text-clinic-sage transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-sage focus-visible:ring-offset-2 px-2 py-1 rounded-sm"
            >
              Наші послуги
            </a>
          </motion.div>
        </motion.div>

        {/* ─── Right: Doctor Portrait with Image Reveal ─── */}
        <motion.div
          className="w-full lg:w-[42%] relative flex justify-end"
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={imageWrapVariants}
            className="relative w-[90%] sm:w-[80%] lg:w-full aspect-[3/4] overflow-hidden"
          >
            <motion.div variants={imageScaleVariants} className="w-full h-full relative">
              <Image
                src="/doctor-portrait.jpg"
                alt="Доктор Олександр Мілер"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-black/5 mix-blend-overlay pointer-events-none" />
            </motion.div>
          </motion.div>

          {/* Minimal Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
            className="absolute bottom-8 -left-4 sm:left-4 lg:-left-12 bg-white/90 backdrop-blur-md p-4 lg:p-6 max-w-[200px]"
          >
            <span className="block w-4 h-px bg-clinic-sage mb-3" />
            <span className="text-[0.65rem] tracking-[0.15em] uppercase text-clinic-dark font-medium block leading-relaxed">
              Медичний директор
            </span>
            <span className="text-[0.65rem] tracking-wide text-clinic-muted mt-1 block font-serif italic">
              MD, PhD
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
