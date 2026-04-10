"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language-context";

const PILLAR_ICONS = [
  (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <circle cx="24" cy="24" r="14" stroke="#C5A059" strokeWidth="1.5"/>
      <line x1="24" y1="10" x2="24" y2="4" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="24" y1="44" x2="24" y2="38" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="10" y1="24" x2="4" y2="24" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="44" y1="24" x2="38" y2="24" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="24" cy="24" r="4" stroke="#C5A059" strokeWidth="1.5"/>
    </svg>
  ),
  (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <path d="M24 4L28.5 16H42L31.5 23.5L35.5 36L24 28.5L12.5 36L16.5 23.5L6 16H19.5L24 4Z" stroke="#C5A059" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <circle cx="24" cy="26" r="14" stroke="#C5A059" strokeWidth="1.5"/>
      <path d="M24 12V8" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18 9L20 13" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M30 9L28 13" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M24 26L18 20" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="24" cy="26" r="2" fill="#C5A059"/>
    </svg>
  ),
];

export default function WhyChooseDulce() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const pillars = [
    { titleKey: "why.pillar1.title", bodyKey: "why.pillar1.body" },
    { titleKey: "why.pillar2.title", bodyKey: "why.pillar2.body" },
    { titleKey: "why.pillar3.title", bodyKey: "why.pillar3.body" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-[100px] overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto max-w-[1140px] px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <span className="w-2 h-2 bg-[#C5A059] rounded-full mr-3" />
            <span className="text-[#C5A059] text-[12px] font-bold uppercase tracking-[0.15em] font-body">
              {t("why.eyebrow")}
            </span>
          </div>
          <h2 className="text-[#1A1A1A] text-[42px] md:text-[52px] font-display leading-[1.15]">
            {t("why.headline")}
          </h2>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.titleKey}
              className="group flex flex-col items-center md:items-start text-center md:text-left p-8 rounded-2xl border border-[#ECECEC] bg-white
                cursor-default transition-all duration-300 ease-out
                hover:shadow-[0_12px_48px_rgba(197,160,89,0.12)] hover:border-[#C5A059]/30"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s, box-shadow 0.3s ease, border-color 0.3s ease`,
              }}
            >
              {/* Icon */}
              <div className="mb-6 transition-transform duration-300 group-hover:scale-[1.08]">
                {PILLAR_ICONS[i]}
              </div>

              {/* Thin gold divider */}
              <div className="w-8 h-[1px] bg-[#C5A059] mb-6 mx-auto md:mx-0" />

              {/* Text */}
              <h3 className="text-[#1A1A1A] text-[22px] font-display mb-3">
                {t(pillar.titleKey)}
              </h3>
              <p className="text-[#4A4A4A] text-[15px] font-body font-light leading-[1.7]">
                {t(pillar.bodyKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
