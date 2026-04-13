"use client";

import Header from "@/components/sections/header";
import OffPlanHero from "@/components/sections/off-plan-hero";
import OffPlanContent from "@/components/sections/off-plan-content";
import Destinations from "@/components/sections/destinations";
import { PartnerCarousel } from "@/components/sections/who-we-are";
import { FriendsAndPartnersTitle } from "@/components/sections/services-we-offer";
import Footer from "@/components/sections/footer";

export default function OffPlanPropertiesPage() {
  const pageBg = "#FFFFFF";

  return (
    <div className="min-h-screen" style={{ backgroundColor: pageBg }}>
      <Header bgColor={pageBg} />
      <main>
        <OffPlanHero />
        <OffPlanContent />
        <div id="off-plan-projects">
          <Destinations />
        </div>
        <FriendsAndPartnersTitle />
        <PartnerCarousel />
      </main>
      <Footer bgColor={pageBg} />
    </div>
  );
}
