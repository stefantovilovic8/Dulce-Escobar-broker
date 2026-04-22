import type { Metadata } from "next";
import Header from "@/components/sections/header";
import RentHero from "@/components/sections/rent-hero";
import InvestmentListings from "@/components/sections/investment-listings";
import { PartnerCarousel } from "@/components/sections/who-we-are";
import { FriendsAndPartnersTitle } from "@/components/sections/services-we-offer";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Apartments for Rent in Dubai | Dulce Escobar Real Estate",
  description: "Browse luxury apartments and properties for rent in Dubai. Long-term and short-term rentals in prime locations. Binghatti, Downtown, JVC and more. Contact Dulce Escobar today.",
  keywords: "apartments for rent Dubai, luxury rentals Dubai, long term rental Dubai, short term rental Dubai, furnished apartments Dubai, Binghatti rent Dubai",
  alternates: { canonical: "https://dulcescobar.ae/services" },
  openGraph: {
    title: "Apartments for Rent in Dubai | Dulce Escobar",
    description: "Luxury apartments for rent in Dubai – long-term & short-term. Browse available listings with Dulce Escobar.",
    url: "https://dulcescobar.ae/services",
    siteName: "Dulce Escobar Real Estate",
    locale: "en_AE",
    type: "website",
  },
};

export default function ServicesPage() {
  const pageBg = "#FFFFFF";
  return (
    <div className="min-h-screen" style={{ backgroundColor: pageBg }}>
      <Header bgColor={pageBg} />
      <main>
        <RentHero />
<InvestmentListings />
        <FriendsAndPartnersTitle />
        <PartnerCarousel />
      </main>
      <Footer bgColor={pageBg} />
    </div>
  );
}
