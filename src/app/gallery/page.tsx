import type { Metadata } from "next";
import Header from "@/components/sections/header";
import GalleryHero from "@/components/sections/gallery-hero";
import GalleryGrid from "@/components/sections/gallery-grid";
import Destinations from "@/components/sections/destinations";
import { PartnerCarousel } from "@/components/sections/who-we-are";
import { FriendsAndPartnersTitle } from "@/components/sections/services-we-offer";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Dubai Property Gallery | Luxury Homes & Apartments | Dulce Escobar",
  description: "Explore our gallery of luxury properties in Dubai – villas, penthouses and apartments in prime locations. Browse available listings with Dulce Escobar.",
  keywords: "Dubai luxury property gallery, luxury apartments Dubai photos, Dubai villas, Dubai penthouses, property photos Dubai",
  alternates: { canonical: "https://dulcescobar.ae/gallery" },
  openGraph: {
    title: "Dubai Property Gallery | Dulce Escobar",
    description: "Explore luxury villas, penthouses & apartments in Dubai.",
    url: "https://dulcescobar.ae/gallery",
    siteName: "Dulce Escobar Real Estate",
    locale: "en_AE",
    type: "website",
  },
};

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
