"use client";

import Header from "@/components/sections/header";
import ContactHero from "@/components/sections/contact-hero";
import ContactForm from "@/components/sections/contact-form";
import Footer from "@/components/sections/footer";

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
