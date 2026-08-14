'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Send, MessageCircle, Smartphone } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Про клініку', href: '#about' },
  { name: 'Послуги', href: '#services' },
  { name: 'Лікар', href: '#doctor' },
  { name: 'Результати', href: '#results' },
  { name: 'Відгуки', href: '#reviews' },
  { name: 'Контакти', href: '#contact' },
];

const contactChannels = [
  { icon: Phone, label: '+380 44 000 00 00', href: 'tel:+380440000000' },
  { icon: Send, label: 'Telegram', href: 'https://t.me/dermae_clinic' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/380440000000' },
  { icon: Smartphone, label: 'Viber', href: 'viber://chat?number=380440000000' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ─── Contact Top Bar ─── */}
      <div className="hidden md:block w-full bg-clinic-dark text-white/60 z-50 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between py-2">
          <p className="text-[0.65rem] tracking-[0.08em] uppercase font-sans">
            Приватна дерматологічна клініка · м. Київ
          </p>
          <div className="flex items-center gap-5">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  key={channel.label}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[0.65rem] tracking-wide text-white/50 hover:text-white transition-colors duration-200"
                >
                  <Icon className="w-3 h-3" />
                  <span>{channel.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── Main Navigation ─── */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.04)] border-b border-clinic-stone/60 py-3.5'
            : 'bg-clinic-bg/90 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start group">
            <span className="font-serif text-[1.4rem] tracking-[0.04em] text-clinic-dark leading-none transition-colors duration-300 group-hover:text-clinic-sage">
              DERMAÉ
            </span>
            <span className="font-sans text-[0.5rem] tracking-[0.25em] text-clinic-muted mt-0.5 uppercase">
              Clinic
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative font-sans text-[0.7rem] tracking-[0.1em] uppercase font-medium text-clinic-muted hover:text-clinic-dark transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-clinic-sage after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Mobile contact icons */}
            <div className="flex lg:hidden items-center gap-3 mr-2">
              <a href="tel:+380440000000" className="text-clinic-muted hover:text-clinic-sage transition-colors">
                <Phone className="w-4 h-4" />
              </a>
              <a href="https://t.me/dermae_clinic" target="_blank" rel="noopener noreferrer" className="text-clinic-muted hover:text-clinic-sage transition-colors">
                <Send className="w-4 h-4" />
              </a>
            </div>

            <a
              href="#contact"
              className="hidden lg:inline-flex bg-clinic-dark text-white rounded-xl px-7 py-2.5 text-[0.7rem] tracking-[0.08em] uppercase font-medium hover:bg-clinic-sage transition-all duration-400 shadow-sm hover:shadow-md"
            >
              Записатись на прийом
            </a>
            <button
              className="lg:hidden text-clinic-dark p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Відкрити меню"
            >
              {isMobileMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' as const }}
              className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-clinic-stone shadow-xl lg:hidden overflow-hidden"
            >
              <nav className="flex flex-col py-6 px-6 gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 font-sans text-sm tracking-[0.06em] text-clinic-dark hover:text-clinic-sage transition-colors border-b border-clinic-stone/40 last:border-0"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="flex items-center gap-4 pt-4 pb-2">
                  {contactChannels.map((channel) => {
                    const Icon = channel.icon;
                    return (
                      <a
                        key={channel.label}
                        href={channel.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-clinic-muted hover:text-clinic-sage transition-colors"
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{channel.label}</span>
                      </a>
                    );
                  })}
                </div>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center bg-clinic-dark text-white rounded-xl px-6 py-3.5 text-sm tracking-wide font-medium mt-3"
                >
                  Записатись на прийом
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
