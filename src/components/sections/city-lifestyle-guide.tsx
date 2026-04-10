"use client";

import React from "react";
import { useLanguage } from "@/lib/language-context";

export default function CityLifestyleGuide() {
  const { t } = useLanguage();

  const items = [
    { labelKey: "city.item1.label", textKey: "city.item1.text" },
    { labelKey: "city.item2.label", textKey: "city.item2.text" },
    { labelKey: "city.item3.label", textKey: "city.item3.text" },
  ];

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <p className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium mb-4">
          {t("city.eyebrow")}
        </p>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-gray-900 mb-6 leading-tight">
          {t("city.headline")}
        </h2>

        {/* Intro paragraph */}
        <p className="text-gray-600 font-body text-base md:text-lg leading-relaxed max-w-3xl mb-14">
          {t("city.intro")}
        </p>

        {/* Three items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="w-8 h-px bg-[#C5A059]" />
              <h3 className="text-base font-semibold text-gray-900 tracking-wide">
                {t(item.labelKey)}
              </h3>
              <p className="text-gray-500 font-body text-sm leading-relaxed">
                {t(item.textKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
