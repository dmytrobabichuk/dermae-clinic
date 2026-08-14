'use client';

import { motion } from 'framer-motion';

const metrics = [
  { value: '15+', label: 'Років клінічної практики' },
  { value: '14 000+', label: 'Консультацій пацієнтів' },
  { value: '99%', label: 'Точність діагностики' },
  { value: '3', label: 'Європейські сертифікації' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function TrustBar() {
  return (
    <section className="border-y border-clinic-stone bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 lg:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={itemVariants}
              className={`text-center flex flex-col items-center justify-center ${
                index !== metrics.length - 1 ? 'md:border-r border-clinic-stone' : ''
              }`}
            >
              <h3 className="font-serif text-3xl lg:text-4xl text-clinic-dark tracking-tight">
                {metric.value}
              </h3>
              <p className="text-clinic-muted text-[0.6rem] tracking-[0.12em] uppercase font-sans mt-2.5 max-w-[140px]">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
