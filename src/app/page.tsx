import type { Metadata } from "next";
import Header from "@/components/sections/header";
import HeroClean from "@/components/sections/hero-clean";
import { PartnerCarousel } from "@/components/sections/who-we-are";
import VideoCTA from "@/components/sections/video-cta";
import CityLifestyleGuide from "@/components/sections/city-lifestyle-guide";
import WhyChooseDulce from "@/components/sections/why-choose-dulce";
import CtaContact from "@/components/sections/cta-contact";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Dulce Escobar | Dubai Real Estate Agent – Luxury Properties, Off-Plan & Rentals",
  description: "Dulce Escobar is a top Dubai real estate broker with 30+ years experience. Specialising in luxury property sales, off-plan investments, short-term & long-term rentals in Dubai.",
  keywords: "Dubai real estate agent, luxury properties Dubai, off-plan Dubai, apartments for rent Dubai, buy property Dubai, Dubai property broker, Dulce Escobar",
  alternates: { canonical: "https://dulcescobar.ae/" },
  openGraph: {
    title: "Dulce Escobar | Dubai Real Estate Agent",
    description: "30+ years experience in Dubai real estate. Luxury sales, off-plan investments & premium rentals.",
    url: "https://dulcescobar.ae/",
    siteName: "Dulce Escobar Real Estate",
    images: [{ url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/VIDALS-logic-1768335205150.png?width=1200&height=630&resize=cover", width: 1200, height: 630, alt: "Dulce Escobar - Dubai Real Estate" }],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulce Escobar | Dubai Real Estate Agent",
    description: "30+ years experience in Dubai real estate. Luxury sales, off-plan investments & premium rentals.",
    images: ["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/VIDALS-logic-1768335205150.png?width=1200&height=630&resize=cover"],
  },
};

export default function Home() {
  const homeBg = "#FFFFFF";
  return (
    <div className="min-h-screen" style={{ backgroundColor: homeBg }}>
      <Header bgColor={homeBg} />
      <main>
        <HeroClean />
        <WhyChooseDulce />
        <CityLifestyleGuide />
        <VideoCTA />
        <PartnerCarousel />
        <CtaContact />
      </main>
      <Footer bgColor={homeBg} />
    </div>
  );
}
