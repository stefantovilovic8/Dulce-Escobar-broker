"use client";

import Header from "@/components/sections/header";
import RentIntro from "@/components/sections/rent-intro";
import RentalCarousel from "@/components/sections/rental-carousel";
import InvestmentListings from "@/components/sections/investment-listings";
import { PartnerCarousel } from "@/components/sections/who-we-are";
import { FriendsAndPartnersTitle } from "@/components/sections/services-we-offer";
import Footer from "@/components/sections/footer";

export default function HolidayHomesPage() {
  const pageBg = "#FFFFFF";

  return (
    <div className="min-h-screen" style={{ backgroundColor: pageBg }}>
      <Header bgColor={pageBg} />
      <main>
        <RentIntro />
        <RentalCarousel />
        <InvestmentListings />
        <FriendsAndPartnersTitle />
        <PartnerCarousel />
      </main>
      <Footer bgColor={pageBg} />
    </div>
  );
}