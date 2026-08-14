'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'М. Гартманн',
    initials: 'МГ',
    treatment: 'Клінічна дерматологія',
    quote:
      'Після років хибних діагнозів та неефективних призначень, доктор Мілер визначив мій стан вже під час першої консультації. Його системний підхід і щира увага до деталей кардинально змінили ситуацію. Моя шкіра ніколи не була в кращому стані.',
  },
  {
    name: 'С. Еверетт',
    initials: 'СЕ',
    treatment: 'Лікування акне',
    quote:
      'Комплексний протокол лікування акне змінив не лише стан моєї шкіри, а й впевненість у собі. Доктор Мілер приділив час поясненню кожного етапу плану лікування та коригував його залежно від реакції організму. Результати говорять самі за себе.',
  },
  {
    name: 'Л. Дюбуа',
    initials: 'ЛД',
    treatment: 'Дерматоскопія',
    quote:
      "Я прийшла стурбована підозрілою родимкою. Ретельне дерматоскопічне обстеження доктора Мілера та його спокійне, чітке пояснення одразу мене заспокоїли. Система цифрового картування означає, що тепер я маю задокументовану впевненість у здоров\u0027і своєї шкіри.",
  },
];

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
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-clinic-bg py-24 lg:py-32 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="block text-clinic-sage uppercase tracking-[0.15em] text-[0.65rem] font-semibold font-sans mb-4">
            Відгуки пацієнтів
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-clinic-dark tracking-tight">
            Що кажуть наші пацієнти
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl border border-clinic-stone/60 p-8 lg:p-9 flex flex-col h-full shadow-[0_2px_20px_-6px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_-12px_rgba(142,155,140,0.15)] transition-shadow duration-500"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-clinic-sage/70 text-clinic-sage/70"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="font-serif text-5xl text-clinic-sage/20 leading-none mb-2 select-none">
                &ldquo;
              </div>
              <p className="text-clinic-muted text-[0.875rem] leading-[1.8] flex-grow">
                {testimonial.quote}
              </p>

              {/* Divider */}
              <div className="w-10 h-px bg-clinic-stone mt-7 mb-5" />

              {/* Author */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 shrink-0 rounded-full bg-clinic-sage/10 text-clinic-sage text-[0.65rem] font-semibold flex items-center justify-center tracking-wide">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-clinic-dark text-sm font-medium">
                    {testimonial.name}
                  </div>
                  <div className="text-clinic-muted text-[0.7rem] mt-0.5 tracking-wide">
                    {testimonial.treatment}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
