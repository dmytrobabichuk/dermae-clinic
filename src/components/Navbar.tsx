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
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 left-0 right-0 z-50">

      {/* ─── Contact Top-Bar (desktop only, collapses on scroll) ─── */}
      <motion.div
        initial={false}
        animate={{
          height: isScrolled ? 0 : 'auto',
          opacity: isScrolled ? 0 : 1,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="hidden lg:block bg-clinic-dark text-white/60 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between py-2">
          <p className="text-[0.6rem] tracking-[0.1em] uppercase font-sans font-medium text-white/40">
            Приватна дерматологічна клініка · м.&nbsp;Київ
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
                  className="group/icon flex items-center gap-1.5 text-[0.6rem] tracking-wide text-white/45 hover:text-white transition-colors duration-200"
                >
                  <Icon className="w-3 h-3 transition-transform duration-200 group-hover/icon:scale-110" />
                  <span>{channel.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* ─── Main Navigation ─── */}
      <div
        className={`transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_24px_rgba(0,0,0,0.04)] border-b border-clinic-stone/50 py-3.5'
            : 'bg-clinic-bg/90 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex flex-col items-start group shrink-0">
            <span className="font-serif text-[1.4rem] tracking-[0.04em] text-clinic-dark leading-none transition-colors duration-300 group-hover:text-clinic-sage">
              DERMAÉ
            </span>
            <span className="font-sans text-[0.5rem] tracking-[0.25em] text-clinic-muted mt-0.5 uppercase">
              Clinic
            </span>
          </Link>

          {/* Desktop Nav Links */}
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

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden lg:inline-flex bg-clinic-dark text-white rounded-xl px-7 py-2.5 text-[0.7rem] tracking-[0.08em] uppercase font-medium hover:bg-clinic-sage transition-all duration-400 shadow-sm hover:shadow-md shrink-0"
          >
            Записатись на прийом
          </a>

          {/* Mobile: Logo + Hamburger only */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-clinic-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} strokeWidth={1.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} strokeWidth={1.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ─── Mobile Full-Screen Overlay ─── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white/95 backdrop-blur-2xl"
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full pt-24 pb-10 px-8">

              {/* Nav Links — centered */}
              <nav className="flex-1 flex flex-col items-center justify-center gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ delay: 0.06 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 font-sans text-[1.1rem] tracking-[0.04em] text-clinic-dark hover:text-clinic-sage transition-colors duration-200 text-center"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {/* CTA in mobile menu */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ delay: 0.06 * navLinks.length, duration: 0.4 }}
                  className="mt-6"
                >
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-flex bg-clinic-dark text-white rounded-xl px-8 py-3.5 text-sm tracking-wide font-medium"
                  >
                    Записатись на прийом
                  </a>
                </motion.div>
              </nav>

              {/* Contact icons — bottom of overlay */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="flex items-center justify-center gap-6 pt-6 border-t border-clinic-stone/40"
              >
                {contactChannels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <a
                      key={channel.label}
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/icon flex flex-col items-center gap-1.5"
                    >
                      <span className="w-10 h-10 rounded-xl bg-clinic-sage/8 flex items-center justify-center text-clinic-muted transition-all duration-200 group-hover/icon:bg-clinic-sage/15 group-hover/icon:text-clinic-sage group-hover/icon:scale-110">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="text-[0.6rem] tracking-wide text-clinic-muted font-medium">
                        {channel.label}
                      </span>
                    </a>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
