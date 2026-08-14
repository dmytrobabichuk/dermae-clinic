'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function AppointmentCTA() {
  return (
    <section id="contact" className="w-full bg-[#171918] text-white py-24 lg:py-32 scroll-mt-32">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center w-full"
        >
          <span className="text-clinic-sage-light text-[0.6rem] tracking-[0.2em] font-medium uppercase">
            Розпочніть вашу консультацію
          </span>

          <h2 className="font-serif text-3xl md:text-4xl text-white mt-5 max-w-2xl mx-auto text-center tracking-tight leading-tight">
            Здоров&#39;я вашої шкіри заслуговує на повну клінічну увагу
          </h2>

          <p className="text-white/65 text-[0.95rem] max-w-xl mx-auto text-center mt-6 leading-relaxed">
            Кожна первинна консультація у клініці DERMAÉ — це виділені 45 хвилин
            особистого прийому з доктором Мілером. Без поспіху. Без ротації лікарів.
            Один лікар. Один пацієнт. Одна зосереджена зустріч.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 bg-white text-clinic-dark px-10 py-4 text-sm tracking-wide font-medium hover:bg-clinic-sage-light hover:text-white transition-all duration-300 mt-10 shadow-lg hover:shadow-xl relative [clip-path:polygon(0_0,100%_0,100%_calc(100%-14px),calc(100%-14px)_100%,0_100%)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              Записатись на прийом
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute top-0 right-0 w-[16px] h-[16px] bg-clinic-dark/5 [clip-path:polygon(100%_0,100%_100%,0_100%)] group-hover:bg-black/10 transition-colors" />
          </a>

          <p className="text-white/35 text-[0.65rem] tracking-[0.06em] mt-5">
            Відповідь зазвичай протягом 24 годин · Тільки приватні консультації
          </p>
        </motion.div>
      </div>
    </section>
  );
}
