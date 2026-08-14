'use client';

import Image from 'next/image';

interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
  showText?: boolean;
  /** Size of the emblem in pixels */
  size?: number;
}

export default function Logo({
  variant = 'dark',
  className = '',
  showText = true,
  size = 36,
}: LogoProps) {
  const isDark = variant === 'dark';
  const textColor = isDark ? 'text-[#171918]' : 'text-[#F7F5F0]';
  const subtextColor = isDark ? 'text-[#575A58]' : 'text-white/40';

  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* ─── Logo Emblem from file ─── */}
      <div
        className="relative shrink-0 transition-transform duration-500 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo.jpeg"
          alt="DERMAÉ Clinic"
          width={size}
          height={size}
          className={`object-contain ${isDark ? '' : 'brightness-[10] contrast-50 opacity-90'}`}
          priority
        />
      </div>

      {/* ─── Типографіка ─── */}
      {showText && (
        <div className="flex flex-col items-start leading-none">
          <span
            className={`font-serif text-[1.35rem] tracking-[0.06em] font-normal transition-colors duration-300 ${textColor} group-hover:text-[#8E9B8C]`}
          >
            DERMAÉ
          </span>
          <span
            className={`font-sans text-[0.52rem] tracking-[0.3em] uppercase font-medium mt-1 ${subtextColor}`}
          >
            Clinic
          </span>
        </div>
      )}
    </div>
  );
}
