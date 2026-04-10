"use client";

import Header from "@/components/sections/header";
import GalleryHero from "@/components/sections/gallery-hero";
import GalleryGrid from "@/components/sections/gallery-grid";
import Destinations from "@/components/sections/destinations";
import { PartnerCarousel } from "@/components/sections/who-we-are";
import { FriendsAndPartnersTitle } from "@/components/sections/services-we-offer";
import Footer from "@/components/sections/footer";

export default function GalleryPage() {
  const pageBg = "#FFFFFF";
  
  return (
    <div className="min-h-screen" style={{ backgroundColor: pageBg }}>
      <Header bgColor={pageBg} />
      <main>
        <GalleryHero />
        <Destinations />
        <GalleryGrid />
        <FriendsAndPartnersTitle />
        <PartnerCarousel />
      </main>
      <Footer bgColor={pageBg} />
    </div>
  );
}
