'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section id="hero" className="w-full bg-clinic-bg pt-12 pb-20 lg:pt-20 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-14 lg:gap-16">

        {/* ─── Left: Editorial Text ─── */}
        <motion.div
          className="w-full lg:w-[58%] flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block bg-clinic-sage/10 text-clinic-sage border border-clinic-sage/20 rounded-full px-5 py-1.5 text-[0.6rem] tracking-[0.15em] uppercase font-sans font-medium mb-8">
              Приватна дерматологія та діагностика
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-[2.2rem] md:text-5xl lg:text-[3.4rem] text-clinic-dark leading-[1.08] tracking-tight"
          >
            Експертна дерматологія.
            <br />
            <span className="text-clinic-sage">Доказова медицина</span> для
            <br className="hidden md:block" />
            {' '}здоров&#39;я вашої шкіри.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-clinic-muted text-[0.95rem] lg:text-[1.05rem] leading-[1.75] max-w-lg mt-7"
          >
            У клініці DERMAÉ кожна консультація починається з ретельної клінічної
            оцінки. Доктор Олександр Мілер поєднує понад 18 років діагностичного
            досвіду з передовими технологіями дерматоскопії для розробки точних,
            індивідуальних протоколів лікування.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-clinic-dark text-white rounded-xl px-8 py-3.5 text-sm tracking-wide font-medium hover:bg-clinic-dark/85 hover:shadow-lg transition-all duration-300 shadow-sm"
            >
              Записатись на прийом
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-1.5 text-clinic-dark text-sm tracking-wide font-medium hover:text-clinic-sage transition-colors duration-300"
            >
              Наші послуги
              <span className="text-lg leading-none">&rarr;</span>
            </a>
          </motion.div>
        </motion.div>

        {/* ─── Right: Doctor Portrait ─── */}
        <motion.div
          className="w-full lg:w-[42%] relative"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_60px_-12px_rgba(0,0,0,0.12)]">
            <Image
              src="/doctor-portrait.jpg"
              alt="Доктор Олександр Мілер, сертифікований дерматолог"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>

          {/* Floating credential badge */}
          <div className="absolute -bottom-4 left-4 sm:left-6 lg:-left-6 bg-white rounded-xl shadow-xl border border-clinic-stone/60 px-5 py-3.5 z-10">
            <span className="text-[0.65rem] tracking-[0.08em] uppercase text-clinic-muted font-sans font-medium block">
              Сертифікований дерматолог
            </span>
            <span className="text-[0.6rem] tracking-[0.06em] text-clinic-sage font-sans mt-0.5 block">
              MD, PhD · 18+ років досвіду
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
