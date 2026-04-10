"use client";

import { useLanguage } from "@/lib/language-context";

export default function HumanSignature() {
  const { t } = useLanguage();
  return (
    <section className="bg-white py-[80px]">
      <div className="container mx-auto max-w-[1140px] px-6 text-center">
        <h2 className="text-[#1A1A1A] text-[38px] md:text-[48px] font-display leading-[1.2] mb-6">
          {t("humanSig.headline")}
        </h2>
        <p className="text-[#4A4A4A] text-[17px] font-body font-light leading-[1.7] max-w-[720px] mx-auto">
          {t("humanSig.body")}
        </p>
      </div>
    </section>
  );
}
