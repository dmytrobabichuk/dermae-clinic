'use client';

import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
  showText?: boolean;
}

export default function Logo({
  variant = 'dark',
  className = '',
  showText = true,
}: LogoProps) {
  const isDark = variant === 'dark';

  const iconColor = isDark ? '#171918' : '#F7F5F0';
  const accentColor = '#8E9B8C';
  const textColor = isDark ? 'text-[#171918]' : 'text-[#F7F5F0]';
  const subtextColor = isDark ? 'text-[#575A58]' : 'text-white/40';

  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* ─── Геометрична емблема "D" зі зрізами 45° ─── */}
      <div className="relative w-8 h-8 shrink-0 transition-transform duration-500 group-hover:scale-105">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Вертикальна вісь із внутрішнім 45° зрізом */}
          <path
            d="M8 6H14V34H8V6Z"
            fill={iconColor}
            className="transition-colors duration-300"
          />
          {/* Верхня діагональна планка 45° */}
          <path
            d="M14 6H24L32 14V19H26L21 14H14V6Z"
            fill={iconColor}
            className="transition-colors duration-300"
          />
          {/* Нижня геометрія дуги зі зрізом */}
          <path
            d="M14 34H24L32 26V21H26L21 26H14V34Z"
            fill={iconColor}
            className="transition-colors duration-300"
          />
          {/* Зовнішня акцентна грань кольору шавлії */}
          <path
            d="M32 14L34 16V24L32 26V14Z"
            fill={accentColor}
            className="opacity-80 group-hover:opacity-100 transition-opacity"
          />
          {/* Внутрішній мікро-ромб точності */}
          <rect
            x="19"
            y="18.5"
            width="3"
            height="3"
            transform="rotate(45 19 18.5)"
            fill={accentColor}
          />
        </svg>
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
