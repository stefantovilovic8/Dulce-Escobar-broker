import type { Metadata } from "next";
import Header from "@/components/sections/header";
import AboutHeroSection from "@/components/sections/about-hero";
import { PartnerCarousel } from "@/components/sections/who-we-are";
import { FriendsAndPartnersTitle } from "@/components/sections/services-we-offer";
import HumanSignature from "@/components/sections/human-signature";
import TheValues from "@/components/sections/the-values";
import ExpertInsight from "@/components/sections/expert-insight";
import Footer from "@/components/sections/footer";
import OffPlanMoreLinks from "./OffPlanMoreLinks";

export const metadata: Metadata = {
  title: "About Dulce Escobar | 30+ Years Dubai Real Estate Experience",
  description: "Meet Dulce Escobar – a trusted Dubai real estate expert with over 30 years in the industry. Residential sales, off-plan, holiday homes and global investments.",
  keywords: "Dulce Escobar, Dubai real estate expert, about Dubai broker, luxury real estate Dubai, experienced property agent Dubai",
  alternates: { canonical: "https://dulcescobar.ae/off-plan" },
  openGraph: {
    title: "About Dulce Escobar | Dubai Real Estate Expert",
    description: "30+ years in Dubai real estate. Expert in luxury sales, off-plan & global investments.",
    url: "https://dulcescobar.ae/off-plan",
    siteName: "Dulce Escobar Real Estate",
    locale: "en_AE",
    type: "website",
  },
};

export default function AboutPage() {
  const pageBg = "#FFFFFF";
  return (
    <div className="min-h-screen text-outline" style={{ backgroundColor: pageBg }}>
      <Header bgColor={pageBg} />
      <main>
        <AboutHeroSection />
        <HumanSignature />
        <TheValues />
        <ExpertInsight />
        <OffPlanMoreLinks pageBg={pageBg} />
        <FriendsAndPartnersTitle />
        <PartnerCarousel />
      </main>
      <Footer bgColor={pageBg} />
    </div>
  );
}
