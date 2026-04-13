import type { Metadata } from "next";
import Header from "@/components/sections/header";
import ContactHero from "@/components/sections/contact-hero";
import ContactForm from "@/components/sections/contact-form";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Contact Dulce Escobar | Dubai Real Estate Agent",
  description: "Get in touch with Dulce Escobar – Dubai's trusted real estate broker. Enquire about buying, selling or renting luxury properties in Dubai.",
  keywords: "contact Dubai real estate agent, Dulce Escobar contact, Dubai property enquiry, real estate consultation Dubai",
  alternates: { canonical: "https://dulcescobar.ae/contact-us" },
  openGraph: {
    title: "Contact Dulce Escobar | Dubai Real Estate",
    description: "Reach out to Dulce Escobar for expert advice on buying, selling or renting in Dubai.",
    url: "https://dulcescobar.ae/contact-us",
    siteName: "Dulce Escobar Real Estate",
    locale: "en_AE",
    type: "website",
  },
};

export default function ContactUsPage() {
  const pageBg = "#FFFFFF";
  
  return (
    <div className="min-h-screen" style={{ backgroundColor: pageBg }}>
      <Header bgColor={pageBg} />
      <main>
        <ContactHero />
        <ContactForm />
      </main>
      <Footer bgColor={pageBg} />
    </div>
  );
}
