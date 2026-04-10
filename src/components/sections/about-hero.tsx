"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const BG = "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=90&w=2560&auto=format&fit=crop";

const AboutHeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[700px] h-screen w-full flex items-center overflow-hidden">
      {/* Background image */}
      <img
        src={BG}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* Warm beige overlay — keeps full texture visible, ensures text pops */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(135deg, rgba(250,248,244,0.60) 0%, rgba(245,241,234,0.50) 50%, rgba(250,248,244,0.65) 100%)",
        }}
      />

      {/* Top soft veil to blend with navbar */}
      <div
        className="absolute top-0 left-0 right-0 h-32 z-[2]"
        style={{ background: "linear-gradient(to bottom, rgba(250,248,244,0.70), transparent)" }}
      />

      {/* Bottom fade to pearl-white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-[2]"
        style={{ background: "linear-gradient(to bottom, transparent, #FAF8F4)" }}
      />

      {/* Content — centered */}
      <div className="container relative z-10 px-6 sm:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-5 items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 mt-[8vh] max-w-[720px] mx-auto">
            {/* Gold eyebrow */}
            <span className="text-[#C9A96E] font-body text-xs tracking-[0.28em] uppercase">
              {t("about.eyebrow")}
            </span>

          {/* Thin gold rule */}
          <div className="w-12 h-px bg-[#C9A96E] opacity-60" />

          {/* Headline */}
          <h2 className="text-[#1a1209] font-display leading-[1.1] tracking-[-0.02em] m-0 flex flex-wrap items-baseline justify-center gap-x-3">
            <span className="text-3xl md:text-4xl lg:text-[3.2rem] opacity-80">
              {t("about.titlePrefix")}
            </span>
            <span className="text-4xl md:text-5xl lg:text-[4rem]">
              {t("about.titleMain")}
            </span>
            <span className="text-3xl md:text-4xl lg:text-[3.2rem] opacity-80">
              {t("about.titleProjects")}
            </span>
          </h2>

          <h3 className="text-[#3a2e1e] font-display text-xl md:text-2xl leading-[1.3] tracking-[-0.01em] max-w-[580px]">
            {t("about.hero_subtitle")}
          </h3>

          <div
            className="opacity-0 animate-fade-in-up mt-4"
            style={{ animationDelay: "0.9s" }}
          >
            <a
              href="/contact-us"
              className="group inline-flex items-center gap-6 border border-[#C9A96E] rounded-full ps-8 pe-2 py-2 transition-all duration-300 ease-out hover:scale-105 hover:bg-[#C9A96E]/10"
              aria-label={t("hero.cta")}
            >
              <span className="text-[#1a1209] font-body text-sm md:text-base font-medium tracking-wide">
                {t("hero.cta")}
              </span>
              <div className="bg-[#C9A96E] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md group-hover:bg-[#b8935a] transition-colors duration-300">
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
