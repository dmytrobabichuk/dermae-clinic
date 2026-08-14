'use client';

import { motion } from 'framer-motion';

const cases = [
  {
    title: 'Тяжке кістозне акне',
    description:
      'Комбінований протокол ізотретиноїну з ад\u0027юнктивними хімічними пілінгами та LED-фототерапією. Пацієнт досяг повної ремісії після структурованого 24-тижневого курсу лікування.',
    duration: '24 тижні',
  },
  {
    title: 'Мелазма та гіперпігментація',
    description:
      'Таргетна депігментаційна терапія з використанням транексамової кислоти медичного класу, модифікованої формули Клігмана та суворої фотопротекції. Видиме покращення задокументовано на 16-му тижні.',
    duration: '16 тижнів',
  },
  {
    title: 'Постзапальне рубцювання',
    description:
      'Мультимодальний підхід, що поєднує фракційний мікронідлінг, PRP-терапію та силіконовий менеджмент рубців. Прогресивне покращення текстури шкіри протягом 12 сеансів.',
    duration: '12 сеансів',
  },
];

export default function BeforeAfter() {
  return (
    <section id="results" className="py-24 lg:py-32 bg-clinic-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="uppercase tracking-[0.15em] text-[0.65rem] font-medium text-clinic-sage font-sans">
              Клінічні результати
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-clinic-dark mt-4 tracking-tight">
              Задокументовані результати лікування
            </h2>
            <p className="text-clinic-muted text-sm mt-3 italic">
              Демонстраційні клінічні випадки. Індивідуальні результати можуть відрізнятися.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {cases.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white border border-clinic-stone/70 rounded-2xl overflow-hidden group hover:shadow-[0_8px_40px_-12px_rgba(142,155,140,0.18)] hover:border-clinic-sage/30 transition-all duration-500 flex flex-col"
            >
              <div className="flex w-full">
                <div className="w-1/2 bg-gradient-to-br from-clinic-sage/15 to-clinic-sage/5 aspect-[3/4] flex items-center justify-center border-r border-clinic-stone/50">
                  <span className="uppercase tracking-[0.2em] text-[10px] font-medium text-clinic-muted">До</span>
                </div>
                <div className="w-1/2 bg-gradient-to-br from-clinic-sage/10 to-clinic-bg aspect-[3/4] flex items-center justify-center">
                  <span className="uppercase tracking-[0.2em] text-[10px] font-medium text-clinic-muted">Після</span>
                </div>
              </div>

              <div className="p-6 lg:p-7 flex flex-col flex-grow">
                <h3 className="font-serif text-lg text-clinic-dark mb-2 tracking-tight">{c.title}</h3>
                <p className="text-clinic-muted text-[0.8rem] leading-[1.7] flex-grow mb-4">
                  {c.description}
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center px-3.5 py-1.5 bg-clinic-bg text-clinic-dark text-[0.7rem] rounded-lg border border-clinic-stone/60 font-medium tracking-wide">
                    Тривалість: {c.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
