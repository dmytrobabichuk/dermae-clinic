import { Phone, Send, MessageCircle, Smartphone, MapPin, Mail, Clock } from 'lucide-react';

const footerNavLinks = [
  { name: 'Про клініку', href: '#about' },
  { name: 'Послуги', href: '#services' },
  { name: 'Лікар', href: '#doctor' },
  { name: 'Результати', href: '#results' },
  { name: 'Відгуки', href: '#reviews' },
  { name: 'Контакти', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#111312] text-white/70 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* ─── Column 1: Clinic Identity ─── */}
          <div className="lg:col-span-1 flex flex-col">
            <div className="mb-6">
              <div className="font-serif text-xl text-white tracking-[0.04em]">DERMAÉ</div>
              <div className="text-[0.55rem] tracking-[0.25em] font-medium uppercase text-white/30 mt-0.5">
                Clinic
              </div>
            </div>
            <p className="text-[0.8rem] text-white/40 leading-relaxed mb-6">
              Приватна дерматологічна клініка з фокусом на доказову діагностику та індивідуальні протоколи лікування.
            </p>
            <div className="flex items-center gap-3">
              <a href="tel:+380440000000" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white transition-all duration-300">
                <Phone className="w-3.5 h-3.5" />
              </a>
              <a href="https://t.me/dermae_clinic" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white transition-all duration-300">
                <Send className="w-3.5 h-3.5" />
              </a>
              <a href="https://wa.me/380440000000" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white transition-all duration-300">
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
              <a href="viber://chat?number=380440000000" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white transition-all duration-300">
                <Smartphone className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* ─── Column 2: Contact Details ─── */}
          <div className="flex flex-col">
            <h3 className="text-white text-[0.7rem] font-medium tracking-[0.12em] uppercase mb-5">
              Контактна інформація
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-clinic-sage/60 mt-0.5 shrink-0" />
                <div>
                  <p className="text-[0.8rem] text-white/50 leading-relaxed">
                    вул. Хрещатик 42, оф. 301
                  </p>
                  <p className="text-[0.8rem] text-white/50">
                    01001, м. Київ, Україна
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-clinic-sage/60 shrink-0" />
                <a href="tel:+380440000000" className="text-[0.8rem] text-white/50 hover:text-white transition-colors">
                  +380 44 000 00 00
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-clinic-sage/60 shrink-0" />
                <a href="mailto:info@dermae-clinic.com.ua" className="text-[0.8rem] text-white/50 hover:text-white transition-colors">
                  info@dermae-clinic.com.ua
                </a>
              </div>
            </div>
          </div>

          {/* ─── Column 3: Working Hours ─── */}
          <div className="flex flex-col">
            <h3 className="text-white text-[0.7rem] font-medium tracking-[0.12em] uppercase mb-5">
              Графік прийому
            </h3>
            <div className="flex flex-col gap-2.5 text-[0.8rem] text-white/50">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-clinic-sage/60 shrink-0" />
                <span>Пн–Пт: 08:30 — 18:00</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 shrink-0" />
                <span>Сб: 09:00 — 14:00</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 shrink-0" />
                <span>Нд: Вихідний</span>
              </div>
            </div>
            <p className="text-white/30 text-[0.7rem] mt-4 italic leading-relaxed">
              Екстрені консультації — за попереднім узгодженням
            </p>
          </div>

          {/* ─── Column 4: Navigation ─── */}
          <div className="flex flex-col">
            <h3 className="text-white text-[0.7rem] font-medium tracking-[0.12em] uppercase mb-5">
              Навігація
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerNavLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-[0.8rem] text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ─── Divider ─── */}
        <div className="h-px bg-white/8 my-10" />

        {/* ─── Bottom: Legal ─── */}
        <div className="flex flex-col gap-4">
          <p className="text-[0.65rem] text-white/25 leading-[1.8] max-w-4xl">
            Цей вебсайт має виключно інформаційний характер і не є медичною консультацією
            чи рекомендацією до лікування. Усі медичні послуги надаються після проведення
            очної клінічної оцінки лікарем. Індивідуальні результати лікування можуть
            відрізнятися. DERMAÉ Clinic здійснює медичну діяльність відповідно до
            законодавства України про медичну практику та у повній відповідності до
            стандартів захисту персональних даних.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="text-[0.65rem] text-white/25">
              © 2026 DERMAÉ CLINIC. Усі права захищено.
            </p>
            <p className="text-[0.65rem] text-white/25">
              Ліцензія МОЗ України № 000000
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
