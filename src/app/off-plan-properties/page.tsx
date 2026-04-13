import type { Metadata } from "next";
import Header from "@/components/sections/header";
import OffPlanHero from "@/components/sections/off-plan-hero";
import OffPlanContent from "@/components/sections/off-plan-content";
import { PartnerCarousel } from "@/components/sections/who-we-are";
import { FriendsAndPartnersTitle } from "@/components/sections/services-we-offer";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Off-Plan Properties Dubai | Buy Before Completion | Dulce Escobar",
  description: "Invest in off-plan properties in Dubai before completion. Lower prices, flexible payment plans and capital appreciation. Expert guidance from Dulce Escobar.",
  keywords: "off-plan properties Dubai, buy off-plan Dubai, new developments Dubai, Dubai property investment, payment plan Dubai, Binghatti off-plan",
  alternates: { canonical: "https://dulcescobar.ae/off-plan-properties" },
  openGraph: {
    title: "Off-Plan Properties Dubai | Dulce Escobar",
    description: "Invest in Dubai off-plan properties. Flexible payment plans & strong capital appreciation.",
    url: "https://dulcescobar.ae/off-plan-properties",
    siteName: "Dulce Escobar Real Estate",
    locale: "en_AE",
    type: "website",
  },
};

export default function OffPlanPropertiesPage() {
  const pageBg = "#FFFFFF";
  return (
    <div className="min-h-screen" style={{ backgroundColor: pageBg }}>
      <Header bgColor={pageBg} />
      <main>
        <OffPlanHero />
        <OffPlanContent />
        <FriendsAndPartnersTitle />
        <PartnerCarousel />
      </main>
      <Footer bgColor={pageBg} />
    </div>
  );
}
