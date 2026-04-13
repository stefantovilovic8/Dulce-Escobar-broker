import type { Metadata } from "next";
import Header from "@/components/sections/header";
import SaleHero from "@/components/sections/sale-hero";
import SaleIntro from "@/components/sections/sale-intro";
import SaleListings from "@/components/sections/sale-listings";
import { PartnerCarousel } from "@/components/sections/who-we-are";
import { FriendsAndPartnersTitle } from "@/components/sections/services-we-offer";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Properties for Sale in Dubai | Luxury Real Estate | Dulce Escobar",
  description: "Buy luxury properties and apartments in Dubai. Expert guidance on residential sales, off-plan investments and high-yield properties. Contact Dulce Escobar.",
  keywords: "properties for sale Dubai, buy apartment Dubai, luxury homes for sale Dubai, Dubai real estate sale, investment property Dubai",
  alternates: { canonical: "https://dulcescobar.ae/sale" },
  openGraph: {
    title: "Properties for Sale in Dubai | Dulce Escobar",
    description: "Luxury residential sales and investment properties in Dubai.",
    url: "https://dulcescobar.ae/sale",
    siteName: "Dulce Escobar Real Estate",
    locale: "en_AE",
    type: "website",
  },
};

export default function SalePage() {
  const pageBg = "#FFFFFF";
  return (
    <div className="min-h-screen" style={{ backgroundColor: pageBg }}>
      <Header bgColor={pageBg} />
      <main>
        <SaleHero />
        <SaleIntro />
        <SaleListings />
        <FriendsAndPartnersTitle />
        <PartnerCarousel />
      </main>
      <Footer bgColor={pageBg} />
    </div>
  );
}
