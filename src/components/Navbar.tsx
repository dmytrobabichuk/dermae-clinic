'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Про клініку', href: '#about' },
  { name: 'Послуги', href: '#services' },
  { name: 'Лікар', href: '#doctor' },
  { name: 'Результати', href: '#results' },
  { name: 'Відгуки', href: '#reviews' },
  { name: 'Контакти', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and handle ESC key when mobile menu is open
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* ─── Scroll Progress Bar ─── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-clinic-sage origin-left z-[60]"
        style={{ scaleX }}
      />

      <header className="sticky top-0 z-40 w-full">
        {/* ─── Main Navigation ─── */}
        <div
          className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] w-full ${
            isScrolled
              ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_24px_rgba(0,0,0,0.04)] border-b border-clinic-stone/50 py-3.5'
              : 'bg-clinic-bg/95 backdrop-blur-sm py-5 border-b border-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex flex-col items-start group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-sage focus-visible:ring-offset-4 rounded-sm relative z-50"
            >
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
                  className="relative font-sans text-[0.7rem] tracking-[0.1em] uppercase font-medium text-clinic-muted hover:text-clinic-dark transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-clinic-sage after:transition-all after:duration-300 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-sage focus-visible:ring-offset-4 rounded-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden lg:inline-flex bg-clinic-dark text-white rounded-xl px-7 py-2.5 text-[0.7rem] tracking-[0.08em] uppercase font-medium hover:bg-clinic-sage transition-all duration-400 shadow-sm hover:shadow-md shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-sage focus-visible:ring-offset-4"
            >
              Записатись на прийом
            </a>

            {/* Mobile: Hamburger only */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-clinic-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-sage rounded-md z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
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
                    <X size={26} strokeWidth={1.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={26} strokeWidth={1.5} />
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
              className="fixed inset-0 h-screen w-screen z-40 lg:hidden"
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute inset-0 bg-white/95 backdrop-blur-2xl"
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full pt-32 pb-10 px-8 pointer-events-none">
                {/* Nav Links — centered */}
                <nav className="flex-1 flex flex-col items-center justify-center gap-2 pointer-events-auto">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ delay: 0.06 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-4 font-serif text-2xl tracking-[0.02em] text-clinic-dark hover:text-clinic-sage transition-colors duration-200 text-center"
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
                    className="mt-8"
                  >
                    <a
                      href="#contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="inline-flex bg-clinic-dark text-white rounded-xl px-10 py-4 text-sm tracking-wide font-medium shadow-xl shadow-clinic-dark/10"
                    >
                      Записатись на прийом
                    </a>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ─── Floating CTA (Appears on Scroll) ─── */}
      <AnimatePresence>
        {isScrolled && (
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            className="fixed bottom-6 right-6 z-50 bg-clinic-dark text-white rounded-2xl px-6 py-3.5 text-[0.75rem] tracking-[0.08em] uppercase font-medium hover:bg-clinic-sage transition-colors duration-300 shadow-2xl flex items-center gap-2 lg:hidden"
          >
            Записатися
          </motion.a>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isScrolled && (
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            className="hidden lg:flex fixed bottom-8 right-8 z-50 bg-clinic-dark text-white rounded-2xl px-7 py-4 text-[0.75rem] tracking-[0.08em] uppercase font-medium hover:bg-clinic-sage transition-colors duration-300 shadow-2xl items-center gap-2 group"
          >
            Записатися на прийом
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
}
