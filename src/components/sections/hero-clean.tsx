"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

// Cream page background — must match for gradient blending
const R = 250, G = 249, B = 246;
const bg  = `rgb(${R},${G},${B})`;
const fade = (a: number) => `rgba(${R},${G},${B},${a})`;

export default function HeroClean() {
  const { t } = useLanguage();

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: bg }}
    >

      {/* ── MOBILE: portrait stacked above text, fades downward ──── */}
      <div className="md:hidden relative w-full -mb-20" style={{ height: '105vw', maxHeight: '580px' }}>
        <Image
          src="/dulce-portrait.png"
          alt=""
          fill
          className="object-cover object-[center_top]"
          style={{ filter: 'grayscale(100%) brightness(1.28) contrast(1.1)' }}
          priority
          sizes="100vw"
        />
        {/* Fade downward into cream background — starts late so more image is visible */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${fade(1)} 0%, ${fade(0)} 10%, ${fade(0)} 52%, ${fade(0.45)} 65%, ${fade(0.82)} 80%, ${fade(1)} 91%)`,
          }}
        />
        {/* Subtle left + right edge fade */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${fade(0.4)} 0%, transparent 14%, transparent 86%, ${fade(0.4)} 100%)`,
          }}
        />
      </div>

      {/* ── DESKTOP: portrait absolutely positioned on right ──────── */}
      <div
        className="absolute right-0 top-0 h-full w-[68%] pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        <Image
          src="/dulce-portrait.png"
          alt=""
          fill
          className="object-cover object-[center_top]"
          style={{ filter: 'grayscale(100%) brightness(1.28) contrast(1.1)' }}
          priority
          sizes="68vw"
        />

        {/* ← Left edge */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${fade(1)} 0%, ${fade(1)} 8%, ${fade(0.72)} 18%, ${fade(0.28)} 30%, transparent 46%)`,
          }}
        />
        {/* ↑ Top edge */}
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to bottom, ${fade(1)} 0%, ${fade(0)} 13%)` }}
        />
        {/* ↓ Bottom edge */}
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to top, ${fade(1)} 0%, ${fade(0)} 20%)` }}
        />
      </div>

      {/* ── Text content ─────────────────────────────────────────── */}
      <div
        className="relative z-10 w-full container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16 md:min-h-[760px] md:h-[112vh]"
      >
        {/* On desktop: fill height and center; on mobile: just flow naturally */}
        <div className="hidden md:flex flex-col items-start text-left max-w-[560px] h-full justify-center pt-28 pb-20">
          <HeroText t={t} />
        </div>
        <div className="flex md:hidden flex-col items-start text-left pb-8 pt-2">
          <HeroText t={t} />
        </div>
      </div>
    </section>
  );
}

function HeroText({ t }: { t: (key: string) => string }) {
  return (
    <>
      {/* Eyebrow */}
      <div
        className="flex items-center gap-3 mb-7 opacity-0 animate-fade-in-up"
        style={{ animationDelay: '0.1s' }}
      >
        <div className="w-5 h-[1px] bg-[#C3A36D]" />
        <span className="font-body text-[11px] tracking-[0.22em] uppercase text-[#C3A36D]">
          {t("hero.eyebrow")}
        </span>
      </div>

      {/* Main headline */}
      <h1
        className="font-display text-[#111a2c] text-5xl md:text-6xl lg:text-[5.5rem] font-normal leading-[1.06] mb-6 opacity-0 animate-fade-in-up"
        style={{ animationDelay: '0.25s' }}
      >
        {t("hero.headline_line1")}
        <br />
        <span className="italic text-[#C3A36D]">{t("hero.headline_italic")}</span>
        {t("hero.headline_separator")}
        {t("hero.headline_line2")}
      </h1>

      {/* Gold rule */}
      <div
        className="w-14 h-[1.5px] bg-[#C3A36D] mb-7 opacity-0 animate-fade-in-up"
        style={{ animationDelay: '0.45s' }}
      />

      {/* Sub-copy */}
      <p
        className="font-body text-[#111a2c]/60 text-[15px] md:text-[17px] leading-[1.9] max-w-[460px] mb-5 opacity-0 animate-fade-in-up"
        style={{ animationDelay: '0.6s' }}
      >
        {t("hero.subtext")}
      </p>

      {/* CTA buttons */}
      <div
        className="flex flex-row gap-4 opacity-0 animate-fade-in-up mb-4 w-full"
        style={{ animationDelay: '0.8s' }}
      >
        <a
          href="/contact-us"
          className="group inline-flex flex-1 items-center justify-center gap-2 bg-[#C3A36D] hover:bg-[#ae8f5a] text-white font-body text-xs font-medium tracking-wide rounded-full px-5 py-3 transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-lg hover:shadow-[#C3A36D]/35"
          aria-label={t("hero.cta")}
        >
          {t("hero.cta")}
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
        </a>

        <a
          href="/services#listings"
          className="group inline-flex flex-1 items-center justify-center gap-2 border border-[#111a2c]/25 hover:border-[#C3A36D] text-[#111a2c] hover:text-[#C3A36D] font-body text-xs font-medium tracking-wide rounded-full px-5 py-3 transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-[#C3A36D]/5"
        >
          {t("hero.explore_listings")}
        </a>
      </div>

      {/* Brand mark */}
      <div
        className="mt-14 flex items-center gap-2.5 opacity-0 animate-fade-in-up"
        style={{ animationDelay: '1.05s' }}
      >
        <span className="text-[#C3A36D]/55 text-sm leading-none">✦</span>
        <span
          className="font-display italic text-sm tracking-wider"
          style={{ color: 'rgba(17,26,44,0.3)' }}
        >
          Dulce Escobar
        </span>
        <span className="text-[#C3A36D]/55 text-sm leading-none">✦</span>
      </div>
    </>
  );
}
