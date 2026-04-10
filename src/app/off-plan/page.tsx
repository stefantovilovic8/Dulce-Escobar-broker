"use client";

import Header from "@/components/sections/header";
import AboutHeroSection from "@/components/sections/about-hero";
import WhoWeAre from "@/components/sections/who-we-are";
import { PartnerCarousel } from "@/components/sections/who-we-are";
import { FriendsAndPartnersTitle } from "@/components/sections/services-we-offer";
import HumanSignature from "@/components/sections/human-signature";
import TheValues from "@/components/sections/the-values";
import ExpertInsight from "@/components/sections/expert-insight";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export default function AboutPage() {
  const { t } = useLanguage();
  const pageBg = "#FFFFFF";
  
  return (
    <div className="min-h-screen text-outline" style={{ backgroundColor: pageBg }}>
      <Header bgColor={pageBg} />
      <main>
        <AboutHeroSection />
          <HumanSignature />
           <TheValues />
             <ExpertInsight />
         
          <div className="flex flex-col items-center text-center pt-8 pb-4 px-6" style={{ backgroundColor: pageBg }}>
            <p className="text-[1.1rem] md:text-[1.3rem] font-display text-[#1A1A1A] leading-tight mb-4">
              {t("offplan.more_opportunities")}
            </p>
            <p className="text-[1.1rem] md:text-[1.3rem] text-[#4A4A4A] font-body max-w-2xl">
              <Link href="/contact-us" className="text-[#C5A059] hover:underline">{t("offplan.contact_guide_prefix")}</Link>{t("offplan.contact_guide_suffix")}
            </p>
        </div>
        <FriendsAndPartnersTitle />
        <PartnerCarousel />
      </main>
      <Footer bgColor={pageBg} />
    </div>
  );
}
