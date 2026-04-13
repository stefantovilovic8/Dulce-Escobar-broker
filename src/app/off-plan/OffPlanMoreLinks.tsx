"use client";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export default function OffPlanMoreLinks({ pageBg }: { pageBg: string }) {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col items-center text-center pt-8 pb-4 px-6" style={{ backgroundColor: pageBg }}>
      <p className="text-[1.1rem] md:text-[1.3rem] font-display text-[#1A1A1A] leading-tight mb-4">
        {t("offplan.more_opportunities")}
      </p>
      <p className="text-[1.1rem] md:text-[1.3rem] text-[#4A4A4A] font-body max-w-2xl">
        <Link href="/contact-us" className="text-[#C5A059] hover:underline">{t("offplan.contact_guide_prefix")}</Link>
        {t("offplan.contact_guide_suffix")}
      </p>
    </div>
  );
}
