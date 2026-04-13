"use client";

import Header from "@/components/sections/header";
import ServicesHero from "@/components/sections/services-hero";
import ServicesIntro from "@/components/sections/services-intro";
import InvestmentListings from "@/components/sections/investment-listings";
import { PartnerCarousel } from "@/components/sections/who-we-are";
import { FriendsAndPartnersTitle } from "@/components/sections/services-we-offer";
import Footer from "@/components/sections/footer";

export default function SalePage() {
  const pageBg = "#FFFFFF";

  return (
    <div className="min-h-screen" style={{ backgroundColor: pageBg }}>
      <Header bgColor={pageBg} />
      <main>
        <ServicesHero />
        <ServicesIntro />
        <InvestmentListings />
        <FriendsAndPartnersTitle />
        <PartnerCarousel />
      </main>
      <Footer bgColor={pageBg} />
    </div>
  );
}
