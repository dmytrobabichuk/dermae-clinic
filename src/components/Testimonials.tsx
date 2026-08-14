'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'М. Гартманн',
    treatment: 'Клінічна дерматологія',
    quote:
      'Після років хибних діагнозів, доктор Мілер визначив мій стан вже під час першої консультації. Його системний підхід і щира увага до деталей кардинально змінили ситуацію.',
  },
  {
    name: 'С. Еверетт',
    treatment: 'Лікування акне',
    quote:
      'Комплексний протокол лікування змінив не лише стан моєї шкіри, а й впевненість у собі. Лікар приділив час поясненню кожного етапу. Результати говорять самі за себе.',
  },
  {
    name: 'Л. Дюбуа',
    treatment: 'Дерматоскопія',
    quote:
      'Я прийшла стурбована підозрілою родимкою. Ретельне обстеження та спокійне пояснення одразу мене заспокоїли. Тепер я маю задокументовану впевненість у здоров\u0027ї шкіри.',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-clinic-bg py-24 lg:py-36 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="uppercase tracking-[0.2em] text-[0.65rem] font-medium text-clinic-sage font-sans mb-4 block">
            Відгуки пацієнтів
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-clinic-dark tracking-tight">
            Довіра, побудована на результатах
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.9, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] as const }}
              className="flex flex-col items-center text-center relative"
            >
              {/* Elegant Quotation Mark */}
              <div className="text-clinic-stone font-serif text-7xl leading-none absolute -top-8 -z-10 select-none">
                &ldquo;
              </div>
              
              <p className="text-clinic-dark/80 text-[0.95rem] leading-[1.85] font-light mb-8 italic relative z-10 px-2">
                {t.quote}
              </p>
              
              <div className="mt-auto flex flex-col items-center">
                <span className="font-serif text-lg text-clinic-dark mb-1">
                  {t.name}
                </span>
                <span className="text-[0.65rem] tracking-[0.1em] uppercase text-clinic-muted font-medium">
                  {t.treatment}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
