'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const credentials = [
  'Член Європейської академії дерматології та венерології (EADV)',
  'Дипломант Європейської ради з дерматології',
  'Автор 40+ рецензованих наукових публікацій',
  'Сертифікований дерматоскопіст — International Dermoscopy Society',
];

export default function DoctorProfile() {
  return (
    <section id="doctor" className="bg-white border-y border-clinic-stone scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-stretch">

          {/* Left: Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[40%] shrink-0"
          >
            <div className="relative aspect-[3/4] lg:h-full w-full max-w-sm mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-[0_16px_50px_-10px_rgba(0,0,0,0.1)]">
              <Image
                src="/doctor-portrait.jpg"
                alt="Доктор Олександр Мілер — Медичний директор"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="w-full lg:w-[60%] flex flex-col justify-center"
          >
            <span className="label-clinical text-clinic-sage">
              Медичний директор
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-clinic-dark mt-3 tracking-tight">
              Доктор Олександр Мілер
            </h2>
            <p className="text-clinic-muted text-sm tracking-wide mt-1.5">
              MD, PhD — Дерматологія та венерологія
            </p>

            <div className="w-16 h-px bg-clinic-sage mt-7 mb-7" />

            <div className="space-y-5 text-clinic-muted text-[0.9375rem] leading-[1.8] body-refined">
              <p>
                Доктор Олександр Мілер — сертифікований дерматолог з понад 18 роками
                клінічного та академічного досвіду в галузі медичної дерматології,
                дерматохірургії та діагностики раку шкіри. Після завершення резидентури
                в Університетській лікарні Цюриха він отримав ступінь PhD з молекулярної
                дерматології в Мюнхенському університеті Людвіга-Максиміліана, спеціалізуючись
                на дослідженні меланоцитарних проліферацій та неінвазивної діагностичної візуалізації.
              </p>
              <p>
                Його клінічна філософія базується на поєднанні суворої діагностичної
                методології з пацієнт-орієнтованим підходом. Доктор Мілер переконаний,
                що кожне захворювання шкіри розповідає свою історію — і роль дерматолога
                полягає у тому, щоб прочитати її з точністю, емпатією та науковою доброчесністю.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-9">
              <ul className="flex flex-col gap-3.5">
                {credentials.map((credential, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-[3px] shrink-0 w-5 h-5 rounded-md bg-clinic-sage/10 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-clinic-sage" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm text-clinic-dark font-medium leading-snug">
                      {credential}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
