'use client';

import { motion } from 'framer-motion';
import { Stethoscope, Microscope, Sparkles, HeartPulse } from 'lucide-react';

const services = [
  {
    index: '01',
    title: 'Клінічна дерматологія',
    description:
      'Системна діагностика та лікування повного спектру дерматологічних захворювань — від запальних дерматозів та автоімунних розладів до хронічної екземи та псоріазу. Кожен випадок починається з детального анамнезу та структурованого фізикального обстеження.',
    icon: Stethoscope,
  },
  {
    index: '02',
    title: 'Прецизійна дерматоскопія',
    description:
      'Неінвазивний аналіз новоутворень шкіри за допомогою поляризованої дерматоскопії високої роздільної здатності. Цифрове картування забезпечує тривале спостереження за атиповими невусами та раннє виявлення меланоцитарних змін з задокументованою точністю понад 98%.',
    icon: Microscope,
  },
  {
    index: '03',
    title: 'Лікування акне',
    description:
      'Мультифакторні протоколи лікування, спрямовані на гормональні, бактеріальні та запальні механізми акне. Наші програми інтегрують топічні ретиноїди, таргетну антибактеріальну терапію, хімічні пілінги та корекцію способу життя для досягнення стійкої ремісії.',
    icon: Sparkles,
  },
  {
    index: '04',
    title: 'Естетична реабілітація шкіри',
    description:
      'Процедури омолодження на основі доказової медицини: медичні хімічні пілінги, мікронідлінг з факторами росту та фототерапія. Усі протоколи клінічно валідовані та адаптовані до індивідуальної біології шкіри пацієнта.',
    icon: HeartPulse,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-clinic-bg scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-clinic-sage uppercase tracking-[0.15em] text-[0.65rem] font-semibold font-sans">
            Клінічні спеціалізації
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-clinic-dark mt-4 max-w-2xl leading-tight tracking-tight">
            Комплексна діагностична та терапевтична дерматологія
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.index}
                variants={itemVariants}
                className="group relative bg-white border border-clinic-stone/70 rounded-2xl p-8 lg:p-10 overflow-hidden transition-all duration-500 hover:border-clinic-sage/30 hover:shadow-[0_8px_40px_-12px_rgba(142,155,140,0.18)] cursor-default"
              >
                {/* Index watermark */}
                <div className="font-serif text-[4rem] leading-none text-clinic-stone/30 absolute top-5 right-7 transition-colors duration-500 group-hover:text-clinic-sage/15">
                  {service.index}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-clinic-sage/8 flex items-center justify-center mb-6 transition-colors duration-500 group-hover:bg-clinic-sage/15">
                  <Icon className="w-6 h-6 text-clinic-sage stroke-[1.4]" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl text-clinic-dark mb-3 relative z-10 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-clinic-muted text-[0.85rem] leading-[1.75] body-refined relative z-10">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
