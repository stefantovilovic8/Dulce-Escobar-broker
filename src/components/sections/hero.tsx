"use client";

import React, { useEffect, useRef, useState } from 'react';
import NextImage from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

// Dubai sky villa penthouse — open-plan interior, white marble, glass walls, Burj Khalifa skyline
const BG_SRC = "https://images.unsplash.com/photo-1582407947304-fd86f28f1dc5?w=2400&q=90&auto=format&fit=crop&crop=center";
const BG_ALT  = "Luxury Dubai penthouse interior with white marble floors, floor-to-ceiling glass walls and Burj Khalifa skyline";

export default function HeroSection() {
  const { t } = useLanguage();
  const [parallaxY, setParallaxY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setParallaxY(-rect.top * 0.25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen min-h-[700px] overflow-hidden"
        style={{ background: '#111a2c' }}
    >
      {/* ── Parallax background ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${parallaxY}px) scale(1.12)`,
          willChange: 'transform',
          top: '-6%',
          bottom: '-6%',
        }}
      >
        <NextImage
          src={BG_SRC}
          alt={BG_ALT}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* ── Overlays ── */}
      {/* Left-heavy dark veil — text reads cleanly on left, full skyline visible on right */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#111a2c]/85 via-[#111a2c]/40 to-transparent" />
      {/* Top fade so white navbar pops against the bright skyline */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#111a2c]/50 via-transparent to-transparent" />
      {/* Subtle warm gold tint to match navbar gold accents */}
      <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#C3863A]/10 via-transparent to-transparent" />
      {/* Bottom fade to page background */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-10 bg-gradient-to-t from-[#FAF8F4] to-transparent" />

      {/* ── Editorial content — left-aligned ── */}
      <div className="relative z-20 w-full h-full flex flex-col justify-center">
        <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <div className="flex flex-col items-start text-left max-w-[680px] pt-16 md:pt-20">

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
                className="font-display text-white text-5xl md:text-6xl lg:text-[5.25rem] font-normal leading-[1.07] mb-6 opacity-0 animate-fade-in-up"
                style={{ animationDelay: '0.25s' }}
              >
                {t("hero.headline_line1")}<br />
                <span style={{ unicodeBidi: 'isolate' }}><span className="italic text-[#C3A36D]">{t("hero.headline_italic")}</span>{t("hero.headline_separator")}{t("hero.headline_line2")}</span>
              </h1>

            {/* Gold rule */}
            <div
              className="w-14 h-[1.5px] bg-[#C3A36D] mb-7 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.45s' }}
            />

              {/* Sub-copy */}
              <p
                className="font-body text-white/70 text-base md:text-[17px] leading-[1.85] max-w-[520px] mb-12 opacity-0 animate-fade-in-up"
                style={{ animationDelay: '0.6s' }}
              >
                {t("hero.subtext")}
              </p>

            {/* CTA buttons */}
            <div
              className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.8s' }}
            >
              {/* Primary — solid gold capsule */}
              <a
                href="/contact-us"
                className="group inline-flex items-center gap-3 bg-[#C3A36D] hover:bg-[#ae8f5a] text-white font-body text-sm font-medium tracking-wide rounded-full px-8 py-4 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-[#C3A36D]/40"
                aria-label={t("hero.cta")}
              >
                {t("hero.cta")}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
              </a>

                {/* Secondary — ghost capsule */}
                <a
                  href="/services#listings"
                  className="group inline-flex items-center gap-3 border border-white/40 hover:border-[#C3A36D] text-white hover:text-[#C3A36D] font-body text-sm font-medium tracking-wide rounded-full px-8 py-4 transition-all duration-300 ease-out hover:scale-105 hover:bg-[#C3A36D]/10"
                >
                  {t("hero.explore_listings")}
                </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
