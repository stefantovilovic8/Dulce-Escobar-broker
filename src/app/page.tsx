"use client";

import Header from "@/components/sections/header";
import HeroClean from "@/components/sections/hero-clean";
import { PartnerCarousel } from "@/components/sections/who-we-are";
import VideoCTA from "@/components/sections/video-cta";
import CityLifestyleGuide from "@/components/sections/city-lifestyle-guide";
import WhyChooseDulce from "@/components/sections/why-choose-dulce";
import CtaContact from "@/components/sections/cta-contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  const homeBg = "#FFFFFF";

  
  return (
    <div className="min-h-screen" style={{ backgroundColor: homeBg }}>
      <Header bgColor={homeBg} />
        <HeroClean />
              <WhyChooseDulce />
            <CityLifestyleGuide />
          <VideoCTA />
          <PartnerCarousel />
        <CtaContact />
      <Footer bgColor={homeBg} />
    </div>
  );
}
