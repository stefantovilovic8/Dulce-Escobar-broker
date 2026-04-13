import type { Metadata } from "next";
import Header from "@/components/sections/header";
import GalleryHero from "@/components/sections/gallery-hero";
import GalleryGrid from "@/components/sections/gallery-grid";
import Destinations from "@/components/sections/destinations";
import { PartnerCarousel } from "@/components/sections/who-we-are";
import { FriendsAndPartnersTitle } from "@/components/sections/services-we-offer";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Dubai Concierge & Holiday Homes | Dulce Escobar Real Estate",
  description: "Premium concierge services and holiday home rentals in Dubai. Short-term furnished apartments and luxury stays in prime Dubai locations.",
  keywords: "Dubai concierge service, holiday homes Dubai, short term rentals Dubai, luxury holiday apartments Dubai, furnished rentals Dubai",
  alternates: { canonical: "https://dulcescobar.ae/concierge" },
  openGraph: {
    title: "Dubai Concierge & Holiday Homes | Dulce Escobar",
    description: "Luxury holiday homes and concierge services in Dubai.",
    url: "https://dulcescobar.ae/concierge",
    siteName: "Dulce Escobar Real Estate",
    locale: "en_AE",
    type: "website",
  },
};

export default function ConciergePage() {
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
