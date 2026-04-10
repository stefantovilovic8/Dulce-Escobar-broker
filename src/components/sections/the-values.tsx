"use client";

import { useLanguage } from "@/lib/language-context";

export default function TheValues() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="18" r="17" stroke="#C5A059" strokeWidth="1.2" />
          <path d="M18 9v18M9 18h18" stroke="#C5A059" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      ),
      headline: t("values.precision.title"),
      body: t("values.precision.body"),
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="18" r="17" stroke="#C5A059" strokeWidth="1.2" />
          <path d="M12 14c0-3.314 2.686-6 6-6s6 2.686 6 6c0 4-6 10-6 10s-6-6-6-10z" stroke="#C5A059" strokeWidth="1.2" strokeLinejoin="round" />
          <circle cx="18" cy="14" r="2" stroke="#C5A059" strokeWidth="1.2" />
        </svg>
      ),
      headline: t("values.discretion.title"),
      body: t("values.discretion.body"),
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="18" r="17" stroke="#C5A059" strokeWidth="1.2" />
          <path d="M10 26l5-8 4 5 3-5 4 8" stroke="#C5A059" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      headline: t("values.vision.title"),
      body: t("values.vision.body"),
    },
  ];

  return (
    <section className="bg-[#F9F8F6] py-[90px]">
      <div className="container mx-auto max-w-[1140px] px-6">
        <p className="text-center text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-body mb-4">
          {t("values.eyebrow")}
        </p>
        <h2 className="text-center font-display text-[32px] md:text-[42px] text-[#1A1A1A] leading-[1.2] mb-16">
          {t("values.headline")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {pillars.map((pillar, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4">
              <div className="mb-6">{pillar.icon}</div>
              <div className="w-8 h-px bg-[#C5A059] mb-6" />
              <h3 className="font-display text-[20px] text-[#1A1A1A] tracking-wide mb-4">
                {pillar.headline}
              </h3>
              <p className="font-body font-light text-[15px] text-[#5A5A5A] leading-[1.75]">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
