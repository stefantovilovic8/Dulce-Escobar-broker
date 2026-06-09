"use client";

import Header from "@/components/sections/header";
import HolidayHomesHero from "@/components/sections/holiday-homes-hero";
import RentIntro from "@/components/sections/rent-intro";
import RentalCarousel from "@/components/sections/rental-carousel";
import InvestmentListings from "@/components/sections/investment-listings";
import CityLifestyleGuide from "@/components/sections/city-lifestyle-guide";
import { PartnerCarousel } from "@/components/sections/who-we-are";
import { FriendsAndPartnersTitle } from "@/components/sections/services-we-offer";
import Footer from "@/components/sections/footer";

export default function HolidayHomesPage() {
  const pageBg = "#FFFFFF";

  return (
    <div className="min-h-screen" style={{ backgroundColor: pageBg }}>
      <Header bgColor={pageBg} />
      <main>
        <HolidayHomesHero />
        <RentIntro />
        <RentalCarousel />
        <div id="rental-listings">
          <InvestmentListings />
        </div>
        <CityLifestyleGuide />
        <FriendsAndPartnersTitle />
        <PartnerCarousel />
      </main>
      <Footer bgColor={pageBg} />
    </div>
  );
}