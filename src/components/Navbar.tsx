'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Logo from '@/components/Logo';

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

  // Handle smooth scrolling for hash links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
        // Update URL without reloading
        window.history.pushState(null, '', href);
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      {/* ─── Scroll Progress Bar ─── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1.5px] bg-clinic-sage origin-left z-[60] pointer-events-none"
        style={{ scaleX }}
      />

      <header className="sticky top-0 z-40 w-full transition-colors duration-500">
        {/* ─── Main Navigation ─── */}
        <div
          className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] w-full ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_16px_rgba(0,0,0,0.03)] border-b border-clinic-stone/40 py-4'
              : 'bg-clinic-bg/90 backdrop-blur-sm py-6 border-b border-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              aria-label="DERMAÉ Clinic Головна"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-sage focus-visible:ring-offset-4 rounded-sm relative z-50"
            >
              <Logo variant="dark" />
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="relative font-sans text-[0.7rem] tracking-[0.1em] uppercase font-medium text-clinic-muted hover:text-clinic-dark transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-clinic-sage after:transition-all after:duration-300 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-sage focus-visible:ring-offset-4 rounded-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden lg:inline-flex bg-clinic-dark text-white px-7 py-2.5 text-[0.7rem] tracking-[0.08em] uppercase font-medium hover:bg-clinic-sage transition-all duration-400 shadow-sm shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-sage focus-visible:ring-offset-4 relative [clip-path:polygon(0_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] group overflow-hidden"
            >
              <span className="relative z-10">Записатись на прийом</span>
              <div className="absolute top-0 right-0 w-[12px] h-[12px] bg-white/10 [clip-path:polygon(100%_0,100%_100%,0_100%)] group-hover:bg-white/20 transition-colors" />
            </a>

            {/* Mobile: Hamburger only */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-clinic-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-sage rounded-md z-40"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Відкрити меню"
            >
              <Menu size={26} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile Full-Screen Overlay ─── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 h-screen w-screen z-[70] lg:hidden overflow-hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-white/95 backdrop-blur-2xl z-0"
              aria-hidden="true"
            />

            {/* Close Button */}
            <button
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-clinic-dark z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-sage rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Закрити меню"
            >
              <X size={28} strokeWidth={1.2} />
            </button>

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full pt-32 pb-safe-bottom px-8 pointer-events-none">
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
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="block py-4 font-serif text-[1.65rem] tracking-[0.02em] text-clinic-dark hover:text-clinic-sage transition-colors duration-200 text-center"
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
                  className="mt-10"
                >
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-flex bg-clinic-dark text-white px-10 py-4 text-[0.8rem] tracking-wide font-medium shadow-xl shadow-clinic-dark/5 relative [clip-path:polygon(0_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)]"
                  >
                    Записатись на прийом
                  </a>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Floating CTA (Appears on Scroll) ─── */}
      <AnimatePresence>
        {isScrolled && !isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 pointer-events-none"
          >
            <a
              href="#contact"
              className="pointer-events-auto group relative flex items-center justify-center gap-3 bg-[#F7F5F0] text-[#171918] px-6 py-3.5 lg:px-7 lg:py-4 text-[0.72rem] tracking-[0.12em] uppercase font-medium transition-all duration-400 hover:bg-[#8E9B8C] hover:text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] border border-[#171918]/10 hover:border-transparent [clip-path:polygon(0_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%)] overflow-hidden"
            >
              {/* Акцентний кутовий зріз 45° */}
              <div className="absolute top-0 right-0 w-[14px] h-[14px] bg-[#171918]/10 group-hover:bg-white/20 transition-colors [clip-path:polygon(100%_0,100%_100%,0_100%)] pointer-events-none" />

              <span className="relative z-10 hidden sm:inline-flex items-center gap-2">
                Записатися на прийом
                <span className="w-1.5 h-1.5 rounded-full bg-[#8E9B8C] group-hover:bg-white transition-colors" />
              </span>
              <span className="relative z-10 block sm:hidden">Записатися</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
