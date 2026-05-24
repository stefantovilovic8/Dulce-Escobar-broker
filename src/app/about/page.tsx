import type { Metadata } from "next";
import Header from "@/components/sections/header";
import AboutHeroSection from "@/components/sections/about-hero";
import { PartnerCarousel } from "@/components/sections/who-we-are";
import { FriendsAndPartnersTitle } from "@/components/sections/services-we-offer";
import HumanSignature from "@/components/sections/human-signature";
import TheValues from "@/components/sections/the-values";
import ExpertInsight from "@/components/sections/expert-insight";
import Footer from "@/components/sections/footer";
import AboutMoreLinks from "./AboutMoreLinks";
import Testimonials from "@/components/sections/testimonials";

export const metadata: Metadata = {
  title: "About Dulce Escobar | Luxury Real Estate Broker in Dubai",
  description: "Meet Dulce Escobar – a dedicated Dubai real estate broker specialising in luxury rentals, off-plan investments, and bespoke property solutions. Transparent, exclusive, precise.",
  keywords: "Dulce Escobar, Dubai real estate expert, about Dubai broker, luxury real estate Dubai, experienced property agent Dubai",
  alternates: { canonical: "https://dulcescobar.ae/about" },
  openGraph: {
    title: "About Dulce Escobar | Dubai Real Estate Expert",
    description: "Dubai real estate broker specialising in luxury rentals, off-plan investments, and bespoke property solutions.",
    url: "https://dulcescobar.ae/about",
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
        <Testimonials />
        <AboutMoreLinks pageBg={pageBg} />
        <FriendsAndPartnersTitle />
        <PartnerCarousel />
      </main>
      <Footer bgColor={pageBg} />
    </div>
  );
}
